import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../redux/actions";
import { Formik, Field } from "formik";
import InputBox from "../../common/components/InputBox";
import Button from "../../common/components/Button";
import ErrorMessage from "../../common/components/ErrorMessage";
import "../../common/css/common.css";
import common from "../../common/common";

class LoginPage extends Component {

    jumpToRegister = () => {
        this.props.history.push('/sign-up');
    }

    callLoginAPI = values => {
        this.props.triggerLoginAPI(values);
    }

    componentDidUpdate() {

        // on succesful login moves to dashboard page
        this.props.isLoggedIn && this.props.history.push('/dashboard');
    }

    render() {

        return(
            <React.Fragment>
                <Formik initialValues = { {email: '', password: ''}} onSubmit = { (values) => this.callLoginAPI(values)}>
                        {({ handleSubmit, dirty }) => (
                            <div className = "parent-form">
                                <form onSubmit={handleSubmit}>
                                    <h2>Sign In</h2>
                                    <Field type ='email' name ="email" placeholder ="Enter E-Mail ID" component={InputBox} validate={common.validateEmail} />
                                    <Field type ='password' name ="password" placeholder ="Enter Password" component={InputBox} validate={common.validatePassword} />
                                    <ErrorMessage message = {this.props.errorMessage} />
                                    <Button type ='submit' className = "button-LR" title ="Login" />
                                    <Button type ='button' className = "button-LR" title ="Sign Up" onClick = {this.jumpToRegister} />               
                                </form>
                            </div>
                        )}
                </Formik>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    let { isLoggedIn, errorMessage } = state.LoginReducer;

    return {
        isLoggedIn,
        errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
