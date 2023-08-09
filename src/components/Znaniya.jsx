import React from 'react'

function Znaniya() {
  return (
    <div style={{marginTop: "1rem"}}>
      <span className="secondary-heading">3. Знания и навыки</span><br/>

      <span className='additional-title'>3.1.Какими языками Вы владеете?</span>
      <table className="table">
        <thead>
            <th className='title-td' rowSpan={3}>Язык</th>
            <tr>
                <th className='title-td' colSpan={3}>
                    Степень владения
                </th>
            </tr>
            <tr>
                <th className='title-td'>письмо</th>
                <th className='title-td'>чтение</th>
                <th className='title-td'>разговорный</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='title-td'>Узбекский</td>
            <th><input type="text" /></th>
            <th><input type="text" /></th>
            <th><input type="text" /></th>
          </tr>
          <tr>
            <td className='title-td'>Русский</td>
            <th><input type="text" /></th>
            <th><input type="text" /></th>
            <th><input type="text" /></th>
          </tr>
          <tr>
            <td className='title-td'>Английский</td>
            <th><input type="text" /></th>
            <th><input type="text" /></th>
            <th><input type="text" /></th>
          </tr>
        </tbody>
      </table>


      <span className='additional-title' >3.2. Степень владения ПК? (варианты ответов: - не знаю, - слабо,  - средне, -  хорошо, -  в совершенстве)</span>
      <table className="table">
        <tbody>
          <tr>
            <td className='title-td'>MS Word</td>
            <th><input type="text" /></th>
            <td className='title-td'>1С:</td>
            <th><input type="text" /></th>
          </tr>
          <tr>
            <td className='title-td'>MS Excel</td>
            <th><input type="text" /></th>
            <td className='title-td'>Интернет</td>
            <th><input type="text" /></th>
          </tr>
          <tr>
            <td className='title-td'>Power Point</td>
            <th><input type="text" /></th>
            <td className='title-td'>Web-платформы</td>
            <th><input type="text" /></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Znaniya