import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.congig";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle= ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGitHub= ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, logIn, signInWithGoogle, signInWithGitHub, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;