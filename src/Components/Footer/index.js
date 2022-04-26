import React from "react";

const Footer = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-primary">
        <a class="navbar-brand" href="#">
          <img
            src="/Images/maveric-footer-logo.png"
            width="1650"
            height="100"
            class="d-inline-block align-top"
            alt=""
          />
          {/* &nbsp;&nbsp;&nbsp;&nbsp; Maveric connect */}
        </a>
      </nav>

      <div class="card-footer text-muted">@Copyright, Maveric Systems Ltd 2022</div>
    </div>
  );
};

export default Footer;