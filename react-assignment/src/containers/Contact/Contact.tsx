import React, { ReactElement, FC } from 'react';
import Layout from '../../components/Layout/Layout';

const Contact: FC = (): ReactElement => {
    return(
        <Layout>
           <div className="Contact">
            <h1>
                    I am in Contact page
                </h1>
           </div>
        </Layout>
    );
};

export default Contact;