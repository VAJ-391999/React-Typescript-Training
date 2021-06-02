import React, { ReactElement, FC } from 'react';
import './LeftNavItems.css';
import LeftNavItem from './LeftNavItem/LeftNavItem';

type Props = {
    accordionlist: any[]
}

const LeftNavItems = (props: Props):ReactElement => {
    return(
        <ul className="LeftNavItems">
            {props.accordionlist.map((list,index) => {
                return <LeftNavItem key={index} path={list.path}>{list.title}</LeftNavItem>
            })}
        </ul>
    )
};

export default LeftNavItems;