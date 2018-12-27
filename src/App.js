import React, { Component } from 'react'
import * as echarts from 'echarts'
import * as Date from './MyDate'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    const option = this.getOption(Date.date1)
    myChart.setOption(option)
    this.setState({ myChart })

  }

  getOption = (date) => {
    return {
      xAxis: {
        type: 'category',
        data: date.map(item => item.month)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: date.map(item => item.date),
        type: 'line'
      }],
      textStyle: {
        color: '#fff'
      },
      tooltip: {
        trigger: 'axis'
      }
    }
  }

  dateChange = (e) => {
    const { myChart } = this.state
    const option = this.getOption(Date[e.target.value])
    myChart.setOption(option)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Circle period </p>
          <select defaultValue="date1" onChange={this.dateChange}>
            <option value="date1">2013-2015</option>
            <option value="date2">2016-2017</option>
            <option value="date3">2018-</option>
          </select>
          <div id="main" style={{ width: '100%', height: 400,  }}></div>
        </header>
      </div>
    )
  }
}

export default App
