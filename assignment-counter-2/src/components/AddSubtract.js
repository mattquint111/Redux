import React, {useState} from 'react'
import {connect} from 'react-redux'

function AddSubtract(props) {

    const [inputNumber, setInputNumber] = useState(0)

    const handleInputChange = e => {
        let input = parseInt(e.target.value)
        setInputNumber(input)
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange}></input>
            <br />
            <button onClick={() => props.onAdd(inputNumber)}>ADD</button>
            <button onClick={() => props.onSubtract(inputNumber)}>SUBTRACT</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (number) => dispatch({type: "ADD", payload: number}),
        onSubtract: number => dispatch({type: "SUBTRACT", payload: number})
    }
}

export default connect(null,mapDispatchToProps)(AddSubtract)