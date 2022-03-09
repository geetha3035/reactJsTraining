import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mark",
    };
  }

  onChangeHandler = (event)=> {
      //console.log(event.target.value)
      this.setState({
          name: event.target.value
      })
  }

  onSubmitHandler = (event) => {
      event.preventDefault()
      console.log(this.state.name)
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" onChange={ this.onChangeHandler} className="form-control" value={this.state.name} />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default Header;
