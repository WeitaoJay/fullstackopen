import { useState } from "react"

// const Statistics = (props) => {
//   if (props.feedback.good === 0 && props.feedback.neutral === 0 && props.feedback.bad === 0){
//     return (
//       <div>
//         <p>No Feedback Given</p>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <p>good {props.feedback.good}</p>
//       <p>neutral {props.feedback.neutral}</p>
//       <p>bad {props.feedback.bad}</p>
//       <p>all {props.feedback.good + props.feedback.neutral + props.feedback.bad}</p>
//       <p>average {(props.feedback.good - props.feedback.bad)/(props.feedback.good + props.feedback.bad + props.feedback.neutral)}</p>
//       <p>positive {props.feedback.good/(props.feedback.good + props.feedback.bad + props.feedback.neutral)*100} %</p>
//     </div>
//   )
// }

// const StatisticsLine = (props) => (
//   <div>
//     <p>{props.text} {props.value}</p>
//   </div>
// )

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//     // save clicks of each button to its own state
//     // const [good, setGood] = useState(0)
//     // const [neutral, setNeutral] = useState(0)
//     // const [bad, setBad] = useState(0)

//     const [feedback, setFeedback] = useState({
//       good: 0, neutral: 0, bad: 0
//     })

//     const handleGoodClick = () => {
//       setFeedback({
//         ...feedback, good: feedback.good+1
//       })
//     }

//     const handleNeutralClick = () => {
//       setFeedback({
//         ...feedback, neutral: feedback.neutral+1
//       })
//     }

//     const handleBadClick = () => {
//       setFeedback({
//         ...feedback, bad: feedback.bad+1
//       })
//     }
//     return (
//       <div>
//         <h1>give feedback</h1>
//         <Button handleClick={handleGoodClick} text='good' />
//         <Button handleClick={handleNeutralClick} text='neutral' />
//         <Button handleClick={handleBadClick} text='bad' />
//         <h1>statistics</h1>
//         {/* <Statistics feedback={feedback} /> */}
//         <StatisticsLine text={'good'} value={feedback.good} />
//         <StatisticsLine text={'neutral'} value={feedback.neutral} />
//         <StatisticsLine text={'bad'} value={feedback.bad} />
//         <StatisticsLine text={'all'} value={feedback.good + feedback.bad + feedback.neutral} />
//         <StatisticsLine text={'average'} value={(feedback.good + feedback.bad + feedback.neutral)===0 ? 0 : (feedback.good - feedback.bad)/(feedback.good + feedback.bad + feedback.neutral)*100} />
//         <StatisticsLine text={'positive'} value={(feedback.good + feedback.bad + feedback.neutral)===0 ? 0:feedback.good/(feedback.good + feedback.bad + feedback.neutral)*100} />
//       </div>
//     )
// }

const Button = ({ eventHandler, text }) => (
  <button onClick={eventHandler}>
    {text}
  </button>
)

const Display = ({vote, anecdotes}) => {
  console.log('vote: ', vote)
  console.log('max vote: ', vote.indexOf(Math.max(...vote)))
  const total = vote.reduce((a, b) => a + b, 0)
  if (total === 0){
    return (
      <div>
        <p>{anecdotes[0]}</p>
        <p>has 0 votes</p>
      </div>
    )
  }
  return (
    <div>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
      <p>has {Math.max(...vote)} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button text="vote" eventHandler={()=>{
        const copy = [...vote]
        copy[selected] += 1
        setVote(copy)
      }} />
      <Button text="next anecdotes" eventHandler={()=>setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <h1>Anecdotes with most votes</h1>
      <Display vote={vote} anecdotes={anecdotes} />
    </div>
  )
}


export default App;
