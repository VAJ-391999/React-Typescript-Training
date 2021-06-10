import React, {MouseEventHandler, FC, ReactElement} from 'react';
import './DrawerToggle.css';

type Props = {
    clicked: MouseEventHandler 
}

const DrawerToggle: FC = (): ReactElement => (
    <div className="DrawerToggle">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;