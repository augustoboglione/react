import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = document.getElementById('root')

if(window.matchMedia('(pointer: coarse)').matches) root.className = 'touch'
else root.className = 'mouse'

let touchFlag = false

const handleMouseMove = () => {
    if (touchFlag) touchFlag = false
    else root.className = 'mouse'
}

const handleTouch = () => {
    root.className = 'touch'
    touchFlag = true
}

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('touchstart', handleTouch)

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)