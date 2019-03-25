import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./SignUp/SignUpPage";
import DashBoard from "./Dashboard/DashboardPage";

const MyRoutes = [
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/sign-up",
        component: SignUpPage
    },
    {
        path: "/dashboard",
        component: DashBoard
    }
]

const Routes = () => {
    const MyRoute = MyRoutes.map((curr, i) => {
        return (i === 0) ? 
            <Route exact = {true} key = {i} path = {curr.path} component = {curr.component} /> 
            :
            <Route key = {i} path = {curr.path} component = {curr.component} />
    });

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from = "/" to = "/login" />
                {MyRoute}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
