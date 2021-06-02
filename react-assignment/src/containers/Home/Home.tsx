import React, { ReactElement, FC } from 'react';
import Layout from '../../components/Layout/Layout';
import'./Home.css';

const Home: FC = (): ReactElement => {
    return (
        <Layout>
            <div className="Home">
            <h1>Home</h1>
            </div>
        </Layout>
    );
};

export default Home;