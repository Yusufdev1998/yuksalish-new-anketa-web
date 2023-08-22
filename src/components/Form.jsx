import React from 'react'
import Lichnie from "./Lichnie";
import Obraz from "./Obraz";
import Znaniya from "./Znaniya";
import Opit from "./Opit"
import Vajno from "./Vajno"
import Dopolnitelnaya from "./Dopolnitelnaya"
import Rekomendatsiya from "./Rekomendatsiya";
import { words } from '../../public/data/getData';
import { Link } from 'react-router-dom';

function Form() {
    const lang = window.localStorage.getItem("lang") || "ru"
    return (
        <div>
            <h3 className="heading" style={{textTransform: "uppercase"}}>{words.anketa_title[lang]}</h3>
            <form action='https://echo.htmlacademy.ru'>
                <Lichnie lang={lang} />
                <Obraz lang={lang}/>
                <Znaniya lang={lang}/>
                <Opit lang={lang}/>
                <Vajno lang={lang}/>
                <Dopolnitelnaya lang={lang}/>
                <Rekomendatsiya lang={lang}/>
                <button className='begin-button' style={{marginBottom: "5rem", display: 'block', width: "100%", textAlign: "center"}}>
                    {words.otpravka[lang]}
                </button>
            </form>
        </div>
    )
}
export default Form