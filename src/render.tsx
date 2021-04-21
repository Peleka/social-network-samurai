import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, changeNewMessage, changeNewText, RootStateType} from './redux/state';

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}
                 addMessage={addMessage}
                 changeNewMessage={changeNewMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
