import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Average = (props) => {
    return (
      <div>
      average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
      </div>
    )
  }

  const Positive = (props) => {
    return (
      <div>
      positive {(props.good / (props.good + props.neutral + props.bad) * 100)} %
      </div>
    )
  }

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  const DisplayGood = ({ good }) => <div>good {good}</div>
  const DisplayNeutral = ({ neutral }) => <div>neutral {neutral}</div>
  const DisplayBad = ({ bad }) => <div>bad {bad}</div>

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (

    <div>
      <h2>give feedback</h2>
      <Button onClick={increaseGood} text='good'/>
      <Button onClick={increaseNeutral} text='neutral'/>
      <Button onClick={increaseBad} text='bad'/>
      <h2>statistics</h2>
      <DisplayGood good={good}/>
      <DisplayNeutral neutral={neutral}/>
      <DisplayBad bad={bad}/>
      all {good + neutral + bad}
      <Average good={good} neutral={neutral} bad={bad}/>
      <Positive good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App