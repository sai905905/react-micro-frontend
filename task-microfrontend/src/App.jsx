
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
  }

  const createTask = async () => {
    await axios.post('http://localhost:3000/tasks', { title, description })
    fetchTasks()
  }

  const updateTask = async (id) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, { title, description })
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    fetchTasks()
  }

  return (
    <div>
      <h1>Task Microfrontend</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={createTask}>Create Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.description}
            <button onClick={() => updateTask(task._id)}>Update</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
