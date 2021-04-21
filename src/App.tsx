import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {RootStateType} from './redux/state'
import {Route} from 'react-router-dom';

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    changeNewText: (newText: string) => void
    addMessage: () => void
    changeNewMessage: (message: string) => void
}

const App = (props: AppPropsType) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                addMessage={props.addMessage}
                                                                changeNewMessage={props.changeNewMessage}

                />}/>
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}
                                                                addPostCallback={props.addPost}
                                                                changeNewText={props.changeNewText}

                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>
        </div>
    );
}


export default App;
