import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
import { NavLink } from 'react-router-dom';
import { FetchData } from '../services/api/search.api';


export default function Piechart() {
    const [data, setData] = useState([])

    const Asia = [...new Set(data.map((item) => {
        if (item.region === "Asia") {
            return item.name
        }
    }))];
    const Europe = [...new Set(data.map((item) => {
        if (item.region === "Europe") {
            return item.name
        }
    }))];
    const Africa = [...new Set(data.map((item) => {
        if (item.region === "Africa") {
            return item.name
        }
    }))];
    const Australia = [...new Set(data.map((item) => {
        if (item.region === "Oceania") {
            return item.name
        }
    }))];
    const Americas = [...new Set(data.map((item) => {
        if (item.region === "Americas") {
            return item.name
        }
    }))];
    const Antarctica = [...new Set(data.map((item) => {
        if (item.region === "Polar") {
            return item.name
        }
    }))];
    const Other = [...new Set(data.map((item) => {
        if (item.region === "") {
            return item.name
        }
    }))];

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
                            <span>PIECHART</span>
                        </div>
                        <div className="search-item">
                            <NavLink to="/userdata" >Page 1<i className="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                </div>

                <div className="piechart">

                    <div className="chart-items">
                        <h4>Asia</h4>
                        <h4>Africa</h4>
                        <h4>Europe</h4>
                        <h4>North America</h4>
                        <h4>South America</h4>
                        <h4>Antarctica</h4>
                        <h4>Australia</h4>
                    </div>
                    <div className="chart">
                        <Chart
                            width={'800px'}
                            height={'600px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Asia', Asia.length],
                                ['Africa', Africa.length],
                                ['Europe', Europe.length],
                                ['America', Americas.length],
                                ['Antarctica', Antarctica.length],
                                ['Australia', Australia.length],
                                ['Others', Other.length],
                            ]}
                            options={{
                                title: 'Country Data',
                                is3D: true,
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </div>

                </div>

            </div>
        </>
    )
}