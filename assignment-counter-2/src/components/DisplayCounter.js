import { connect } from 'react-redux'

function DisplayCounter(props) {
    return (
        <div>
            <h1>Display Counter</h1>
            <h2>Counter: {props.counter}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)