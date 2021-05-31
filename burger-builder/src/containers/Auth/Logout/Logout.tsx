import React, { useEffect , FC, ReactElement} from 'react';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import { AppDispatch } from '../../../index';

const Logout: FC = (props): ReactElement => {
    //const { onLogout } = props;

    const dispatch = useDispatch<AppDispatch>();
    const onLogout = () => dispatch(actions.logout())

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Redirect to="/" />
   
};

/*const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);*/
export default Logout;