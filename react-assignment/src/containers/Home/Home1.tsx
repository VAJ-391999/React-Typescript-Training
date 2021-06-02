import React, { ReactElement, FC } from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.css';

const Home1: FC = (): ReactElement => {
    return(
        <Layout>
           <div className="Home">
            <h1>
                    I am in Home1
                </h1>
           </div>
        </Layout>
    );
};

export default Home1;