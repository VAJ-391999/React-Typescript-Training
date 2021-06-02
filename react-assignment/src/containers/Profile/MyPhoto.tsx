import React from 'react';
import Layout from '../../components/Layout/Layout';
import myphoto from '../../asserts/myphoto.jpg';

const MyPhoto = () => {
    return (
        <Layout>
            <img src={myphoto} alt="My Photo"/>
        </Layout>
    );
};

export default MyPhoto;