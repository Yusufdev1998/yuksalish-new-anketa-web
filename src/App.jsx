import React, { Fragment, useState } from "react";
import { words } from "../public/data/getData"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Acces from "./components/Acces";
import LastPage from "./components/LastPage";

const App = () => {
  const lang = window.localStorage.getItem("lang") || "ru"
  return (
    <BrowserRouter>
      <div className="container">

        <Routes>
          <Route path="/form" element={<Form/>}/>
          <Route path="/" element={<Acces/>}/>
          <Route path="/lastPage" element={<LastPage lang={lang}/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
