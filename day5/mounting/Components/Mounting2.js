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
        console.log('lifecycle: componentdidmount')
        setTimeout(() => {
            this.setState({
                name: 'Watson'
            })
        }, 6000)
      }
render(){
 console.log('lifecycle : render');
 return(
    <h1>Name: {this.state.name}</h1>
)
}
}

export default Header;
   