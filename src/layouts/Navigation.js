import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const navList = [
  { name: "ToDoApp", path: "/" },
  { name: "Timer", path: "/timer" },
  { name: "Weather", path: "/weather" },
];

const Navigation = () => {
  const menu = navList.map((item) => (
    <li className="navigation-item" key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));
  return <ul className="navigation">{menu}</ul>;
};

export default Navigation;
