import Svg from './Svg.jsx'

const MinusSvg = ({gradient, red}) => (
    <Svg d='M -70 0
            L 70 0.000001'
        gradient={gradient} red={red}
    />
)

export default MinusSvg