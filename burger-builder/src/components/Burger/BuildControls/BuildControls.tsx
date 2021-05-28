import React, {MouseEventHandler} from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

interface Props {
    price: number,
    ingrediantAdded: ({}) => void,
    ingrediantRemoved: ({}) => void,
    disabled: [],
    purchaseable: boolean,
    ordered: MouseEventHandler,
    isAuth: boolean
};



const buildControls = (props: Props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingrediantAdded(ctrl.type)}
            removed={() => props.ingrediantRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        })}
    <button 
    className="OrderButton"
    disabled={!props.purchaseable} onClick={props.ordered}>{props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>

    </div>
);

export default buildControls;