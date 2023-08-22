import React from "react";
import getData, { words } from '../../public/data/getData';

const Lichnie = ({ lang }) => {
  return (
    <div>
      <span className="secondary-heading">{words.personal[lang]}</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan={2} className="title-td">
              {words.fio[lang]}
            </td>
            <td colSpan={2}>
              <input name={words.fio["uz"]} type="text" required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{words.date_of_birth[lang]}</td>
            <td>
              <input name={words.date_of_birth["uz"]} type="datetime-local" required></input>
            </td>
            <td className="title-td">{words.place_of_birth[lang]}</td>
            <td>
              <input name={words.place_of_birth["uz"]} type="text"></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{words.contact_tel[lang]}</td>
            <td>
              <label htmlFor="dom">{words.home_tel[lang]}</label>
              <input type="tel" name={words.home_tel["uz"]} id="dom" required/>
            </td>
            <td>
              <label htmlFor="mob">{words.cell_tel[lang]}</label>
              <input type="tel" name={words.cell_tel["uz"]} id="mob" />
            </td>
            <td>
              <label htmlFor="rab">{words.work_tel[lang]}</label>
              <input type="tel" name={words.work_tel["uz"]} id="rab" />
            </td>
          </tr>
          <tr>
            <td className="title-td">{words.email[lang]}</td>
            <td>
              <input type="email" name={words.email["uz"]} />
            </td>
            <td className="title-td">{words.contakt[lang]}</td>
            <td>
              <input type="text" name={words.contact_tel["uz"]} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">
              {words.address_one[lang]}
            </td>
            <td colSpan={2}>
              <input type="text" name={words.address_one["uz"]} required/>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">
              {words.address_two[lang]}
            </td>
            <td colSpan={2}>
              <input type="text" name={words.address_two["uz"]} required/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Lichnie;
