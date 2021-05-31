import React, {MouseEventHandler, ReactElement, FC} from 'react';
import './Input.css';

type Props = {
    key: string,
    invalid: boolean,
    shouldValidate: boolean,
    touched: boolean,
    elemenetType: string,
    elementConfig: any,
    value: string,
    changed: MouseEventHandler
};

const input: FC<Props> = ({invalid, shouldValidate, touched,  elemenetType, elementConfig, value, changed }: Props): ReactElement => {

    let inputElement: null | JSX.Element = null;
    const inputClasses = ["InputElement"];

    if (invalid && shouldValidate && touched) {
        inputClasses.push("Invalid");
    }

    switch (elemenetType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={value}
                    onChange={() => changed}>
                   {elementConfig.options.map(option => (
                       <option key={option.value} value={option.value}>
                           {option.displayValue}
                       </option>
                   ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed}/>;
    }

    return (
        <div className="Input">
            <label className="Label">
                {/*label*/}
            </label>
            {inputElement}
        </div>
    )

}

export default input;