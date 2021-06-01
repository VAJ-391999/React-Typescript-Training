import React, { ReactElement, FC } from 'react';
import Layout from '../../components/Layout/Layout';

const About: FC = (): ReactElement => {
    return (
        <Layout>
            <div className="About">
                <h1>
                    I am in About page
            </h1>
            </div>
        </Layout>
    );
};

export default About;