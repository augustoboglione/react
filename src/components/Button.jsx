import {Link} from 'react-router-dom'

const Button = ({children, className, imgButton, to, type, onClick}) => {
    if (to) return (
        <div>
            <Link to={to}>
                <button className={`shadowed ${imgButton ? 'img-button' : 'text-button gradient-text'} ${className ?? ''}`}
                    type={type ?? 'button'}
                >
                    {children}
                </button>
            </Link>
        </div>
    )

    return (
        <div>
            <button className={`shadowed ${imgButton ? 'img-button' : 'text-button gradient-text'} ${className ?? ''}`}
                type={type ?? 'button'} onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default Button