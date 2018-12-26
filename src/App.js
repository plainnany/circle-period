import React, { Component } from 'react'
import * as echarts from 'echarts'
import * as Date from './MyDate'
import './App.css'

class App extends Component {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    const myDate = Date.myDate
    const option = {
      xAxis: {
        type: 'category',
        data: myDate.map(item => item.month)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: myDate.map(item => item.date),
        type: 'line'
      }],
      textStyle: {
        color: '#fff'
      },
      tooltip: {
        trigger: 'axis'
      },
    }
    myChart.setOption(option)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Circle period </p>
          <p>2013-2015</p>
          <div id="main" style={{ width: '100%', height: 400 }}></div>
        </header>
      </div>
    )
  }
}

export default App
