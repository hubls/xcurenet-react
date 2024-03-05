import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App;