import { useEffect, useState } from "react";
import Card from "../card/card";
import Credit from "../credit/credit";
import Swal from "sweetalert2";



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
    
    

    console.log(remainingHr);
    // function for adding courses to the cart container
    
    const handleCourse = course=> {
        const isTaken = takenCourse.find(i => i.id == course.id);
        let initial = course.price;
        let initialHour = course.credit_hr;
        

        
        if (isTaken) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have already taken this course!',
                footer: '<a href="">Please choose others</a>'
            })
            
           
        }
        else {
            takenCourse.forEach((item) => {
            initial = initial + item.price; 
            initialHour = initialHour + item.credit_hr;
        })
        const newTakenCourse = [...takenCourse, course];
        setTakenCourse(newTakenCourse);

            const newRemaininghour = 20 - initialHour;
            if (newRemaininghour < 0 || initialHour>20 ) {
                return Swal.fire({
                    title: 'Your limited Credit Hour amount has finished',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
    rgba(0,0,123,0.4)
    url("https://i.ibb.co/y42Jqrx/nyancat-rainbow-cat.gif")
    left top
    no-repeat
  `
                })
            } else {
            setTakenCoursePrice(initial);
            settotalCreditHr(initialHour);
            setRemainingHr(newRemaininghour);
            }
           
        }
        
    }

    return (
        <div className="container mx-auto">
           
            <main className="flex flex-col lg:flex-row justify-between items-start gap-4">

                {/* card container  */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lg:w-2/3">
                    {
                        courses.map((course, idx) =>
                            <Card key={idx} prop={course}
                            handleCourse={handleCourse}
                            

                        ></Card>)
                    }
                </div>

                {/* credit container  */}
                <div className="w-full lg:w-1/3">
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