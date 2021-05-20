import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FetchData } from '../services/api/search.api';


export default function Userdata() {
    const [data, setData] = useState([])

    const getApiData = () => {
        FetchData('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json')
            .then(res => {
                setData(res)
                console.log(res)
            })
    }

    useEffect(() => {
        getApiData();
    }, []);
    return (

        <>
            <div className="container">
                <div className="header">
                    <div className="sticky">
                        <div className="logo">
                            <span>USER DATA</span>
                        </div>
                        <div className="search-item">
                            <NavLink to="/piechart" >Page 2<i class="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                </div>
                <table className="box-item">
                    <thead>
                        <tr className="heading">
                            <th>S.No</th>
                            <th>Country</th>
                            <th>Code</th>
                            <th>Capital</th>
                            <th>States</th>
                            <th>Region</th>
                            <th>Subregion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, index) => {
                            return (
                                <tr className="grid-item">
                                    <td>{index}</td>
                                    <td>{val.name}</td>
                                    <td>{val.code2}</td>
                                    <td>{val.capital}</td>
                                    <td>
                                        <select>
                                            <option>{val.states.length}</option>
                                            {val.states.map((data) => {
                                                return <>
                                                    <option>{data.name}</option>
                                                </>
                                            })}
                                        </select>
                                    </td>
                                    <td>{val.region}</td>
                                    <td>{val.subregion}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}