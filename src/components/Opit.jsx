import React from 'react'
import getData, { words } from '../../public/data/getData';

function Opit({lang}) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <span className="secondary-heading">{words.job[lang]}</span><br />
      <div style={{ display: "flex" }}>
        <table className="table" style={{ width: "30%" }}>
          <thead>
            <th className='title-td' colSpan={2}>{words.job_year[lang]}</th>
            <tr>
              <th className='title-td'>{words.postuplene[lang]}</th>
              <th className='title-td'>{words.uvolnenia[lang]}</th>
            </tr>
          </thead>


          <tbody>
            <tr>
              <td>
                <input name={words.postuplene["uz"]} type="text" />
              </td>
              <td>
                <input name={words.uvolnenia["uz"]} type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name={words.postuplene["uz"]} type="text" />
              </td>
              <td>
                <input name={words.uvolnenia["uz"]} type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input name={words.postuplene["uz"]} type="text" />
              </td>
              <td>
                <input name={words.uvolnenia["uz"]} type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table" style={{ width: "70%" }}>
          <thead></thead>
          <tbody>
            <tr>
              <td className='title-td'>{words.kompany[lang]}</td>
              <td><input name={words.kompany["uz"]} type="text" /></td>
            </tr>
            <tr>
              <td className='title-td'>{words.icon1[lang]}</td>
              <td><input name={words.icon1["uz"]} type="text" /></td>
            </tr>
            <tr>
              <td className='title-td'>{words.icon2[lang]}</td>
              <td><input name={words.icon2["uz"]} type="text" /></td>
            </tr>
            <tr>
              <td className='title-td'>{words.icon6[lang]}
              </td>
              <td><input name={words.icon6["uz"]} type="text" /></td>
            </tr>
            <tr>
              <td className='title-td'>{words.icon3[lang]}</td>
              <td><input name={words.icon3["uz"]} type="text" /></td>
            </tr>
            <tr>
              <td className='title-td'>{words.icon4[lang]}</td>
              <td><input name={words.icon4["uz"]} type="text" /></td>
            </tr>
            <tr>
              <td className='title-td'>{words.icon5[lang]}</td>
              <td><input name={words.icon5["uz"]} type="text" /></td>
            </tr>
          </tbody>
        </table>

      </div>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr style={{ display: "flex" }}>
            <th className='title-td' style={{ width: "50%" }}>{words.component[lang]}</th>
            <td style={{ width: "50%" }}><input name='' type="text" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Opit