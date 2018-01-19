import React from 'react';
import List from './List';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditable: false,
            current: {
                index: null,
                value: null
            },
            term: '',
            items: [],
        };
    }

    onChange = (event) => {
        let targetVal = event.target.value;
        this.setState({ term: targetVal });
    }

    onRemove = (index) => {
        this.state.items.splice(index, 1);
        this.setState({ items: this.state.items });
    }

    onEdit = (index) => {
        let current = {...this.state.current};
        current.index = index;
        current.value = this.state.items[index];
        this.setState({ current });
        this.setState(prevState => ({ isEditable: true }));
        // this.setState(prevState => ({ isEditable: !prevState.isEditable }));
    }

    onEditChange = (event) => {
        let newItems = this.state.items.slice();
        newItems[this.state.current.index] = event.target.value;
        this.setState({items: newItems});
    }
 
    onSubmitForm = (event) => {
        event.preventDefault();

        if (this.state.term) {
            this.setState({
                term: "",
                items: [...this.state.items, this.state.term]
            })
        }
    }


    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmitForm}>
                    <input className="form-control" value={this.state.term} onChange={this.onChange} />
                    <button className="btn btn=primary">Submit</button>
                </form>
                <List
                    items={this.state.items}
                    handleRemove={this.onRemove}
                    handleEdit={this.onEdit}>
                </List>
                <div>
                    {this.state.isEditable ? <input type="text" value={this.state.items[this.state.current.index]} onChange={this.onEditChange.bind(this)} className="form-control" /> : '' }
                </div>
            </div>
        )
    }
}