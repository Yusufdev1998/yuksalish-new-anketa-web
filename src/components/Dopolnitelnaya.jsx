import React from 'react'
import getData, { words } from '../../public/data/getData';

function Dopolnitelnaya({lang}) {
    return (
        <div style={{ marginTop: "2rem" }}>
            <span className="secondary-heading">{words.dopolnonie[lang]}</span>
            <div className='table'  style={{display: "flex", gap: "2rem"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='title-td' colSpan={2}>{words.avto[lang]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="title-td">{words.marka[lang]}</td>
                            <td><input name='' type="text" /></td>
                        </tr>
                        <tr>
                            <td className="title-td">{words.yili[lang]}</td>
                            <td><input name='' type="text" /></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='title-td' colSpan={5}>{words.toifasi[lang]}</th>
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
                            <td><input name='' className='checkbox' type="checkbox"/></td>
                            <td><input name='' className='checkbox' type="checkbox"/></td>
                            <td><input name='' className='checkbox' type="checkbox"/></td>
                            <td><input name='' className='checkbox' type="checkbox"/></td>
                            <td><input name='' className='checkbox' type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dopolnitelnaya