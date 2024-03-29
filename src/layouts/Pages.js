import React from "react";
import { Route, Routes } from "react-router-dom";
import ToDoApp from "../pages/ToDoApp/ToDoApp";
import Timer from "../pages/Timer/Timer";
import Weather from "../pages/Weather/Weather";

const Page = () => {
  return (
    <Routes>
      <Route path="productivity-app/" element={<ToDoApp />}></Route>
      <Route path="productivity-app/timer" element={<Timer />}></Route>
      <Route path="productivity-app/weather" element={<Weather />}></Route>
    </Routes>
  );
};
export default Page;
