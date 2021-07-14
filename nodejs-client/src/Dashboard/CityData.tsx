import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { XGrid, GridColDef, GridCellParams } from '@material-ui/x-grid';
import { DataGrid } from '@material-ui/data-grid';
import AddForm from './AddForm';
import EditForm from './EditForm';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    CircularProgress
} from '@material-ui/core'

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
    },
    {
        field: 'city_name',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'temp',
        headerName: 'Temp',
        width: 150,
    },
    {
        field: 'lat',
        headerName: 'Lat',
        width: 150,
    },
    {
        field: 'lon',
        headerName: 'Lon',
        width: 150,
    },


]
const CityData = () => {

    const [cityData, setCityData] = useState<any>()

    useEffect(() => {

        axios.get("http://localhost:4002/weather/city/savecity", { withCredentials: true })
            .then(res => {
                setCityData(res.data)
                console.log(res.data)
            })
    }, [])

    console.log("citydata",cityData)

    return (
        <div className="CityData">
            {cityData ?
                <div style={{ height: '500px', width: '100%' }}>
                   <DataGrid columns={columns} rows={cityData}/>
                </div>
                : <CircularProgress />}
        </div>
    );
};

// <DataGrid columns={columns} rows={cityData}/>

export default CityData;

