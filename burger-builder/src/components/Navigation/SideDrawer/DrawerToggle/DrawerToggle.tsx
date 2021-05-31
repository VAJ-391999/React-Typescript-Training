import React, {MouseEventHandler, FC, ReactElement} from 'react';
import './DrawerToggle.css';

type Props = {
    clicked: MouseEventHandler 
}

const drawerToggle: FC<Props> = ({clicked}: Props): ReactElement => (
    <div className="DrawerToggle" onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;