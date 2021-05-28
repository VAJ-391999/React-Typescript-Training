import React, {MouseEventHandler} from 'react';
import './BuildControl.css';

interface Props {
    label: string,
    removed:  MouseEventHandler,
    disabled: boolean,
    added: MouseEventHandler
}

const buildControl = (props: Props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button 
        className="Less" 
        onClick={props.removed} 
        disabled={props.disabled}>Less</button>

        <button 
        className="More"
        onClick={props.added}>More</button>
    </div>
);

export default buildControl;