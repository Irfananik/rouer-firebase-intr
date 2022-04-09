import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <span className="text-xl text-zinc-500">Current User Name: {user? user.displayName : 'No body'}</span>
        </div>
    );
};

export default Home;