import React, { useState } from "react";

const Header = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  function onChangeHandler(e) {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>
        {user.name}, {user.email}
      </h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};
export default Header;
