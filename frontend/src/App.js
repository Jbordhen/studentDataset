import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import './bootstrap.min.css'

const App = () => {
    return (
        <Router>
            <Route path='/' component={HomeScreen}></Route>
        </Router>
    )
}

export default App
