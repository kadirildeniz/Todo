import React from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

function LoginPage() {
  const signInUser = () => {
    signInWithPopup(auth,provider).catch((err) => alert(err.message))
  }
  return (
    <div className="text-center mt-56">
      <h1 className="text-3xl font-bold">
        My Todos
        </h1>
      <button 
        onClick={signInUser} 
        className="bg-orange-400 p-3 text-sm font-bold text-white rounded-md hover:scale-110 transition-all duration-200 mt-5"
      >
        Sign in With Google
      </button>
    </div>
  )
}


export default LoginPage
