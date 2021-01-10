import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Главная</Link>
      <Link to="/about">О проекте</Link>
    </div>
  );
}

export default Navigation;
