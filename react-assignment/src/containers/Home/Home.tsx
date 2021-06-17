import React, { ReactElement, FC } from 'react';
import { Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';
import {
    Chart,
    PieSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
  
import { IEmployeeInfo } from '../../Interfaces/EmployeeInfo';

import './Home.css';

const Home: FC = (): ReactElement => {

    const quality: any[] = [
        { country: 'Russia', area: 12 },
        { country: 'Canada', area: 7 },
        { country: 'USA', area: 7 },
        { country: 'China', area: 7 },
        { country: 'Brazil', area: 6 },
        { country: 'Australia', area: 5 },
        { country: 'India', area: 2 },
        { country: 'Others', area: 55 },
    ];

    const employeeInfo: IEmployeeInfo = {
        projectCompleted: 20,
        projectInProgress: 3,
        Salary: 30000
    }

    const itemArr: string[] = Object.keys(employeeInfo);
    console.log(itemArr);

    return (

        <div className="Home">
            <h1>Dashboard</h1>
            <Grid container spacing={2}>
                {itemArr.map((item: string, index: any) => {
                    return <Grid item xs={12} sm={3} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    <h3>{item.toUpperCase()}</h3>
                                    <h1>{employeeInfo[item]}</h1>
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                })}

                

            </Grid>
        </div>

    );
};

export default Home;