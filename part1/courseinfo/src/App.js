import React from 'react'

const Header = (props) => {
  //console.log(props.nameTitle)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props)
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
      </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.total}</p>
    </div>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
      <p>{props.part} {props.exercises}</p>
  )
}

const App = () => {

  const course = {
    nameTitle: 'Half Stack application development',
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

  console.log(course.nameTitle)

  return (
    <div>
      <Header course={course.nameTitle}/>
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
      <Content part1={course.parts[1].name} exercises1={course.parts[1].exercises}/>
      <Content part1={course.parts[2].name} exercises1={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>

    </div>
  )
}

export default App