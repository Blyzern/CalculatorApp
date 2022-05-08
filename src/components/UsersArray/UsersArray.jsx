import React from 'react';

export const UsersArray = ({ array }) => {
    return <div className='userContainer'>
        <p>Name: {array.name}</p> 
        <p>Age: {array.age}</p>
        <p>Platform: {array.platform}</p>
        </div>
};