import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ courses }) => {
    //console.log("courses:", courses)
    return (
        <div>
            {courses.map((course) => {
                //console.log("Course: ", course)
                //console.log('Course parts: ', course.parts);
                return (
                    <div key = {course.id}>
                    <Header header={course.name}/>
                    <Content parts={course.parts}/>
                    <Total parts={course.parts}/>
                    </div>
                    )
            }
            )}
        </div>
    )
}

export default Course