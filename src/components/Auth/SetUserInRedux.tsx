import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { setUser } from "../../redux/actions/userActions"
import { AppActionType } from "../../redux/state";
import { AppState } from "../../redux";

interface SetUserInReduxProps {
    //Place any props that are passed to this component from outside here.
}

// A type that is a mash-up of all types that end up in the props
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

// Interface for the return of mapStateToProps
interface LinkStateProps {
    currentUser: User;
}

// Interface for the return of MapDispatchToProps
interface LinkDispatchProps {
    setUser: (user: User) => void;
}

// The function takes the state and the props
// Returns items that follow the LinkStateProps interface
const mapStateToProps = (
    state: AppState,
    ownProps: SetUserInReduxProps
): LinkStateProps => ({
    currentUser: state.user
});

// The function takes the dispatch ability and the props
// Returns items that follow the LinkDispatchProps interface
const mapDispatchToProps = (
    dispatch: Dispatch<AppActionType>,
    ownProps: SetUserInReduxProps
): LinkDispatchProps => ({
    setUser: (user: User) => dispatch(setUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetUserInRedux);