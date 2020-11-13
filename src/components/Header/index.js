import React, { useState } from "react";
import PropTypes from "prop-types";
import "./navbar.scss";
Header.propTypes = {};

function Header(props) {
  return (
    <div className="header-navbar">
      <ul>
        <li>
          <i className="search fa fa-search"></i>
          <input type="text" placeholder="Search" />
        </li>
      </ul>
      <ul>
        <li>
          <i className="fa fa-bell"></i>
          <span className="notify">1</span>
        </li>
        <li>
          <i className="fa fa-envelope"></i>
          <span className="notify">2</span>
        </li>
        <li>
          <img src="" />
          <span>Hao Huynh</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
