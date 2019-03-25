import React from "react";

const Button = (props) => {
    const { type, className, field, title, onClick, disabled} = props;
    
    return (
        <div>
            <button type = {type} className = {className} {...field} {...props} disabled = {disabled} onClick = {onClick}> {title || 'Default'} </button>
        </div>
    );
}

export default Button;
