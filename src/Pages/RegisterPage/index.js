import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./styles.css";
import Endpoints from "../../api/Endpoints";

const RegisterUser = () => {
  const [responseMessage, setResponseMessaage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
    confpassword:"",
  });

  const [errorMessage, setErrorMessage] = useState({
    firstNameError: "",
    emailError: "",
    mobileError: "",
    password: "",
  });

  function validate(user) {
    if ((user.firstName.length = 0)) {
      return true;
    } else {
      return false;
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (validate) {
      console.log("validate method");
      setErrorMessage({
        firstNameError: "First Name should not be null",
      });
    }
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then(
        (response) => {
          console.log(response.data);
          setResponseMessaage({
            message: response.data.message,
            cssClass: "alert-success",
          });
        },
        (error) => {
          setResponseMessaage({
            message: error.response.data.message,
            cssClass: "alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  }

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Register</h2>
          <hr />

          {responseMessage.message && (
            <div class="alert alert-success" role="alert">
              {responseMessage.message}
            </div>
          )}

          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">username</label>
              <input
                type="text"
                name="name"
                value={user.firstName}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="password"
                value={user.confpassword}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <a href="#">Already Member Login ? Login</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default RegisterUser;
