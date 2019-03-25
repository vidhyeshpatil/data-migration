import React from "react";
import Select from "react-select";

const DropDown = (props) => {
    const {DDName, DDPlaceholder, DDSelectedValue, DDOptions, handleDrpDwnData} = props;

    return(
        <React.Fragment>
            <Select 
                autoSize = {true}
                className = "dropdown"
                name = {DDName}
                placeholder = {DDPlaceholder}
                value = {DDSelectedValue}
                options = {DDOptions}
                onChange = {handleDrpDwnData}
            />
        </React.Fragment>
    );
}

export default DropDown;