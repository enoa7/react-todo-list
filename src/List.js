import React from 'react';

export default class List extends React.Component {

    handleRemove(index) {
        this.props.handleRemove(index);
    }

    handleEdit(index) {
        this.props.handleEdit(index);
    }

    render() {
        return (
            <ul>
                {
                    this.props.items.map(
                        (item, index) => (
                            <li key={index}>
                                <div className="d-flex wrapper">
                                    <div onClick={this.handleEdit.bind(this, index)}>
                                        {item}
                                    </div>
                                    <div className="icon-group">
                                        <i className="fa fa-times" onClick={this.handleRemove.bind(this, index)}></i>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}