import React, { ReactElement, FC } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './MyChatbot/config';
import messageparser from './MyChatbot/MessageParser';
import actionprovide from './MyChatbot/ActionProvider';
import './About.css'

const About1: FC = (): ReactElement => {
    return (

        <div className="About">
            <h1>
               Ask Your Questions.....
            </h1>
            <div>
                <Chatbot config={config} messageParser={messageparser} actionProvider={actionprovide} />
            </div>
        </div>

    );
};

export default About1;