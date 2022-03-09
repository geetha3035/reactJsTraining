import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark',
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            name: props.newname
        }
    }

    render(){
        return(
            <h1>Name: {this.state.name}</h1>
        )
    }
}

export default Header;