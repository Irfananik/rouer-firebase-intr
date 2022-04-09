import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInWithgoogle} = useFirebase()
    return (
        <div>
            <h3 className="text-2xl">Please Login</h3>
            <div className="mt-6">
                <button onClick={signInWithgoogle} className="bg-slate-300 p-2 rounded-lg">Google Sign In</button>
            </div>

            <form className="mt-6">
                <input className="text-xl border-2 rounded-lg p-2" type="email" placeholder='Your Email' />
                <br />
                <br />
                <input className="text-xl border-2 rounded-lg p-2" type="password" name="" id="" placeholder='Password' />
                <br />
                <br />
                <input className="text-xl bg-slate-300 p-2 rounded-lg" type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;