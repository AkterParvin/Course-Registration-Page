import { FaDollarSign,FaBook } from "react-icons/fa";


const Home = () => {
    return (
        <div className="container mx-auto">
            <header>
                <h1 className='text-4xl text-black font-bold  text-center my-10'>Course Registration</h1>
            </header>
            <main className="flex justify-between gap-4">
                {/* card container  */}
                <div className="grid lg:grid-cols-3 gap-4 w-2/3">

                    <div className="card  bg-base-100 shadow-xl">
                        <img src="https://i.ibb.co/VNgPctz/programming.jpg" alt="Shoes" className="rounded-lg" />

                        <div className="flex flex-col space-y-4  ">
                            <h2 className="mt-4 text-left text-sm font-semibold text-[#1C1B1B]">Shoes!</h2>
                            <p className="text-left font-normal text-xs text-[#1c1b1b99]">If a dog chews shoes whose shoes does he choose?</p>

                            <div className="flex justify-around items-center text-xs font-medium text-[#1c1b1b99]">
                                <span className="flex items-center justify-start gap-2">
                                    <FaDollarSign></FaDollarSign>
                                    <p>Price:</p>
                                </span>
                                <span className=" gap-2 flex items-center justify-start">
                                    <FaBook></FaBook>
                                    <p>Credit:</p>
                                </span>
                            </div>
                            <button className="font-semibold text-white text-sm  bg-sky-600 px-18 py-2 rounded-lg">Select</button>

                        </div>
                    </div>

                    
                    

                </div>
                <div className="w-1/3">

                    <div className="card  bg-base-100 shadow-xl ">
                        <div className="bg-slate-300 rounded-lg mb-2">
                            <h1 className="my-4 text-sm font-bold text-sky-600">Credit Hour Remaining :{ } hr</h1>
                            
                       </div>
                        <hr />

                        <div className="flex flex-col ">
                            <div>
                                <h2 className="my-4 text-left  font-bold text-xl text-[#1C1B1B]">Shoes!</h2>
                                
                                <p className="text-left font-normal text-xs text-[#1c1b1b99] mb-4">If a dog chews shoes whose shoes does he choose?</p>
                                <hr />
                                <p className=" text-left font-medium text-xs text-[#1c1b1b99] my-4" >Total Credit Hour :{} hr </p>
                                <hr />
                                <p className=" text-left font-semibold text-xs text-[#1c1b1b99] my-4">
                                    Total Price :{} USD
                                </p>

                           </div>
                           
                        </div>
                    </div>

                </div>

               
                
            </main>
        </div>
    );
};

export default Home;