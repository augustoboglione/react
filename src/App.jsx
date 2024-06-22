import {CartProvider} from './context/CartContext.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'
import {AlertProvider} from './context/AlertContext.jsx'
import Body from './components/Body.jsx'
import './styles.css'

const App = () => (
    <ThemeProvider>
        <CartProvider>
            <AlertProvider>
                <Body/>
            </AlertProvider>
        </CartProvider>
    </ThemeProvider>
)

export default App