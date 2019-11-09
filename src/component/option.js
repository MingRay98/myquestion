import React, { Component } from 'react';

class option extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.bingo = ""
    }

    _handleOnClick = () => {
        document.getElementById('submit').style.display = "none";
        const submitValue = document.querySelector('input[name=question]:checked').value
        if (submitValue == this.props.content.ans) {
            this.props.addScore();
            console.log(this.bingo = true)
        }
        document.getElementById("next").style.display = 'block';
        document.querySelectorAll('input[name=question]').forEach((item) => {
            if (item.value === this.props.content.ans)
                if (this.bingo === true)
                    document.getElementById(item.value).style.backgroundColor = 'green';
                else
                    document.getElementById(item.value).style.backgroundColor = 'red';
        })
    }

    componentWillUpdate() {
        this._init()
    }

    _init = () => {
        if (this.props.number < 10) {
            document.getElementById('submit').style.display = "";
            document.querySelector('input[name=question]:checked').checked = false;
            document.querySelectorAll('div').forEach((item) => {
                item.style.backgroundColor = "transparent"
            })
            document.getElementById("next").style.display = 'none';
        }
    }


    render() {
        return (
            <div id='wholeOption' className="flex container2">
                <form target="iframe" onSubmit={this._handleOnClick}>
                    <p className='text'>第{this.props.number}題 {this.props.content.title}<br /><br />
                        {this.props.content.option.map((item, key) =>
                            <div id={key + 1} style={{ width: "fit-content" }}>
                                <input type="radio" name="question" value={key + 1} required />{item}
                            </div>
                        )}
                    </p>
                    <br /><br /><button className='btn' id='submit'>送出</button>
                </form>
                <button className='btn' id='next' style={{ display: 'none' }} onClick={this.props.nextQuestion}>下一題</button>
                <iframe id="iframe" name="iframe" style={{ display: "none" }}></iframe>
            </div>

        );
    }
}

export default option;