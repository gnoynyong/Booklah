import React, {useContext,useState} from 'react'
import {auth} from './firebase';

const AuthContext = React.createContext();

//custom hooks
export function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState();
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password) //return a promise when sign up done
    }

    auth.onAuthStateChanged(user=>{
        setCurrentUser(user)
    })
    
    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
