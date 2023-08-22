import React from 'react'
import getData, { words } from '../../public/data/getData';
import Form, {obj} from './Form';

function LastPage({lang}) {
    console.log(obj);
  return (
    <div className='lastPage'>
        <div className="container">
            <h1>{words.lastPage_title[lang]}</h1>
            <h3>{words.lastPage_subtitle[lang]}</h3>
            <table className="table lastPage-table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className='lastPage-th'>{words.fio[lang]}</td>
                        <td className='lastPage-td'>Madaminov Shohjahon Xamidjon O'g'li</td>
                    </tr>
                    <tr>
                        <td className='lastPage-th'>{words.date_of_birth[lang]}</td>
                        <td className='lastPage-td'>24.03.1999</td>
                    </tr>
                    <tr>
                        <td className='lastPage-th'>{words.place_of_birth[lang]}</td>
                        <td className='lastPage-td'>Farg'ona viloyati, Farg'ona tumani</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LastPage