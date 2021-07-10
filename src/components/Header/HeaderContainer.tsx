import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logOut})(HeaderContainer);