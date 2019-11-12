import React, { Component } from 'react';
import api from './api'

class outcome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    check = () => {
        if (this.props.score >= 100)
            this.props.handleAlert('太神拉!好會~')
        else if (this.props.score >= 80)
            this.props.handleAlert('很瞭麻，不錯喔')
        else if (this.props.score >= 60)
            this.props.handleAlert('有懂有懂')
        else
            this.props.handleAlert('太菜了')

    }

    render() {

        return (
            <div id='wholeOutcome' className="flex container2">
                {this.check()}
                <div algin="center">
                    {this.props.name}的分數: {this.props.score}
                </div>
                {this.props.list.map((item) =>
                    <div>
                        {item.name}的分數:{item.score}
                    </div>)}
            </div>
        );
    }
}

export default outcome;