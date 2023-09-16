import PropTypes from 'prop-types';

const Credit = ({ takenCourse }) => {
    console.log(takenCourse);
    // const { name } = takenCourse;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <div className="bg-slate-300 rounded-lg mb-2">
                    <h1 className="my-4 text-sm font-bold text-sky-600">Credit Hour Remaining :{} hr</h1>

                </div>
                <hr />

                <div className="flex flex-col ">
                    <div>
                        <h2 className="my-4 text-left  font-bold text-xl text-[#1C1B1B]">Course Name</h2>

                        <p className="text-left font-normal text-xs text-[#1c1b1b99] mb-4">
                            {
                                takenCourse.map((ncourse,idx) =>
                                    <li key={idx}>{ncourse.name}</li>
                                    )
                           }
                         
                        </p>
                        <hr />
                        <p className=" text-left font-medium text-xs text-[#1c1b1b99] my-4" >Total Credit Hour :{ } hr </p>
                        <hr />
                        <p className=" text-left font-semibold text-xs text-[#1c1b1b99] my-4">
                            Total Price :{ } USD
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};
Credit.propTypes = {
    takenCourse: PropTypes.array.isRequired

}
export default Credit;