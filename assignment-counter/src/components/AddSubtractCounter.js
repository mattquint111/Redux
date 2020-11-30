import React, { useState } from 'react'
import { connect } from 'react-redux'

function AddSubtractCounter(props) {

    const [numberInput, setNumberInput] = useState(0)

    const handleNumberInputChange = (e) => {
        let inputValue = parseInt(e.target.value)
        setNumberInput(inputValue)
    }

    return (
        <div>
            <h1>Add/Subtract Counter</h1>
            <h1>{props.count}</h1>
            <input type="text" onChange={handleNumberInputChange}></input>
            <button onClick={() => props.onAdd(numberInput)}>ADD</button>
            <button onClick={() => props.onSubtract(numberInput)}>SUBTRACT</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (number) => dispatch({type: "ADD", value: number}),
        onSubtract: (number) => dispatch({type: "SUBTRACT", value: number})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubtractCounter)