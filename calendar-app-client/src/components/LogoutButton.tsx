import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
    const { logout, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        // Return null or a loading indicator while authentication state is loading
        return null;
    }

    if (isAuthenticated) {
        // If the user is authenticated, render the "Sign Out" button
        return (
            <button onClick={() => logout()}>
                Sign Out
            </button>
        );
    } else {
        // If the user is not authenticated, return null or any other content you prefer
        return null;
    }
}

export default LogoutButton;
