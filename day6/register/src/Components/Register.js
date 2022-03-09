import React, { useState } from "react";
import axios from 'axios'
import "./style.css";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  function onChangeHandler(e){
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }

  function onSubmitHandler(e){
      e.preventDefault()
      axios.post('http://apolis-grocery.herokuapp.com/api/auth/register', user)
      .then(response =>{
          console.log(response.data)
      }).catch(error => {
          console.log(error)
      })
  }

  return (
    <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="wrapper">
          <h1>Register</h1>
          <hr />
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">First Name</label>
              <input type="text" name="firstName" onChange={onChangeHandler} className="form-control" value={user.firstName} />
            </div>
            <div className="form-group">
              <label htmlFor="">Emaail</label>
              <input type="text" name="email" onChange={onChangeHandler} className="form-control" value={user.email} />
            </div>
            <div className="form-group">
              <label htmlFor="">Mobile</label>
              <input type="text" name="mobile" onChange={onChangeHandler} className="form-control" value={user.mobile} />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" name="password" onChange={onChangeHandler} className="form-control" value={user.password}/>
            </div>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
};
export default Register;
