import React, { useState } from 'react'

const Header = ({title}) => {
  console.log("title: ", title)
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Statistics = (props) => {
  console.log("stats: ", props)
  return (
    <div>
      {props.name} {props.amount}
    </div>
  )
}

const History = (props) => {
  console.log("History props:", props)
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
      <tr><td><Statistics name={props.goodName} amount={props.good}/></td></tr>
      <tr><td><Statistics name={props.neutralName} amount={props.neutral}/></td></tr>
      <tr><td><Statistics name={props.badName} amount={props.bad}/></td></tr>
      <tr><td><Statistics name={props.totalName} amount={props.total}/></td></tr>
      <tr><td><Statistics name={props.averageName} amount={props.average / props.total}/></td></tr>
      <tr><td><Statistics name={props.positiveName} amount={props.good / props.total}/></td></tr>
      </table>
    </div>
  )
}

const App = () => {
  
  const nameTitle = "give feedback"
  const nameTitle2 = "statistics"
  const goodName = "good"
  const neutralName = "neutral"
  const badName = "bad"
  const totalName = "all"
  const averageName = "average"
  const positiveName= "positive"
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat("G"))
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat("N"))
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage(average + 0)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat("B"))
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <Header title={nameTitle}/>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Header title={nameTitle2}/>
      <History allClicks={allClicks} 
      goodName={goodName} good={good} 
      neutralName={neutralName} neutral = {neutral} 
      badName = {badName} bad = {bad}
      totalName = {totalName} total = {total}
      averageName = {averageName} average = {average}
      positiveName = {positiveName}/>

    </div>
  )
}

export default App