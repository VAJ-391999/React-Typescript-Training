import React, {MouseEventHandler, FC, ReactElement} from 'react';
import './DrawerToggle.css';

type Props = {
    clicked: MouseEventHandler 
}

const DrawerToggle: FC<Props> = (props: Props): ReactElement => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;