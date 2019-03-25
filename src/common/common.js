const common = {};

common.NO_OP = () => {};

common.validateEmail = value => {
    let errorMessage;
    if (value.length === 0) {
        errorMessage = 'Cannot be empty';
        return errorMessage;
    }
    //
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = 'Invalid email address';
        return errorMessage;
    }
}

common.validatePassword = value => {
    let errorMessage;
    if (value.length === 0) {
        errorMessage = 'Cannot be empty';
        return errorMessage;
    }
    if (value.length <= 4 ) {
        errorMessage = 'Weak password';
        return errorMessage;
    }
}

common.validateUserName = value => {
    let errorMessage;
    if (value.length === 0) {
        errorMessage = 'Cannot be empty';
        return errorMessage;
    }
}

common.createDrpDwnData = data => {
    return Object.keys(data).map(keys => ({value: keys, label: keys}));
}

export default common;