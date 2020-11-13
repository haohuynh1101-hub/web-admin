import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./sidebar.scss";
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="side-bar">
      <div className="logo-bar">
        <img src="https://banhkemvanilla.com/wp-content/uploads/2019/10/logo.png" />
        Vanilla
      </div>
      <ul>
        <li>
          <a href="">
            <i className="fa fa-home"></i>
            DashBoard
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-th-large"></i>
            Products
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-area-chart"></i>
            Charts
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-table"></i>
            Tables
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-question-circle"></i>
            About
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-desktop"></i>
            Services
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-envelope"></i>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
