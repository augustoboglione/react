import Button from "./Button"

const Welcome = ({onClick}) => (
    <div className='welcome'>
        <h1>Welcome!</h1>
        <Button onClick={onClick}>Start buying</Button>
    </div>
)

export default Welcome