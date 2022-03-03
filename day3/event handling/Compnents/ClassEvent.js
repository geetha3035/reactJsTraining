import React, { Component } from 'react';

class ClassEvent extends Component{

    constructor(){
        super()
        this.state = {
            name: 'Guest'
        }
        // 2nd way
        // this.onClickHandler = this.onClickHandler.bind(this)
    }

    // onClickHandler(){
    //     console.log(this)
    //     this.setState({
    //         name: 'Mark'
    //     })
    // }

    onClickHandler = () => {
        console.log(this)
        this.setState({
            name: 'Mark'
        })
    }


    render(){
        return(
            <div>
                <h1>Name: { this.state.name }</h1>
                {/* first way
                <button onClick={this.onClickHandler.bind(this)} >Button</button> */}

                {/* <button onClick={this.onClickHandler}>Button</button> */}

                {/* 3rd way
                <button onClick={() => this.onClickHandler()}>Button</button> */}

                <button onClick={this.onClickHandler}>Button</button>

            </div>
        )
    }
}
export default ClassEvent;