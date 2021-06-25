import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from './ChatbotComponent/Todos';
import Options from './Options/Options';
import Quiz from './Quiz/Quiz';


const botName = "Charry";

const config = {
    botName: botName,
    lang: "no",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#000",
        },
        chatButton: {
            backgroundColor: "#000",
        },
    },
    state: {
        todos: []
    },
    widgets: [
        {
            widgetName: "todos",
            widgetFunc: (props: any) => <Todos {...props} />,
            mapStateToProps: ["todos"],
        },
        {
            widgetName: "options",
            widgetFunc: (props: any) => <Options {...props} />,
        },
        {
            widgetName: "javascriptscriptQuiz",
            widgetFunc: (props: any) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                        question: "What is closure?",
                        answer: "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
                        id: 1,
                    },
                    {
                        question: "Explain prototypal inheritance",
                        answer: "Prototypal inheritance is a link between an object and an object store that holds shared property is not found on the host object, javascript will check the prototype object.",
                        id: 2
                    }
                ]
            }
        },
        {
            widgetName: "pythonQuiz",
            widgetFunc: (props: any) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                        question: "What is Python?",
                        answer: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ",
                        id: 1,
                    },
                    {
                        question: "What is Flask",
                        answer: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. ",
                        id: 2
                    }
                ]
            }
        },
        {
            widgetName: "reactQuiz",
            widgetFunc: (props: any) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                        question: "What is React?",
                        answer: "React is a JavaScript library for building user interfaces.",
                        id: 1,
                    },
                    {
                        question: "What is NodeJs",
                        answer: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
                        id: 2
                    }
                ]
            }
        }

    ],
    initialMessages: [createChatBotMessage(`Hello, I am ${botName}, What do you want to learn`,{
        widget: "options"
    })]
}

export default config;