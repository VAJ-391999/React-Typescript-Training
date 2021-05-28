import React, {MouseEventHandler} from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

type Props = {
    ingrediants: [],
    checkoutCancelled: MouseEventHandler,
    checkoutContinued: MouseEventHandler
}

const checkoutSummary = ({ingrediants, checkoutCancelled, checkoutContinued }) => {
    return (
        <div className="CheckoutSummary">
            <h1>we hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingrediants={ingrediants}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={checkoutCancelled}>CANCLE</Button>

            <Button 
                btnType="Success"
                clicked={checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;