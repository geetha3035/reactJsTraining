import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
        console.log('lifecycle: constructor')
    }

    componentDidMount(){
        console.log('lifecycle: componentDidMount')
    }

    static getDerivedStateFromProps(){
        console.log('lifecycle: getDerivedStateFromProps')
        return true;
    }

    render(){
        console.log('lifecycle: render')
        return(
            <h1>Lifecycle: Mouting</h1>
        )
    }
}
export default Header;