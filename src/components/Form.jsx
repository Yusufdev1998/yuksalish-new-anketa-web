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
            <form action='https://echo.htmlacademy.ru'>
                <Lichnie />
                <Obraz />
                <Znaniya />
                <Opit />
                <Vajno />
                <Dopolnitelnaya />
                <Rekomendatsiya />
                <button type='GET' className='begin-button' style={{marginBottom: "5rem", display: 'block', width: "100%", textAlign: "center"}}>Yuborish</button>
            </form>
        </div>
    )
}

export default Form