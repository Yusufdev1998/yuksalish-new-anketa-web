import React from "react";

const Lichnie = () => {
  return (
    <div>
      <span className="secondary-heading">1.Личные данные</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan={2} className="title-td">
              Ф.И.О. (полностью)
            </td>
            <td colSpan={2}>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">Дата рождения:</td>
            <td>
              <input></input>
            </td>
            <td className="title-td">Место рождения:</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">Контактные телефоны:</td>
            <td>
              <label htmlFor="dom">Домашний:</label>
              <input type="tel" name="" id="dom" />
            </td>
            <td>
              <label htmlFor="mob">Мобильный:</label>
              <input type="tel" name="" id="mob" />
            </td>
            <td>
              <label htmlFor="rab">Рабочий:</label>
              <input type="tel" name="" id="rab" />
            </td>
          </tr>
          <tr>
            <td className="title-td">E-mail:</td>
            <td>
              <input type="text" name="" />
            </td>
            <td className="title-td">Другие контакты :</td>
            <td>
              <input type="text" name="" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">
              Место регистрации (прописки)
            </td>
            <td colSpan={2}>
              <input type="text" name="" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">
              Место жительства (фактическое)
            </td>
            <td colSpan={2}>
              <input type="text" name="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Lichnie;
