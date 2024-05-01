import {Link} from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.to} onClick={props.onClick}>
            <button className={props.className}>{props.children}</button>
        </Link>
    )
}

export default Button