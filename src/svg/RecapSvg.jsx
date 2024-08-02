import Svg from './Svg.jsx'

const RecapSvg = () => (
    <Svg d='M -40 -70
            H 40
            A 30 30 0 0 1 70 -40
            V 40
            A 30 30 0 0 1 40 70
            H -40
            A 30 30 0 0 1 -70 40
            V -40
            A 30 30 0 0 1 -40 -70
            M -40 -25
            H 40
            M -40 25
            H 40'
        gradient
    />
)

export default RecapSvg

// M -70 -60
//             H -70
//             M -40 -60
//             H 70
//             M -70 0
//             H -70
//             M -40 0
//             H 70
//             M -70 60
//             H -70
//             M -40 60
//             H 70