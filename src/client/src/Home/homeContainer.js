import { connect } from 'react-redux';
import {isAuthSuccess, itemStatus} from '../redux/actions';

import Home from './home';

const mapStateToProps = (state) => {
    return {
        status: state.itemStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDismiss: (bool) => dispatch(itemStatus(bool)),
        signOut: (bool) => dispatch(isAuthSuccess(bool))

    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
