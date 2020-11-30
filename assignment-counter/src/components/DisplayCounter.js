import React from 'react'
import { connect } from 'react-redux'

function DisplayCounter(props) {

    return (
        <div>
            <h1>DISPLAY COUNTER</h1>
            <h1>{props.cntr}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cntr: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)