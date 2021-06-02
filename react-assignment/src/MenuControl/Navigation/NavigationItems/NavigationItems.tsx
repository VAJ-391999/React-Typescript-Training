import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


const NavigationItems = () => {
    return (

        <ul className="NavigationItems">
            <NavigationItem link="/home">Home</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
        </ul>

    );
};

export default NavigationItems;