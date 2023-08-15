import React from 'react'
import Lichnie from "./Lichnie";
import Obraz from "./Obraz";
import Znaniya from "./Znaniya";
import Opit from "./Opit"
import Vajno from "./Vajno"
import Dopolnitelnaya from "./Dopolnitelnaya"
import Rekomendatsiya from "./Rekomendatsiya";

function Form() {
    return (
        <div>
            <h3 className="heading">АНКЕТА КАНДИДАТА</h3>
            <form>
                <Lichnie />
                <Obraz />
                <Znaniya />
                <Opit />
                <Vajno />
                <Dopolnitelnaya />
                <Rekomendatsiya />
            </form>
        </div>
    )
}

export default Form