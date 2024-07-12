import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = document.getElementById('root')

let touchFlag = false

const handleClick = () => {
    if (touchFlag) touchFlag = false
    else root.className = 'mouse'
}

const handleTouch = () => {
    root.className = 'touch'
    touchFlag = true
}

window.addEventListener('mousemove', handleClick)
window.addEventListener('touchstart', handleTouch)

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)