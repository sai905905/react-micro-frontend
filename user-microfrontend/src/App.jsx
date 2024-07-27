
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3000/users')
    setUsers(response.data)
  }

  const createUser = async () => {
    await axios.post('http://localhost:3000/users', { name, email })
    fetchUsers()
  }

  const updateUser = async (id) => {
    await axios.put(`http://localhost:3000/users/${id}`, { name, email })
    fetchUsers()
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`)
    fetchUsers()
  }

  return (
    <div>
      <h1>User Microfrontend</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={createUser}>Create User</button>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.email})
            <button onClick={() => updateUser(user._id)}>Update</button>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
