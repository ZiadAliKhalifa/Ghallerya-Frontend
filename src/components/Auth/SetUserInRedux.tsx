import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"

import { setUser } from "../../redux/actionCreators"

const SetUserInRedux = () => {
    const { user, isAuthenticated } = useAuth0();

    const dispatch: Dispatch<any> = useDispatch()

    const saveUser = () => {
        if (isAuthenticated) setUser(user, dispatch);
    }

    return <button onClick={saveUser}>Set User</button>;
};

export default SetUserInRedux;