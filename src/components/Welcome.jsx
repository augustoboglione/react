import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"
import arrow from '/assets/arrow.svg'

const Welcome = ({start}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`welcome ${theme}`}>
            <h1>Welcome!</h1>
            <div onClick={start}>
                <h2>Start</h2>
                <img src={arrow} alt='Start'/>
            </div>
        </div>
    )
}

export default Welcome