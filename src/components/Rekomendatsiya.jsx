import React from 'react'

function Rekomendatsiya() {
    return (
        <div style={{ marginTop: "2rem", paddingBottom: "6rem"}}>
            <span className="secondary-heading">18. Кто на Вас может датьрекомендацию? (Ф.И.О., должность, телефон)</span>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <th className="title-td">1)</th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th className="title-td">2)</th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className='title-td' style={{fontStyle: "italic"}} colSpan={2}>Настоящим я подтверждаю достоверность предоставленной информации и не возражаю против проверки и обработки моих персональных данных. </td>
                    </tr>
                </tbody>
            </table>

            <div style={{display: "inline-flex", marginTop: "3rem"}}>
                <span className="secondary-heading" style={{display: "block", whiteSpace: 'nowrap'}}>Дата заполнения</span>
                <input type="text" style={{borderBottom: "2px solid black"}}/>
            </div>
        </div>
    )
}

export default Rekomendatsiya