import React, { createContext } from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';
import ToolbarSubMenu from '../../ToolbarSubMenu/ToolbarSubMenu';



type Props = {
    link: string,
    children: any
}

const NavigationItem = (props: Props) => {

    const [open, setOpen] = React.useState<boolean>(false);

    const handleToggle = () => {
        console.log("toggle");
        setOpen((prevOpen) => !prevOpen);
      };

      const handleClose = (event: React.MouseEvent<EventTarget>) => {
        console.log("close");
        setOpen(false);
      };

    return (
      
        <li className="NavigationItem">
            <NavLink to={props.link} exact onClick={() =>handleToggle()}>
                {props.children}
            </NavLink>
            {open && <ToolbarSubMenu clicked={(event) => handleClose(event)} name={props.children}/>}
        </li>
       
    
    );
};

export default NavigationItem;