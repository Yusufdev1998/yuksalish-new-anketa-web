import React from 'react'
import getData, { words } from '../../public/data/getData';

function Rekomendatsiya({lang}) {
    return (
        <div style={{ marginTop: "2rem", paddingBottom: "6rem"}}>
            <span className="secondary-heading">{words.kto[lang]}</span>
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
                        <td className='title-td' style={{fontStyle: "italic"}} colSpan={2}>{words.nastoyashim[lang]}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Rekomendatsiya