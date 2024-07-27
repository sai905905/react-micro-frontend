import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { loadMicrofrontend } from './loadMicrofrontends'

ReactDOM.render(<App />, document.getElementById('root'))

loadMicrofrontend('http://localhost:4002/main.js', 'user-mf')
loadMicrofrontend('http://localhost:4001/main.js', 'task-mf')
