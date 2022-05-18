import React from "react";

const Total = ({ parts }) => {

    //var exercise = parts.map(part => part.exercises)
    //const reducer = (previousValue, currentValue) => previousValue + currentValue
    //console.log('Total reduce: ', exercise.reduce(reducer))

    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    console.log('total: ', total);

    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

export default Total