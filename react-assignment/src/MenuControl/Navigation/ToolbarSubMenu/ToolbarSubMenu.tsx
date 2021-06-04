import React, { MouseEventHandler, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { submenulist } from './SubMenuList';
import { NavLink } from 'react-router-dom'
import './ToolbarSubMenu.css';


const ToolbarSubMenu = ({ clicked, name }: { clicked: MouseEventHandler, name: string }) => {

    useEffect(() => {
        submenulist.map((list, index) => {
            if (list.name === name) {
                return list.menulist.map((t1) => {
                    return console.log(t1)
                })
            }
        });
        
        
    })
    //console.log(t1)

    let menulist = (
        <MenuList>
            { submenulist.map((list, index) => {
               if (list.name === name) {
                return list.menulist.map((t1) => {
                    return <MenuItem key={index} onClick={clicked}><NavLink to={t1.path}>{t1.title}</NavLink></MenuItem>
                })
               }
            })}
            
        </MenuList>
    )


    return (

        <Paper className="paper" >
            {menulist}
        </Paper>
    );
};

export default ToolbarSubMenu;