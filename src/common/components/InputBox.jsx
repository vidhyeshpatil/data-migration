import React from "react";
import ErrorMessage from "./ErrorMessage";

const InputBox = (props) => {
    const { type, form: { touched, errors }, field, disable = false} = props;

    return (
        <React.Fragment>
            <input type = {type} {...field}  {...props} disabled={!!disable} />
            {touched[field.name] &&
					errors[field.name] && <ErrorMessage message = {errors[field.name]}/>}
        </React.Fragment>
    );
}

export default InputBox;