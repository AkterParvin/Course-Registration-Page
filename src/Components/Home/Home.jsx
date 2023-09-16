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
    // state for total credit hours 
    const [totalCreditHr, settotalCreditHr] = useState(0);

    // state for total remaining credit hours 
    const [remainingHr, setRemainingHr] = useState(0);

    useEffect(() => {
        fetch('courseData.json')
        .then(res=>res.json())
        .then(data => setCourses(data))
    }, [])
    
    // console.log(takenCoursePrice);
    // console.log(totalCreditHr);

    console.log(remainingHr);
    // function for adding courses to the cart container
    
    const handleCourse = course=> {
        const isTaken = takenCourse.find(i => i.id == course.id);
        let initial = course.price;
        let initialHour = course.credit_hr;
        // console.log(initialHour);
        // console.log(initial);

        
        if (isTaken) {
            return alert('This course is already taken');
        }
        else {
            takenCourse.forEach((item) => {
            initial = initial + item.price; 
            initialHour = initialHour + item.credit_hr;
        })
        setTakenCoursePrice(initial);
        
        const newTakenCourse = [...takenCourse, course];
        setTakenCourse(newTakenCourse);

            const newRemaininghour = 20 - initialHour;
            if (newRemaininghour < 0 || initialHour>20 ) {
                return alert('you have excceded the total credit hour')
            } else {
            settotalCreditHr(initialHour);
            setRemainingHr(newRemaininghour);
            }
           
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
                        totalCreditHr={totalCreditHr}
                        remainingHr={remainingHr}
                    
                    ></Credit>


                </div>

               
                
            </main>
        </div>
    );
};

export default Home;