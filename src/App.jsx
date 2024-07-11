import {CartProvider} from './context/CartContext.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'
import {AlertProvider} from './context/AlertContext.jsx'
import Body from './components/Body.jsx'
import './styles.css'

const App = () => (
    <ThemeProvider>
        <AlertProvider>
            <CartProvider>
                <Body/>
            </CartProvider>
        </AlertProvider>
    </ThemeProvider>
)

export default App