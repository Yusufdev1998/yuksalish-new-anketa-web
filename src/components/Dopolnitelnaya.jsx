import React from 'react'

function Dopolnitelnaya() {
    return (
        <div style={{ marginTop: "2rem" }}>
            <span className="secondary-heading">17. Дополнительная информация</span>
            <div className='table'  style={{display: "flex", gap: "2rem"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='title-td' colSpan={2}>Наличие авто</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="title-td">Марка</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td className="title-td">Год выпуска</td>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='title-td' colSpan={5}>Водительские права</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="title-td">A</th>
                            <th className="title-td">B</th>
                            <th className="title-td">C</th>
                            <th className="title-td">D</th>
                            <th className="title-td">E</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <td><input className='checkbox' type="checkbox"/></td>
                            <td><input className='checkbox' type="checkbox"/></td>
                            <td><input className='checkbox' type="checkbox"/></td>
                            <td><input className='checkbox' type="checkbox"/></td>
                            <td><input className='checkbox' type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dopolnitelnaya