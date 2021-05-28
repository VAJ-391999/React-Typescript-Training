import React, {MouseEventHandler} from 'react';
import './Model.css';
import Aux from '../../../hoc/Aux1';
import Backdrop from '../Backdrop/Backdrop';

type Props = {
    show: boolean,
    modelClosed: MouseEventHandler,
    children: any
}

const Model = ({show, modelClosed, children}: Props) => {
   /* shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show != props.show ||nextProps.children !== props.children ;
    }*/
    
    return (
        <Aux>
            <Backdrop show={show} clicked={modelClosed} />
            <div className="Modal" style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show? '1': '0'
            }}>
                {children}
                
            </div>
        </Aux>
    );
}

export default React.memo(Model, 
    (prevProps, nextProps) =>
    nextProps.show === prevProps.show && nextProps.children === prevProps.children );