import { PeopleSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Quiz.css';

type Props = {
    question: any,
    answer: any,
    incrementindex: any
}

const FlashCard = (props: Props ) => {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => setShowAnswer(false), [props.question]);

    return (
        <>
            <div className="flashcard-container" onClick={() => setShowAnswer(!showAnswer)}>
                {!showAnswer && props.question}
                {showAnswer && props.answer}
            </div>
            {showAnswer && (
                <button onClick={props.incrementindex} className="flashcard-button">
                    Next Question
                </button>
            )}
        </>
    );
};


export default FlashCard;