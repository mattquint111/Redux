import { connect } from 'react-redux'

function IncrementDecrement(props) {
    return (
        <div>
            <button onClick={() => props.onIncrement()}>Increment</button>
            <button onClick={() => props.onDecrement()}>Decrement</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: "INCREMENT"}),
        onDecrement: () => dispatch({type: "DECREMENT"})
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrement)