import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";

const navList = [
  { name: "ToDoApp", path: "productivity-app/" },
  { name: "Timer", path: "productivity-app/timer" },
  { name: "Weather", path: "productivity-app/weather" },
];

const Navigation = () => {
  const menu = navList.map((item) => (
    <li className={style.navigation_item} key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));
  return (
    <nav>
      <ul className={style.navigation}>{menu}</ul>
    </nav>
  );
};

export default Navigation;
