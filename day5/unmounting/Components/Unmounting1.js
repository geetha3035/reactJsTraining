import React, { Component } from 'react';
import Child from './Unmounting2';

class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            display: true

        }
    }
 onClickHandler =() => {
     this.setState({
         display: false
     })
 }

 render(){
     let mycomponent;
     if(this.state.display){
         mycomponent=<Child/>
     }
     return(
         <div>
             {mycomponent}
             <button onClick={this.onClickHandler}>Remove component</button>
         </div>
     )
 }
}
export default Parent;