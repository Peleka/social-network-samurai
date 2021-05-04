import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StoreType} from './redux/state'
import {Route} from 'react-router-dom';

type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={state.dialogsPage}
                                                                dispatch={props.store.dispatch.bind(props.store)}

                />}/>
                <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}
                                                                dispatch={props.store.dispatch.bind(props.store)}

                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>
        </div>
    );
}


export default App;
