import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getData, { words } from '../../public/data/getData';

function Acces() {
    const [lang, setLang] = useState(window.localStorage.getItem("lang") || "ru")
    const handleLang = (e) => {
        window.localStorage.setItem("lang", e.target.value);
        setLang(e.target.value);
    };

    return (

        <div className='container' style={{ textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
            <h1>{words.acces_title[lang]}</h1>
            <h2>{words.acces_lang[lang]}</h2>
            <select onChange={handleLang} name="language" required>
                <option value="ru"></option>
                <option value="ru">Русский</option>
                <option value="uz">O'zbek</option>
                <option value="уз">Ўзбек</option>
            </select><br />

            <Link className='begin-button' to={"form"}>{words.acces_button[lang]}</Link>
        </div>
    )
}

export default Acces