import React, { ReactElement, FC } from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.css';

const Home2: FC = (): ReactElement => {
    return(
        <Layout>
           <div className="Home">
            <h1>
                    I am in Home2
                </h1>
           </div>
        </Layout>
    );
};

export default Home2;