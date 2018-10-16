import React, { Component } from 'react';

import './AddPerson.css';

export default class extends Component {
    state = {
        name: '',
        age: ''
    }

    changeHandler = (event, att) => {
        this.setState({ [att]: event.target.value });
    }

    render() {
        return (
            <div className="AddPerson">
                <input 
                    type='text'
                    name='name' 
                    onChange={(event) => this.changeHandler(event, 'name')} 
                    value={this.state.name}
                    placeholder='Name'
                />
                <input 
                    type='text' 
                    name='age'
                    onChange={(event) => this.changeHandler(event, 'age')} 
                    value={this.state.age} 
                    placeholder='Age'
                />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}