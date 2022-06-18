import React, {useEffect, useState} from 'react'

function Users(){
    const [users, setUsers] = useState([{
        Fname: '',
        Lname: '',
        Gender: '',
        DoB: '',
        City: '',
        Phone: '',
        Email: ''
    }])

    useEffect(() =>{
        fetch('/users').then( res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes));

        
    })

    return <div className='container'>
        <h1>Users</h1>
        {users.map(user =>
        <div>
            <h1>{user.Fname} {user.Lname}</h1>
            <p>{user.Gender}</p>
            <p>{user.DoB}</p>
            <p>{user.Email}</p>
            <p>{user.Phone}</p>
        </div>
            )}
    
    </div>
}

export default Users;