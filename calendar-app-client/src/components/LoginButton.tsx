import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        // If the user is authenticated, return null (or any other JSX element you prefer)
        return null;
    }

    // If the user is not authenticated, render the "Sign In" button
    return (
        <button onClick={() => loginWithRedirect()}>
            Sign In
        </button>
    );
}

export default LoginButton;
