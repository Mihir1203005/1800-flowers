import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, auth2 } from '../Services/firebase';

const PrivatePage = ({ children }) => {
    const [user2] = useAuthState(auth2)
    const [user] = useAuthState(auth);
    if (user || user2) {
        return children
    }
    else {
        alert("After Login You Can Access All Features And Pages")
        return <Navigate to={'/login'} />
    }
}

export default PrivatePage