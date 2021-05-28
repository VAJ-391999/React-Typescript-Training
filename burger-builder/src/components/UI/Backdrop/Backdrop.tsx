import React, {MouseEventHandler} from 'react';
import './Backdrop.css';

type Props = {
    clicked: MouseEventHandler,
    show: boolean 
}

 const backdrop =({clicked, show}: Props) => {
     return (
        show ? <div className="Backdrop" onClick={clicked}></div> : null)
     
 };

 /*const backdrop =(props) => {
    return (
       props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null)
    
};*/

 export default backdrop;

