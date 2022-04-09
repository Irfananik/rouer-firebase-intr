import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import app from "../Firebase/Firebase.init"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    },[])

    const signInWithgoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result => {
            const user = result.user
            setUser(user)
            console.log(user)
        }))
    }

    const handleSingOut = () => {
        signOut(auth)
        .then(() =>{

        })
    }

    return {user, handleSingOut, signInWithgoogle}
}

export default useFirebase