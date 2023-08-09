import React from 'react'

function Opit() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <span className="secondary-heading">4. Укажите опыт работы (включая неофициальный), начиная с последнего места</span><br />
      <div style={{ display: "flex" }}>
        <table className="table" style={{width: "30%"}}>
          <th className='title-td' colSpan={2}>Месяц и год</th>
          <tr>
            <th className='title-td'>поступление</th>
            <th className='title-td'>увольнение</th>
          </tr>

          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>

        <table className="table" style={{width: "70%"}}>
          <tr>
            <td className='title-td'>Название компании</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td className='title-td'>Должность</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td className='title-td'>Количество персонала в компании</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td className='title-td'>Количество подчиненных
              (для руководящих должностей)
            </td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td className='title-td'>Выполняемые Вами обязанности:</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td className='title-td'>Причина поиска новой работы</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td className='title-td'>Заработная плата </td>
            <td><input type="text" /></td>
          </tr>
        </table>

      </div>
      <table className='table'>
        <tr style={{display: "flex"}}>
          <th className='title-td' style={{width: "50%"}}>Профессиональные достижения в этой компании:</th>
          <td style={{width: "50%"}}><input type="text"/></td>
        </tr>
      </table>
    </div>
  )
}

export default Opit