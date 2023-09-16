import PropTypes from 'prop-types';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Credit = ({ takenCourse, takenCoursePrice, totalCreditHr, remainingHr }) => {
    
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <div className="bg-slate-300 rounded-lg mb-2">
                    <h1 className="my-4 text-base font-bold text-sky-600">Credit Hour Remaining : {remainingHr} hr</h1>

                </div>
                <hr />

                <div className="flex flex-col ">
                    <div>
                        <h2 className="my-4 text-left  font-bold text-xl text-[#1C1B1B]">Course Name</h2>
                        <h2 className="mb-4 text-left  font-bold text-sm text-green-700">Total Course Taken: {takenCourse.length }</h2>

                        <p className="text-left font-normal text-xs text-[#1c1b1b99] mb-4">
                            {
                                takenCourse.map((ncourse,idx) =>
                                    <li key={idx}>{ncourse.name}</li>
                                    )
                           }
                         
                        </p>
                        <hr />
                        <p className=" text-left font-medium text-xs text-[#1c1b1b99] my-4" >Total Credit Hour : {totalCreditHr}hr </p>
                        <hr />
                        <p className=" text-left font-semibold text-xs text-[#1c1b1b99] my-4">
                        Total Price : {takenCoursePrice} USD
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};
{/* <ToastContainer /> */}
Credit.propTypes = {
    takenCourse: PropTypes.array.isRequired,
    takenCoursePrice:PropTypes.number,
    totalCreditHr:PropTypes.number,
    remainingHr: PropTypes.number,

}
export default Credit;