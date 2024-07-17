import {ThemeProvider} from './context/ThemeContext.jsx'
import {AlertProvider} from './context/AlertContext.jsx'
import {CartProvider} from './context/CartContext.jsx'
import Body from './Body.jsx'
import Overscroll from './components/Overscroll.jsx'
import './styles.css'
import TickSvg from './svg/TickSvg.jsx'
import tick from '/assets/tick.svg'

const App = () => (
    <ThemeProvider>
        <AlertProvider>
            <CartProvider>
                <Body/>
                <TickSvg/>
                <img src={tick} style={{width: 40}}/>
            </CartProvider>
        </AlertProvider>
        <Overscroll/>
    </ThemeProvider>
)

export default App