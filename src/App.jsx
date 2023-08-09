import React from "react";
import Lichnie from "./components/Lichnie";
import Obraz from "./components/Obraz";
import Znaniya from "./components/Znaniya";
import Opit from "./components/Opit"
import Vajno from "./components/Vajno"
import Dopolnitelnaya from "./components/Dopolnitelnaya"
import Rekomendatsiya from "./components/Rekomendatsiya";

const App = () => {
  return (
    <div className="container">
      <h3 className="heading">АНКЕТА КАНДИДАТА</h3>
      <form>
        <Lichnie></Lichnie>
        <Obraz></Obraz>
        <Znaniya></Znaniya>
        <Opit></Opit>
        <Vajno></Vajno>
        <Dopolnitelnaya></Dopolnitelnaya>
        <Rekomendatsiya></Rekomendatsiya>
      </form>
    </div>
  );
};

export default App;
