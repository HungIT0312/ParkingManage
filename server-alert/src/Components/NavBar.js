import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/iconParking.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event) => {
    setActiveLink(event.target.getAttribute("href"));
  };
  const menu = [
    {
      name: "License",
      to: "/Home/License",
    },
    {
      name: "Parking",
      to: "/Home/Parking",
    },
    {
      name: "Client",
      to: "/Home/Client",
    },
    {
      name: "TimeLog",
      to: "/Home/TimeLog",
    },
  ];
  const showMenu =
    menu &&
    menu.map((menuItem, index) => {
      return (
        // <Button key={index}>
        //   <Link to={menuItem.to} className={classes.menuItem}>
        //     {menuItem.name}
        //   </Link>
        // </Button>
        <li className="nav-item" key={index}>
          <Link
            className={`nav-link ${activeLink === "/Home/"+menuItem.name ? "active" : ""}`}
            to={menuItem.to}
            onClick={handleClick}
          >
            {menuItem.name}
          </Link>
        </li>
      );
    });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom:"1px solid #ccc"}}>
      <a className="navbar-brand" href="/License">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {showMenu}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
