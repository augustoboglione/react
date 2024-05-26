import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"
import Button from "./Button"

const Welcome = ({onClick}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`welcome ${theme}`}>
            <h1>Welcome!</h1>
            <Button onClick={onClick}>Start buying</Button>
        </div>
    )
}

export default Welcome