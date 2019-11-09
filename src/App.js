import React, { Component } from 'react';
import './App.css';
import InputComponet from './component/input'
import OptionComponet from './component/option'
import OutcomeComponent from './component/outcome'
import './component/api.js'






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      content: {
        title: '吳彥祖的口頭禪',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      }
    }
    this.name = "";
    this.score = 0;
    this.content = [
      {
        title: '2222222',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '33333',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '4444',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '555',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '6666',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '7777',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '8888',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '99999',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      },
      {
        title: '10000',
        ans: "2",
        option: ["一秒幾十萬上下", "BANG", "所以呢?", "太ㄈㄌ", "不可能"]
      }
    ]
  }



  removeElement = (elementId) => {
    document.getElementById(elementId).remove();
  }

  inputName = (value) => {
    this.name = value;
    console.log(this.name)
    this.setState({ number: this.state.number + 1 })
  }

  nextQuestion = () => {
    this.setState({
      content: this.content[this.state.number - 1],
      number: this.state.number + 1
    })
  }

  addScore = () => {
    this.score += 10;
  }

  check = () => {
    if (this.state.number > 1) {
      return < OutcomeComponent score={this.score} name={this.name} />
    } else if (this.state.number != 0) {
      return <OptionComponet number={this.state.number} content={this.state.content} nextQuestion={this.nextQuestion} addScore={this.addScore} />
    }
  }

  render() {
    return (
      <div id='contrainer' className='container'>
        <div id='header' className="flex header">
          吳彥祖的Test
      </div>
        < InputComponet removeElement={this.removeElement} inputName={this.inputName} />
        {this.check()}
      </div>
    );
  }
}

export default App;
