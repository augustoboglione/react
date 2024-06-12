import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"
import Button from "./Button"
import start from '/assets/start.svg'

const Welcome = ({onClick}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`welcome ${theme}`}>
            <h1>Welcome!</h1>
            <Button onClick={onClick}>Start <img src={start} alt="" style={{height: '100%'}} /></Button>
        </div>
    )
}

export default Welcome