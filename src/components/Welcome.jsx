import {useContext} from "react"
import {DarkContext} from "../context/DarkContext"
import Button from "./Button"

const Welcome = ({onClick}) => {
    const {dark} = useContext(DarkContext)

    return (
        <div className={`welcome ${dark}`}>
            <h1>Welcome!</h1>
            <Button onClick={onClick}>Start buying</Button>
        </div>
    )
}

export default Welcome