import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
Card,
InputLabel,
Select,
MenuItem,
FormControl
} from '@material-ui/core';
import './Home.css'


const Home = () => {

    const [day, setDay] = useState<string>("")
    const [cityList, setCityList] = useState<string[]>([])
    const [cityName, setCityName] = useState<{cName: string}>({ cName: "" });
    const [collectedData, setCollectedData] = useState({
        location: "",
        country: "",
        temperature: 0,
    });

    let currentTime = new Date();

    let month = currentTime.getMonth();
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Oug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    let weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";

    let date = currentTime.getDate();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    let period = "AM";

    if (hours > 11) {
        period = "PM"
        if (hours > 12) {
            hours -= 12
        }
    }

    useEffect(() => {
        const cList: string[] = [];
        axios.get('http://localhost:4001/weather/city')
        .then(res => {
            res.data.map((city: any,index: any) => {
                cList.push(city.city_name)
            })
            setCityList(cList);
        })
    }, [])

    //console.log(cityList)

    useEffect(() => {


        let dayName = weekdays[currentTime.getDay()] + " | " + months[month] + " " + date + " | " + hours + ":" + minutes + period;
        setDay(dayName);

        axios.get('http://localhost:4001/weather/citydefault')
            .then(res => {
                res.data.data.map((item: any, index: any)=> {
                    const sData = item;
                    setCollectedData({
                        ...collectedData,
                        location: sData.city_name,
                        country: sData.country_code,
                        temperature: sData.temp,
                    })
                })
                
            })
        //console.log(cityName.cName)
    }, [])

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    //console.log(cityName)
    //axios.post('http://localhost:4003/api/members/postdata', {cName: cityName.cName}, axiosConfig)
    //axios.post('http://localhost:4001/weather/city', {cName: cityName.cName}, axiosConfig)

    const handleCity = (event: any) => {
        event.preventDefault();
        console.log("Post")
        console.log("city name", cityName.cName)
        const cname: string = cityName.cName;
        axios.post('http://localhost:4001/weather/city', {cName: cityName.cName}, axiosConfig)
            .then(res => {
                console.log(typeof res.data, res.data)
                const sData = res.data;
                    setCollectedData({
                        ...collectedData,
                        location: sData.city_name,
                        country: sData.country_code,
                        temperature: sData.temp,
                    })
               
            })

    }

    return (
        <div className="Home">
            <h1>Home</h1>
            <form>
                <FormControl style={{ width: '200px' }}>
                    <InputLabel id="demo-simple-select-label">City Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cityName.cName}
                        name="city"
                        onChange={(event: any) => { setCityName({ cName: event.target.value }) }}
                        style={{overflow: 'scroll'}}
                    >
                        {cityList.slice(0,10).map((cityValue, index) => {
                            return <MenuItem value={cityValue.toLowerCase()} key={index}>{cityValue}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </form>
            <Button type="submit" onClick={(event) => handleCity(event)} variant="outlined">Click</Button><br />
            
                <Card>
                    <div className="weathercon">
                        <i className="fas fa-sun"></i>
                    </div>
                    <div className="cityinfo">
                        <h2 className="location">{collectedData.location} , {collectedData.country}</h2>
                        <h4>{day}</h4>
                        <h3>{collectedData.temperature} C</h3>
                    </div>
                    <h3>Have an Account ? <NavLink to="/login">Login</NavLink></h3>
                </Card> 

                
           
        </div>
    )
}

export default Home;