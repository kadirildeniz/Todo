import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Header() {
    const [user] = useAuthState(auth)
    const handleSignOut = () => auth.signOut();
    return (
        <div className="flex items-center justify-between sticky top-0 bg-gray-800 z-10 shadow-md p-3 m-5 rounded-md">
            <h1 className="text-3xl font-light text-white ml-3">todo app</h1>
            <img onClick={handleSignOut} src={user?.photoURL} alt="profile" className="h-20 w-20 rounded-full cursor-pointer" />
        </div>
    )
}

export default Header
