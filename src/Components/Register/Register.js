import React from 'react';

const Register = () => {
    return (
        <div>
            <h3 className="text-2xl">Please Register now</h3>
            <form className="mt-6"> 
                <input  className="text-xl border-2 rounded-lg p-2" type="text" placeholder='Your name' />
                <br />
                <br />
                <input  className="text-xl border-2 rounded-lg p-2" type="email" placeholder='Your Email' />
                <br />
                <br />
                <input  className="text-xl border-2 rounded-lg p-2" type="password" name="" id="" placeholder='Password' />
                <br />
                <br />
                <input className="text-xl bg-slate-300 p-2 rounded-lg" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;