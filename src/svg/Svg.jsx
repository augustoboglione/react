import {useId} from 'react'

const Svg = ({id, viewBox, d, gradient, gradientId, gradientLink, red, fill}) => {
    const newGradient = useId()

    return (
        <svg id={id} viewBox={viewBox ?? '-100 -100 200 200'}>
            {(gradient || gradientId || red) &&
                <defs>
                    <linearGradient id={`gradient-${gradient || red ? newGradient : gradientId}`}
                        className={red ? 'red-gradient' : null}
                    >
                        <stop offset='0%' stopColor='black'/>
                        <stop offset='100%' stopColor='black'/>
                    </linearGradient>
                </defs>
            }
            <path className={`${gradient || red || gradientId || gradientLink ? 'gradient-path' : ''} 
                ${fill ? 'fill-path' : ''}`}
                stroke={!fill && (gradient || red || gradientId || gradientLink)
                    ? `url('#gradient-${((gradient || red) && newGradient) || gradientId || gradientLink}')`
                    : null
                }
                fill={fill && (gradient || red || gradientId || gradientLink)
                    ? `url('#gradient-${((gradient || red) && newGradient) || gradientId || gradientLink}')`
                    : null
                }
                d={d}
            />
        </svg>
    )
}

export default Svg