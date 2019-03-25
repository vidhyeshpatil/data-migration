import React, {Component} from "react";
import { Formik, Field } from "formik";
import InputBox from "../../common/components/InputBox";
import Button from "../../common/components/Button";
import common from "../../common/common";

class SignUpPage extends Component {

    onSubmit = () => {
        alert("Functionality not yet implemented");
    }

    jumpToLogin = () => {
        this.props.history.push('/login');
    }

    render() {

        return(
            <React.Fragment>
                <Formik initialValues = { {email: '', password: '', username: ''}} >
                        {({ handleSubmit }) => (
                            <div className = "parent-form">
                                <form onSubmit={handleSubmit}>
                                    <h2>Sign Up</h2>
                                    <Field type ='text' name ="username" placeholder ="Enter User Name" component={InputBox} validate={common.validateUserName} />
                                    <Field type ='email' name ="email" placeholder ="Enter E-Mail ID" component={InputBox} validate={common.validateEmail} />
                                    <Field type ='password' name ="password" placeholder ="Enter Password" component={InputBox} validate={common.validatePassword} />
                                    <Button type ='submit' title ="Submit" className = "button-LR" onClick = {this.onSubmit} />
                                    <Button type ='button' title ="Back" className = "button-LR" onClick = {this.jumpToLogin}/>
                                </form>
                            </div>
                        )}
                </Formik>
            </React.Fragment>
        );
    }
}

export default SignUpPage;