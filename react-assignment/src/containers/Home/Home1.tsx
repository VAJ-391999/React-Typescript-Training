import React, { ReactElement, FC, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { AuthenticationContext } from '../MyInfo/Context/Authcontext';
import './Home.css';



type MyFunctionReturnValue = ReturnType<() => true>;


const Home1: FC = (): ReactElement => {

    
    return (

        <div className="Home">
            <h1>
                home 1
                </h1>
        </div>

    );
};

export default Home1;