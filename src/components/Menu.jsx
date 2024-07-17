import MenuEntry from './MenuEntry.jsx'

const Menu = ({onClick}) => {
    return (
        <ul>
            <MenuEntry to='/category/mac' onClick={onClick}>Mac</MenuEntry>
            <MenuEntry to='/category/ipad' onClick={onClick}>iPad</MenuEntry>
            <MenuEntry to='/category/iphone' onClick={onClick}>iPhone</MenuEntry>
            <MenuEntry to='/category/watch' onClick={onClick}>Watch</MenuEntry>
            <MenuEntry to='/category/vision' onClick={onClick}>Vision</MenuEntry>
            <MenuEntry to='/category/airpods' onClick={onClick}>Airpods</MenuEntry>
            <MenuEntry to='/category/tvhome' onClick={onClick}>TV & Home</MenuEntry>
        </ul>
    )
}

export default Menu