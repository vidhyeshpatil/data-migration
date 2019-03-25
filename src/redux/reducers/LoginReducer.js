import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/actionTypes";

const initialState = {
    isLoggedIn: false,
    errorMessage: ''
};

const loginReducer = function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            let userInput = action.data;
            let loginCreds = action.payload;
            // as of now checked input values & hard coded string in db.json file
            // this code would handle from db 
            return {
                ...state,
                isLoggedIn: (JSON.stringify(userInput) === JSON.stringify(loginCreds)),
                errorMessage: ((JSON.stringify(userInput) === JSON.stringify(loginCreds))) ? "" : "Invalid Credentials"
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                errorMessage: "Invalid Credentials"
            };
        default:
            return state;

    }
};

export default loginReducer;