import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <span>{user?.displayName && user.displayName}</span>
        </div>
    );
};

export default Home;