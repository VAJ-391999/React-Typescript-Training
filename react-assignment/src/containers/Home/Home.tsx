import React, { ReactElement, FC, useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';
import { XGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/x-grid';
import { IEmployeeInfo } from '../../Interfaces/EmployeeInfo';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import {
    GridRowsProp,
    GridRowIdGetter,
    GridColDef,
    GridCellParams,
    GridValueFormatterParams,
    GridSortDirection,
    GridLinkOperator,
    GridFilterModel,

} from '@material-ui/data-grid';

import './Home.css';
import axios from 'axios';

const Home: FC = (): ReactElement => {

    const [employeeData, setEmployeeData] = useState<any[]>([]);

    const employeeInfo: IEmployeeInfo = {
        ProjectCompleted: 20,
        ProjectInProgress: 3,
        Salary: 30000,
        YearOfExperience: 2
    }

    const data = [
        {
            "name": "Stage 1",
            "uv": 2,
            "amt": 2400
        },
        {
            "name": "Stage 2",
            "uv": 3,
            "amt": 2210
        },
        {
            "name": "Stage 3",
            "uv": 5,
            "amt": 2290
        },
        {
            "name": "Stage 4",
            "uv": 7,
            "amt": 2000
        },
        {
            "name": "Stage 5",
            "uv": 8,
            "amt": 2181
        },
        {
            "name": "Stage 6",
            "uv": 9,
            "amt": 2500
        },
        {
            "name": "Stage 7",
            "uv": 10,
            "amt": 2100
        }
    ]

    const itemArr: string[] = Object.keys(employeeInfo);
    console.log(itemArr);

    useEffect(() => {
        axios.get('https://react-assignment-e4aa2-default-rtdb.firebaseio.com/test.json')
            .then(res => {
                let employeeDetails: any = [];

                for (let key in res.data) {
                    employeeDetails.push({
                        id: key,
                        ...res.data[key]
                    })
                }

                setEmployeeData(employeeDetails);

                console.log(employeeData);
            })
            .catch(err => err.message)
    }, [])

    const columns: GridColDef[] = [
        {
            field: 'Uemail',
            headerName: 'Email',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'Uname',
            headerName: 'Name',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'UsignupDate',
            headerName: 'Date',
            width: 150,
            resizable: true,
            flex: 1
        },

    ]

    return (

        <div className="Home">
            <h1>Dashboard</h1>
            <Grid container spacing={2}>
                {itemArr.map((item: string, index: any) => {
                    return <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    <h2>{item}</h2>
                                    <h1>{employeeInfo[item]}</h1>
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                })}
            </Grid>
            <div className="dashboardChart">
                <div style={{ height: 300, width: '80%', flexGrow: 1, display: 'flex', margin: '50px' }} className="XGrid-Table">
                    <XGrid
                        rows={employeeData}
                        columns={columns}
                        columnBuffer={2}
                    />
                </div>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/*<Line type="monotone" dataKey="pv" stroke="#8884d8" />*/}
                    <Line type="monotone" dataKey="uv" stroke="#008B8B" />
                </LineChart>
            </div>
        </div>

    );
};

export default Home;