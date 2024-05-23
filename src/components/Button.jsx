import {Link} from 'react-router-dom'

const Button = ({to, type, title, className, onClick, children}) => {
    if (to) return (
        <Link to={to} onClick={onClick}>
            <button type={type} className={className} title={title}>
                {children}
            </button>
        </Link>
    )
    return (
        <button type={type} className={className} onClick={onClick} title={title}>
            {children}
        </button>
    )
}

export default Button