import {Link} from 'react-router-dom'

const Button = ({to, type, className, onClick, children}) => {
    if (to) return (
        <div>
            <Link to={to}>
                <button className={`shadowed ${className ?? 'text-button'}`} type={type ?? 'button'}>{children}</button>
            </Link>
        </div>
    )

    return (
        <div>
            <button className={`shadowed ${className ?? 'text-button'}`} type={type ?? 'button'} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button