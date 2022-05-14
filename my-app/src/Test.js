import React, { Component } from 'react'

class Test extends Component {

    componentWillUnmount() {
        console.log("This data deleted");
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

export default Test