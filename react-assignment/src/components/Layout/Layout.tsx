import React, { FC, ReactElement } from 'react';
import Toolbar from '../../MenuControl/Toolbar/Toolbar';

type Props = {
    children: any
}

const Layout = (props: Props): ReactElement => {
    return (
        <div>
            <Toolbar />
            <h1>RightSide menu</h1>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;