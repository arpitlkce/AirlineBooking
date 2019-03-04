import { connect } from 'react-redux';
import LoginView from './login';
import {login} from '../../crudBase';
import {dismissMessage} from '../../redux/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        authDetails: state.authSuccess,
        dismissMessage: state.dismissMessageDone
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (credentials, ownProps, route) => {
            dispatch(login(credentials, ownProps, route));
            dispatch(dismissMessage(false));
        },
        onDismiss: (bool) => dispatch(dismissMessage(bool))
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default LoginContainer;
