import React, { Component } from 'react';
import './App.css';
import InputComponet from './component/input'
import OptionComponet from './component/option'
import OutcomeComponent from './component/outcome'
import api from './component/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      content: {
        title: '吳彥祖比較愛模仿哪個Youtuber',
        ans: "2",
        option: ["古娃娃古", "BANG結石", "魔鞋啾啾", "阿滴", "米沙","孫安卓"]
      }
    }
    this.name = "";
    this.score = 0;
    this.content = [
      {
        title: '韓國瑜為什麼喜歡吃科學麵',
        ans: "3",
        option: ["因為很便宜", "因為很好吃", "因為有含粉", "因為裡面有暗黑版陳菊", "因為吃了可以發大財"]
      },
      {
        title: '吳彥祖平常上班都怎麼當薪水小倫',
        ans: "1",
        option: ["上班偷大BANG", "偷滑手機", "偷打LOL", "看油土伯", "怎麼可能會當薪水小倫"]
      },
      {
        title: '吳彥祖大一的體重是?',
        ans: "7",
        option: ["超過100", "95", "90", "85", "80","75",'70']
      },
      {
        title: "吳彥祖前身是誰",
        ans: "3",
        option: ["九孔",'韓國瑜', "黃曉明", "黃登輝", "黃子蕉",'黃大謙','孔鏘']
      },
      {
        title: '吳彥祖是資深什麼粉',
        ans: "5",
        option: ["含粉", "菸粉", "柯糞", "動粉", "統粉"]
      },
      {
        title: '吳彥祖會看下列哪個油土伯',
        ans: "5",
        option: ["重量級", "米砂", "孫安佐", "蔡哥", "那個抄襲女生kiki"]
      },
      {
        title: '吳彥祖手搖杯都點什麼',
        ans: "2",
        option: ["波多椰", "紅茶拿鐵加波霸", "波霸紅", "早餐點奶茶", "大杯咒"]
      },
      {
        title: '問答最大秘密時什麼',
        ans: "5",
        option: ["拉進來，打出去", "跟神明說不會再選市長", "超買不是走私", "兩岸一家親", "答錯的扣分，答對的加分"]
      },
      {
        title: '吳彥祖會想看下列哪一部電影',
        ans: "5",
        option: ["大尾盧曼2", "刺0", "雞排英雄", "環大西洋", "鬼陰驚(2013年真的有上映)"]
      }
    ]

  }

  removeElement = (elementId) => {
    document.getElementById(elementId).remove();
  }

  inputName = (value) => {
    this.name = value;
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
    if (this.state.number > 10) {
      api.saveData(this.name, this.score);
      return < OutcomeComponent score={this.score} name={this.name} list={this.props.list} handleAlert={this.handleAlert} />
    } else if (this.state.number != 0) {
      return <OptionComponet number={this.state.number} content={this.state.content} nextQuestion={this.nextQuestion} addScore={this.addScore}  />
    }
  }

  handleAlert = (message) => {
    let warn = document.getElementById('alert1');
    warn.className = warn.className + ' active';
    warn.innerHTML = message;
    setTimeout(() => {
      warn.className = 'alert1';
    }, 3500);
  }

  render() {
    return (
      <div id='contrainer' className='container'>
        <span id='alert1' className='alert1' />
        <div id='header' className="flex header">
          <button className='Headerbtn' onClick={()=>this.handleAlert('我是菜單')}>☰</button>
          <p>你跟吳彥祖的麻吉度</p>
          <button className='Headerbtn' onClick={()=>this.handleAlert('只能正體中文')}>🌐</button>
        </div>
        < InputComponet removeElement={this.removeElement} inputName={this.inputName} />
        {this.check()}        
      </div>
    );
  }
}

export default App;
