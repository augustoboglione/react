import {ThemeProvider} from './context/ThemeContext.jsx'
import {AlertProvider} from './context/AlertContext.jsx'
import {CartProvider} from './context/CartContext.jsx'
import Body from './Body.jsx'
import Overscroll from './components/Overscroll.jsx'
import './styles.css'

const App = () => (
    <ThemeProvider>
        <AlertProvider>
            <CartProvider>
                <Body/>
            </CartProvider>
        </AlertProvider>
        <Overscroll/>
    </ThemeProvider>
)

export default App