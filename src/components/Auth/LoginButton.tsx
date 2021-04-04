import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const login = () => {
        loginWithRedirect();
    }

    return <button onClick={login}>Log In</button>;
};

export default LoginButton;