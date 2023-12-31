import { FaDollarSign, FaBook } from "react-icons/fa";
import PropTypes from 'prop-types';

const Card = ({ prop, handleCourse }) => {
    const { cover, name, detail, price, credit_hr } = prop;
    return (
        <div className="container mx-auto">
            <div className=" p-5 rounded-xl bg-base-100 shadow-lg shadow-red-700/50 lg:w-[260px] lg:h-[460px] bg-stone-100">
                <img src={cover} alt="Shoes" className="rounded-lg  lg:w-[230px] " />

                <div className="flex flex-col space-y-4  ">
                    <h2 className="mt-4 text-left text-sm font-semibold text-[#1C1B1B]">{name}</h2>
                    <p className="text-left font-normal text-xs text-[#1c1b1b99]">{detail}</p>

                    <div className="flex justify-around items-center text-xs font-medium text-[#1c1b1b99] gap-2">
                        <span className="flex items-center justify-start ">
                            <FaDollarSign></FaDollarSign>
                            <p>Price: {price }</p>
                        </span>
                        <span className=" flex items-center justify-start">
                            <FaBook></FaBook>
                            <p>Credit: {credit_hr}hr</p>
                        </span>
                    </div>
                    <button onClick={() => handleCourse(prop)}
                    
                        className="font-semibold text-white text-sm px-18 py-2 rounded-lg btn">Select</button>

                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    prop:PropTypes.object.isRequired, 
    handleCourse:PropTypes.func.isRequired
}
export default Card;