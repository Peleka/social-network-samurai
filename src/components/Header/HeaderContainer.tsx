import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);