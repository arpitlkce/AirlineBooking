export let getClassName = (state, attr, value) => {
    if (state && state[attr] === value) {
        return 'activeButton';
    } else return '';
};

export const authData = {
    isAuthenticated: false,
    authenticate (cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout (cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

export let handleChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
        [key]: value
    });
};
