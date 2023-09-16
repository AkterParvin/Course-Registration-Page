import { useEffect, useState } from "react";

import Card from "../card/card";
import Credit from "../credit/credit";



const Home = () => {
    const[courses,setCourses]=useState([])

    useEffect(() => {
        fetch('courseData.json')
        .then(res=>res.json())
        .then(data => setCourses(data))
    },[])

    // function for adding courses to the cart container
    const[takenCourse,setTakenCourse]=useState([])

    const handleCourse = course=> {
        const newTakenCourse = [...takenCourse, course];
        setTakenCourse(newTakenCourse);

    }

    function to add time


    // console.log(courses);
    return (
        <div >
           
            <main className="flex flex-col md:flex-row justify-between items-start gap-4">

                {/* card container  */}
                <div className="grid lg:grid-cols-3 gap-3 w-2/3">
                    {
                        courses.map((course, idx) =>
                            <Card key={idx} prop={course}
                            handleCourse={handleCourse}

                        ></Card>)
                    }
                </div>

                {/* credit container  */}
                <div className="w-1/3">
                    <Credit takenCourse={takenCourse}></Credit>
                </div>

               
                
            </main>
        </div>
    );
};

export default Home;