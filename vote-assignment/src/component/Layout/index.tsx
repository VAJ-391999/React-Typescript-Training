import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Layout:FC = (props: any) => {
    return (
        <div>
            <NavLink to="/">vote</NavLink><br/>
            <NavLink to="/result">result</NavLink>
            {props.children}
        </div>
    );
};

export default Layout;