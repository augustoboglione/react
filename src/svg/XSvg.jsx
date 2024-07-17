import Svg from './Svg.jsx'

const XSvg = ({gradient}) => (
    <Svg d='M -70 -70
            L 70 70
            M -70 70
            L 70 -70'
        gradient={gradient}
    />
)

export default XSvg