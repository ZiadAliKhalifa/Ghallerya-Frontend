import React from "react"
import { useAuth0 } from "@auth0/auth0-react";

import { setUser } from "../../redux/actionCreators"



const SetUserInRedux: React.FC = () => {
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

// TODO: Connect component rather than calling a function that has dispatch ability
export default SetUserInRedux;
