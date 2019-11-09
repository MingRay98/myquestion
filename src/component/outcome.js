import React, { Component } from 'react';

class outcome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id='wholeOutcome' className="flex container2">
                <div algin="center">
                    {this.props.name}的分數: {this.props.score}
                </div>
            </div>
        );
    }
}

export default outcome;