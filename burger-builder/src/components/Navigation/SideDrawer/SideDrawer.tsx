import React, {MouseEventHandler, ReactElement, FC} from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux1';

type Props = {
    opend: boolean,
    closed: MouseEventHandler,
    isAuth: boolean
}

const sideDrawer: FC<Props> = ({opend, closed, isAuth}: Props): ReactElement => {
    let attachedClasses = ["SideDrawer","Close"];

    if(opend) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <Aux>
            <Backdrop show={opend} clicked={closed} />
                <div className={attachedClasses.join(' ')} onClick={closed}>
                    <Logo />
                    <nav>
                        <NavigationItems isAuthenticated={isAuth}/>
                    </nav>
                </div>
            
        </Aux>
    );
};

export default sideDrawer;