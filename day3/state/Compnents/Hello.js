import React, { Component } from 'react';

class Hello extends Component{

    constructor(){
        super()
        this.state = {
            name: 'Guest',
            email: 'guest@gmail.com'
        }
    }

    onClickHandler = () => {
        console.log(this.state.name)
        //this.state.name = 'Mark'
        this.setState({
            name: 'Mark',
            email: 'm@gmail.com'
        })
        console.log(this.state.name)
    }

    render(){
        return (
            <div>
                <h1>Name: { this.state.name }, {this.state.email}</h1>
                <button onClick={ this.onClickHandler  }>Login</button>
            </div>
        )
    }
}
export default Hello;