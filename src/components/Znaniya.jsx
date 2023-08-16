import React from 'react'
import getData, { words } from '../../public/data/getData';

function Znaniya({lang}) {
  return (
    <div className='znaniya' style={{marginTop: "1rem"}}>
      <span className="secondary-heading">{words.knowledge[lang]}</span><br/>

      <span className='additional-title'>{words.knowledge_two[lang]}</span>
      <table className="table">
        <thead>
            <th className='title-td' rowSpan={3}>{words.languages[lang]}</th>
            <tr>
                <th className='title-td' colSpan={3}>
                  {words.stapen[lang]}
                </th>
            </tr>
            <tr>
                <th className='title-td'>{words.pismo[lang]}</th>
                <th className='title-td'>{words.chten[lang]}</th>
                <th className='title-td'>{words.razgovar[lang]}</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='title-td'>{words.uzbek[lang]}</td>
            <th><input name='uzbek-tili' className='checkbox' type="checkbox" value="письмо"/></th>
            <th><input name='uzbek-tili' className='checkbox' type="checkbox" value="чтение"/></th>
            <th><input name='uzbek-tili' className='checkbox' type="checkbox" value="разговорный"/></th>
          </tr>
          <tr>
            <td className='title-td'>{words.rustili[lang]}</td>
            <th><input name='rus-tili' className='checkbox' type="checkbox" value="письмо"/></th>
            <th><input name='rus-tili' className='checkbox' type="checkbox" value="чтение"/></th>
            <th><input name='rus-tili' className='checkbox' type="checkbox" value="разговорный"/></th>
          </tr>
          <tr>
            <td className='title-td'>{words.angilish[lang]}</td>
            <th><input name='ingliz-tili' className='checkbox' type="checkbox" value="письмо"/></th>
            <th><input name='ingliz-tili' className='checkbox' type="checkbox" value="чтение"/></th>
            <th><input name='ingliz-tili' className='checkbox' type="checkbox" value="разговорный"/></th>
          </tr>
        </tbody>
      </table>


      <span className='additional-title' >{words.know_komp[lang]}</span>
      <table className="table">
        <tbody>
          <tr>
            <td className='title-td'>MS Word</td>
            <th>
              <select name="MS Word">
                <option value={words.ne_znayu["uz"]}>{words.ne_znayu[lang]}</option>
                <option value={words.slabo["uz"]}>{words.slabo[lang]}</option>
                <option value={words.sredne["uz"]}>{words.sredne[lang]}</option>
                <option value={words.xorosho["uz"]}>{words.xorosho[lang]}</option>
                <option value={words.v_sovershenstve["uz"]}>{words.v_sovershenstve[lang]}</option>
              </select>
            </th>
            <td className='title-td'>1С:</td>
            <th>
              <select name="1C">
              <option value={words.ne_znayu["uz"]}>{words.ne_znayu[lang]}</option>
                <option value={words.slabo["uz"]}>{words.slabo[lang]}</option>
                <option value={words.sredne["uz"]}>{words.sredne[lang]}</option>
                <option value={words.xorosho["uz"]}>{words.xorosho[lang]}</option>
                <option value={words.v_sovershenstve["uz"]}>{words.v_sovershenstve[lang]}</option>
              </select>
            </th>
          </tr>
          <tr>
            <td className='title-td'>MS Excel</td>
            <th>
              <select name="MS Excel">
              <option value={words.ne_znayu["uz"]}>{words.ne_znayu[lang]}</option>
                <option value={words.slabo["uz"]}>{words.slabo[lang]}</option>
                <option value={words.sredne["uz"]}>{words.sredne[lang]}</option>
                <option value={words.xorosho["uz"]}>{words.xorosho[lang]}</option>
                <option value={words.v_sovershenstve["uz"]}>{words.v_sovershenstve[lang]}</option>
              </select>
            </th>
            <td className='title-td'>{words.internet[lang]}</td>
            <th>
              <select name="Internet">
              <option value={words.ne_znayu["uz"]}>{words.ne_znayu[lang]}</option>
                <option value={words.slabo["uz"]}>{words.slabo[lang]}</option>
                <option value={words.sredne["uz"]}>{words.sredne[lang]}</option>
                <option value={words.xorosho["uz"]}>{words.xorosho[lang]}</option>
                <option value={words.v_sovershenstve["uz"]}>{words.v_sovershenstve[lang]}</option>
              </select>
            </th>
          </tr>
          <tr>
            <td className='title-td'>Power Point</td>
            <th>
              <select name="Power Point">
              <option value={words.ne_znayu["uz"]}>{words.ne_znayu[lang]}</option>
                <option value={words.slabo["uz"]}>{words.slabo[lang]}</option>
                <option value={words.sredne["uz"]}>{words.sredne[lang]}</option>
                <option value={words.xorosho["uz"]}>{words.xorosho[lang]}</option>
                <option value={words.v_sovershenstve["uz"]}>{words.v_sovershenstve[lang]}</option>
              </select>
            </th>
            <td className='title-td'>{words.web_platform[lang]}</td>
            <th>
              <select name={words.web_platform["uz"]}>
              <option value={words.ne_znayu["uz"]}>{words.ne_znayu[lang]}</option>
                <option value={words.slabo["uz"]}>{words.slabo[lang]}</option>
                <option value={words.sredne["uz"]}>{words.sredne[lang]}</option>
                <option value={words.xorosho["uz"]}>{words.xorosho[lang]}</option>
                <option value={words.v_sovershenstve["uz"]}>{words.v_sovershenstve[lang]}</option>
              </select>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Znaniya