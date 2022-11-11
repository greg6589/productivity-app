import React from "react";
import { Route, Routes } from "react-router-dom";

import ToDoApp from "../pages/ToDoApp";
import Timer from "../pages/Timer";
import Weather from "../pages/Weather";

const Page = ({ userName }) => {
  return (
    <Routes>
      <Route
        path="productivity-app/"
        element={<ToDoApp userName={userName} />}
      ></Route>
      <Route path="productivity-app/timer" element={<Timer />}></Route>
      <Route path="productivity-app/weather" element={<Weather />}></Route>
    </Routes>
  );
};

export default Page;
