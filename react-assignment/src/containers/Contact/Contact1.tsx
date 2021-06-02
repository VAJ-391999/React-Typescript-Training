import React, { ReactElement, FC } from 'react';
import Layout from '../../components/Layout/Layout';
import './Contact.css';

const Contact1: FC = (): ReactElement => {
    return(
        <Layout>
           <div className="Contact">
            <h1>
                    I am in Contact1 page
                </h1>
           </div>
        </Layout>
    );
};

export default Contact1;