import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { setUser } from "../../redux/actions/userActions"
import { AppActionType } from "../../redux/state";
import { AppState } from "../../redux";

interface SetUserInReduxProps {

}

type Props = SetUserInReduxProps & LinkStateProps & LinkDispatchProps;

const SetUserInRedux = ({ currentUser, setUser }: Props) => {
    const { user, isAuthenticated } = useAuth0();

    const saveUser = () => {
        if (isAuthenticated) {
            const newUser: User = {
                email: user.email,
                email_verified: user.email_verified,
                family_name: user.family_name,
                given_name: user.given_name,
                locale: user.locale,
                name: user.name,
                nickname: user.nickname,
                picture: user.picture,
                sub: user.sub,
                updated_at: user.updated_at,
            }

            setUser(newUser);
        }
    }

    return <button onClick={saveUser}>Set User</button>;
}

interface LinkStateProps {
    currentUser: User;
}

interface LinkDispatchProps {
    setUser: (user: User) => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: SetUserInReduxProps
): LinkStateProps => ({
    currentUser: state.user
});

const mapDispatchToProps = (
    dispatch: Dispatch<AppActionType>,
    ownProps: SetUserInReduxProps
) => ({
    setUser: (user: User) => dispatch(setUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetUserInRedux);