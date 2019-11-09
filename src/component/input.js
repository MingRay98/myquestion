import React, { Component } from 'react';

class input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _handeronSubmit = () => {
        this.props.removeElement('wholeInput')
        this.props.inputName(this.inputtext.value)
    }

    render() {
        return (
            <div id='wholeInput' className="flex container2">
                <form target="iframe" id='inputform' onSubmit={this._handeronSubmit} >
                    <input  className='input' placeholder="輸入你的名字" type="text" required ref={(text) => { this.inputtext = text }}></input><br /><br />
                    <button  className='btn' >提交</button>
                </form>
                <iframe id="iframe" name="iframe" style={{display:"none"}}></iframe>
            </div>
        );
    }
}

export default input;