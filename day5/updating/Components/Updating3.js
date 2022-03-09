import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            name: 'Mark'
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                name:'Update Name'
            })
        }, 3000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('old').innerHTML = "old state: "+ prevState.name
        //without returning gets return type is undefined
        return prevState;
    }

    componentDidUpdate(){
        document.getElementById('new').innerHTML = "new state: "+ this.state.name

    }

    render(){
        return(
            <div>
                <h1>Name:{this.state.name}</h1>
                <h2 id="old"></h2>
                <h2 id="new"></h2>
            </div>
        )
    }

}
export default Header;