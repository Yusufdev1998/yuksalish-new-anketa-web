import React from 'react'
import getData, { words } from '../../public/data/getData';

function Vajno({lang}) {
    return (
        <div style={{ marginTop: "1rem" }}>
            <span className="secondary-heading">{words.clom1[lang]}</span><br />
            <span className="secondary-heading">{words.clom2[lang]}</span><br />
            <span className="secondary-heading">{words.clom3[lang]}</span>

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="title-td">{words.section0[lang]}</td>
                        <td><input name={words.section0["uz"]} type="text" /></td>
                        <td className="title-td">{words.section5[lang]}</td>
                        <td><input name={words.section5["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">{words.section1[lang]}</td>
                        <td><input name={words.section1["uz"]} type="text" /></td>
                        <td className="title-td">{words.section6[lang]}</td>
                        <td><input name={words.section6["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">{words.section2[lang]}</td>
                        <td><input name={words.section2["uz"]} type="text" /></td>
                        <td className="title-td">{words.section7[lang]}</td>
                        <td><input name={words.section7["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">{words.section3[lang]}</td>
                        <td><input name={words.section3["uz"]} type="text" /></td>
                        <td className="title-td">{words.section8[lang]}</td>
                        <td><input name={words.section8["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">{words.section4[lang]}</td>
                        <td><input name={words.section4["uz"]} type="text" /></td>
                        <td className="title-td">{words.section9[lang]}</td>
                        <td><input name={words.section9["uz"]} type="text" /></td>
                    </tr>
                </tbody>

            </table>

            <table className="table" style={{ marginTop: "2rem" }}>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="title-td">6.</td>
                        <td className="title-td">{words.zero0[lang]}</td>
                        <td><input name={words.zero0["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">7.</td>
                        <td className="title-td">{words.zero1[lang]}</td>
                        <td><input name={words.zero1["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">8.</td>
                        <td className="title-td">{words.zero2[lang]}</td>
                        <td><input name={words.zero2["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">9.</td>
                        <td className="title-td">{words.zero3[lang]}</td>
                        <td><input name={words.zero3["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">10.</td>
                        <td className="title-td">{words.zero4[lang]}</td>
                        <td><input name={words.zero4["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">11.</td>
                        <td className="title-td">{words.zero5[lang]}</td>
                        <td><input name={words.zero5["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">12.</td>
                        <td className="title-td">{words.zero6[lang]}</td>
                        <td><input name={words.zero6["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td" rowSpan={2}>13.</td>

                        <td className="title-td">{words.zero7[lang]}</td>
                        <td><input name={words.zero7["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">{words.zero8[lang]}</td>
                        <td><input name={words.zero8["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">14.</td>
                        <td className="title-td">{words.zero9[lang]}</td>
                        <td><input name={words.zero9["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">15.</td>
                        <td className="title-td">{words.zero10[lang]}</td>
                        <td><input name={words.zero1["uz"]} type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">16.</td>
                        <td className="title-td">{words.zero11[lang]}</td>
                        <td><input name={words.zero1["uz"]} type="text" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Vajno