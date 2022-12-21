import React from 'react'
import User from './User'

const UserList = ({developers, title, deleteUser}) => {

    return (
        <div className='user-list-component'>
            <div className='user-list-title'>
                <h1>{title}</h1>
            </div>
            {developers.map(user => <User data={user} key={user.id} deleteUser={deleteUser}/>)}
        </div>
    )
}

export default UserList;