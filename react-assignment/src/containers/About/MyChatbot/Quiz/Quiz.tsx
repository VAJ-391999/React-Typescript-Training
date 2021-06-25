import React, { useState} from 'react';
import FlashCard from './FlashCard';
import './Quiz.css';

const Quiz = (props: any) => {
    console.log(props);
    let [questionIndex, setQuestionIndex] = useState(0);

    const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

    const currentQuestion = props.questions[questionIndex]

    if(!currentQuestion) {
        return <p>Quiz Over</p>
    }

    return (
       <FlashCard 
        question={currentQuestion.question}
        answer={currentQuestion.answer}
        incrementindex={incrementIndex}
       />
    );
};

export default Quiz;