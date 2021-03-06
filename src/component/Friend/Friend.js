import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, email} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        marginLeft:'200px',
        marginRight: '200px',
        marginBottom:'20px',
        border: '1px solid green',
        padding: '20px',
        borderRadius:'20px' 
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3> Id: <Link to={`/friend/${id}`}> Show detail of {id}</Link></h3>
            <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;