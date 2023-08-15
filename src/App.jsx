import React, { Fragment, useState } from "react";
import { words } from "../public/data/getData"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Acces from "./components/Acces";

const App = () => {
  const [lang, setLang] = useState("ru")
  return (
    <BrowserRouter>
      <div className="container">

        <Routes>
          <Route path="/form" element={<Form/>}/>
          <Route path="/" element={<Acces/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
