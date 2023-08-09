import React from 'react'

function Vajno() {
    return (
        <div style={{ marginTop: "1rem" }}>
            <span className="secondary-heading">Что для Вас важно в работе?</span><br />
            <span className="secondary-heading">Расставьте приоритеты от 1 до 10 (где 1 – наиболее важно, 10 – наименее важно).</span><br />
            <span className="secondary-heading">Цифры не должны повторяться. </span>

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="title-td">ЗАРАБОТНАЯ ПЛАТА</td>
                        <td><input type="text" /></td>
                        <td className="title-td">МОРАЛЬНЫЙ КЛИМАТ В КОЛЛЕКТИВЕ</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">СТАБИЛЬНОСТЬ РАБОТЫ</td>
                        <td><input type="text" /></td>
                        <td className="title-td">РАБОТА В ОФИСЕ</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">НОВЫЕ НАВЫКИ (ОПЫТ)</td>
                        <td><input type="text" /></td>
                        <td className="title-td">ПРЕСТИЖ КОМПАНИИ</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">ГИБКИЙ ГРАФИК РАБОТЫ</td>
                        <td><input type="text" /></td>
                        <td className="title-td">БЛИЗОСТЬ РАБОТЫ К ДОМУ</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">ИНТЕРЕСНАЯ РАБОТА</td>
                        <td><input type="text" /></td>
                        <td className="title-td">ПЕРСПЕКТИВА КАРЬЕРНОГО РОСТА</td>
                        <td><input type="text" /></td>
                    </tr>
                </tbody>

            </table>

            <table className="table" style={{ marginTop: "2rem" }}>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="title-td">6.</td>
                        <td className="title-td">Укажите 3 (три) Ваших деловых достоинства:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">7.</td>
                        <td className="title-td">Какие у Вас есть недостатки?</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">8.</td>
                        <td className="title-td">Какие знания и навыки вы бы хотели получить?</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">9.</td>
                        <td className="title-td">За какие недостатки в работе, по Вашему, можно уволить человека?</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">10.</td>
                        <td className="title-td">Вы готовы отлучаться в командировки, на какой период?</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">11.</td>
                        <td className="title-td">Привлекались ли Вы к административной или уголовной ответственности и по какой статье УК РУ?</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">12.</td>
                        <td className="title-td">Как долго Вы в поиске работы (сколько времени Вы не работали):</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td" rowSpan={2}>13.</td>

                        <td className="title-td">Есть ли у Вас знакомые или родственники, работающие в компании «YUKSALISH? </td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">Если Да, укажите ФИО, должность сотрудника:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">14.</td>
                        <td className="title-td">Укажите 3 (три) Ваших деловых достоинства:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">15.</td>
                        <td className="title-td">Укажите 3 (три) Ваших деловых достоинства:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="title-td">16.</td>
                        <td className="title-td">Укажите 3 (три) Ваших деловых достоинства:</td>
                        <td><input type="text" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Vajno