import React, {MouseEventHandler, ReactElement, FC, ReactNode} from 'react';
import './Backdrop.css';

type Props = {
    clicked: MouseEventHandler,
    show: boolean 
}

 const backdrop: FC<Props> = ({clicked, show}: Props): ReactElement | null => {
     return (
        show ? <div className="Backdrop" onClick={clicked}></div> : null)
 };

 /*const backdrop =(props) => {
    return (
       props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null)
    
};*/

 export default backdrop;

