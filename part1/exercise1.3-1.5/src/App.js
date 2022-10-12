const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log('parts: ', props.part)
  return (
    <div>
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}
export default App