import React, {MouseEventHandler} from 'react';
import './DrawerToggle.css';

type Props = {
    clicked: MouseEventHandler 
}

const drawerToggle = ({clicked}: Props) => (
    <div className="DrawerToggle" onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;