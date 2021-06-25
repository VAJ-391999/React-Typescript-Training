import React from 'react';
import './Options.css'

const Options = (props: any) => {

    const options = [
        {
            text: "Javascript",
            handler: props.actionProvider.javascriptQuizHandler,
            id: 1,
        },
        {
            text: "Python",
            handler: props.actionProvider.pythonQuizHandler,
            id: 2,
        },
        {
            text: "React",
            handler: props.actionProvider.reactHandler,
            id: 3
        }
    ];

    const buttonMarkup = options.map((option: any) => {
        return <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    })

    return (
        <div className="option-container">
            {buttonMarkup}
        </div>
    );
};

export default Options;