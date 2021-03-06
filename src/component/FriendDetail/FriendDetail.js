import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data =>setFriend(data))
        
    }, [])
    return (
        <div>
            <h3>This is friend Detail: {friendId}</h3>
            <h3>name: {friend.name}</h3>
            <h4>Phone: {friend.phone}</h4>
            <h4>Website: {friend.website}</h4>
        </div>
    );
};

export default FriendDetail;