import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/profile'} render={() => <ProfileContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>
        </div>
    );
}