import React, {MouseEventHandler} from 'react';
import './Button.css';

/*const button = (props) => (

    let cssClasses: string = "Button";

    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}>{props.children}</button>
  );*/

  type Props = {
    btnType: string,
    clicked?: MouseEventHandler,
    disabled?: boolean,
    children?: any
  };

  const button = ({btnType, clicked, disabled, children }: Props) => {
    let cssClasses: string = "Button" + " " + btnType ;
    return (
      <button
      className={cssClasses}
      onClick={clicked}
      disabled={disabled}>{children}</button>
    );
  };
  export default button;