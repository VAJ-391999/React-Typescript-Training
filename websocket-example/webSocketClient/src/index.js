import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { w3cwebsocket as W3cWebSocket } from 'websocket';
import 'antd/dist/antd.css';
import {Card, Avatar, Input, Typography } from 'antd';

import './index.css'


const client = new W3cWebSocket('ws://127.0.0.1:8000');
const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

export const App = () => {

    const [userInfo, setUser] = useState({
        userName: '',
        isLoggedIn: false
    });
    const [usermessage, setUserMessage] = useState([]);
    const [searchval, setSearchVal] = useState("");


    useEffect(() => {
        client.onopen = () => {
            console.log('Websocket Client connected');
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('get replay', dataFromServer);

            if (dataFromServer.type === 'message') {
                setUserMessage([
                    ...usermessage,
                    {
                        newMsg: dataFromServer.msg,
                        newUser: dataFromServer.currUser
                    }
                ])
            }


        };
        console.log('new', usermessage)
    }, [usermessage]);

    const onButtonClicked = (value) => {
        client.send(JSON.stringify({
            type: "message",
            msg: value,
            currUser: userInfo.userName
        }));
        
    }

    return (
        <div className="main">
            {
                userInfo.isLoggedIn ?
                    <div>
                        <div className="title">
                            <Text id="main-heading" type="secondary" style={{ fontSize: '36px' }}>Websocket Chat: {userInfo.userName}</Text>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
                            {usermessage ? usermessage.map((item,index) => 
                                <Card key={index} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: userInfo.userName === item.newUser ? 'flex-end' : 'flex-start' }} loading={false}>
                                <Meta
                                  avatar={
                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{item.newUser.toUpperCase()}</Avatar>
                                  }
                                  title={item.newUser+":"}
                                  description={item.newMsg}
                                />
                              </Card>
                                
                            ) :null}
                        </div>
                        <div className="bottom">
                            <Search
                                placeholder="Enter UserName"
                                enterButton="Send"
                                size="Large"
                                onChange={(e) => setSearchVal(e.target.value)}
                                onSearch={ value => onButtonClicked(value) }
                            />
                        </div>
                    </div>
                    : <div style={{ padding: '200px 40px' }}>
                        <Search
                            placeholder="Enter UserName"
                            enterButton="Login"
                            size="Large"
                            onSearch={value => setUser({ isLoggedIn: true, userName: value })}
                        />
                    </div>
            }

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));