import React from "react";
import getData, { words } from '../../public/data/getData';

const Obraz = ({ lang }) => {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <span className="secondary-heading">{words.edu[lang]}</span>
      <table className="table">
        <thead>
          <tr>
            <th className="title-td">{words.begin[lang]}</th>
            <th className="title-td">{words.final[lang]}</th>
            <th className="title-td">
              {words.faculty[lang]}
            </th>
            <th className="title-td">{words.klafikatsiya[lang]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input name={words.begin["uz"]} type="text" />
            </td>
            <td>
              <input name={words.final["uz"]} type="text" />
            </td>
            <td>
              <input name={words.faculty["uz"]} type="text" />
            </td>
            <td>
              <input name={words.klafikatsiya["uz"]} type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input name={words.begin["uz"]} type="text" />
            </td>
            <td>
              <input name={words.final["uz"]} type="text" />
            </td>
            <td>
              <input name={words.faculty["uz"]} type="text" />
            </td>
            <td>
              <input name={words.klafikatsiya["uz"]} type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">
              {words.other[lang]}
            </td>
            <td colSpan={2}>
              <input name={words.other["uz"]} type="text"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Obraz;
