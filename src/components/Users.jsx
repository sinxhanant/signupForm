import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import "./Users.css"

export default function Users() {

    const [users, setUsers] = useState([])

    const handleDelete = (id) =>{
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res => {console.log(res)
      window.location.reload()
      })
      
      
      .catch(errr => console.log(errr))
    }

    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))

    }, [])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Country</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {

                users.map((user)=>{
                    return(

                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.country}</td>
                        <td><Link to={`/edit/${user._id}`}><button>Edit</button></Link><button onClick={(e)=> handleDelete(user._id)}>Delete</button></td>

                    </tr>)
                })
            }
        </tbody>
      </table>
    </div>
  )
}
