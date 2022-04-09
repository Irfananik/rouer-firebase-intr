import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "../Firebase/Firebase.init"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {

    },[])

    const signInWithgoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result => {
            const user = result.user
            setUser(user)
            console.log(user)
        }))
    }

    return {user, signInWithgoogle}
}

export default useFirebase