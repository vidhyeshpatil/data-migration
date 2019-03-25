import React from "react";

const ErrorMessage = (props) => {
    const { message } = props;

    return (
        <React.Fragment>
            {message.length > 0 && <div className = "errorMsg"> {message} </div>}
        </React.Fragment>
    );
}

export default ErrorMessage;