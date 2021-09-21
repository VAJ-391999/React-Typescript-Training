import React from 'react';
import './NavigationItem.css';
//import { NavLink } from 'react-router-dom';



const NavigationItem = (props) => {

    return (
      
        <li className="NavigationItem">
            <a href="#">
                <img src={props.imgName} /> {props.children}
            </a>
        </li>
       
    
    );
};

export default NavigationItem;