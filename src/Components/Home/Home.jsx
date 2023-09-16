import { useEffect, useState } from "react";

import Card from "../card/card";
import Credit from "../credit/credit";



const Home = () => {
    // state declared for course data fetch 
    const [courses, setCourses] = useState([]);
    // state for showing course names 
    const [takenCourse, setTakenCourse] = useState([]);
    // state for total taken course price 
    const [takenCoursePrice, setTakenCoursePrice] = useState(0);
    // state for remaining credit hours 

    console.log(takenCoursePrice);

    useEffect(() => {
        fetch('courseData.json')
        .then(res=>res.json())
        .then(data => setCourses(data))
    },[])

    console.log(takenCourse);
    // function for adding courses to the cart container
    

    const handleCourse = course=> {
        const isTaken = takenCourse.find(i => i.id == course.id);
        let initial = course.price;
        // console.log(initial);
        if (isTaken) {
            return alert('This course is already taken');
        } else {
            takenCourse.forEach((item) => {
            initial = initial + item.price; 
        })
            // const remaininghour = 20000 - initial;

            setTakenCoursePrice(initial);


            const newTakenCourse = [...takenCourse, course];
            setTakenCourse(newTakenCourse);
        }
        
   

    }

    // function to add time


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
                    <Credit takenCourse={takenCourse}
                        takenCoursePrice={takenCoursePrice}
                    
                    ></Credit>


                </div>

               
                
            </main>
        </div>
    );
};

export default Home;