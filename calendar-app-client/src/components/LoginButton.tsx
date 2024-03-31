import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// created for auth0 
function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        // If the user is authenticated, return null 
        return null;
    }

    // If the user is not authenticated, return  the "Sign In" button
    return (
        <button onClick={() => loginWithRedirect()}>
            Sign In
        </button>
    );
}

export default LoginButton;
