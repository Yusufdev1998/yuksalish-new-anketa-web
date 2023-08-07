import React from "react";
import Lichnie from "./components/Lichnie";
import Obraz from "./components/Obraz";

const App = () => {
  return (
    <div className="container">
      <h3 className="heading">АНКЕТА КАНДИДАТА</h3>
      <form>
        <Lichnie></Lichnie>
        <Obraz></Obraz>
      </form>
    </div>
  );
};

export default App;
