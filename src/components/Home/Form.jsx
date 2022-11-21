const Form = () => {
    return (
        <div className="w-full bg-pink-NL rounded-2.2xl smallest:rounded-2.5xl md:rounded-3.5xl xl:rounded-5xl px-7 smallest:px-12 sm:px-14 md:px-20 lg:px-24 xl:px-[134px]">
            <div className="h-full relative grid mx-auto container justify-items-center content-center 2xl:px-auto pb-20 md:pb-22 xl:pb-28 2xl:pb-36">
                <h1 className="font-poppinsBold text-black-NL text-center text-[25px] sm:text-[28px] md:text-[30px] lg:text-[32px] pt-[60px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] pb-[50px] sm:pb-[60px] md:pb-[70px] xl:pb-[70px] 2xl:pb-[59px]">
                    Do you have any questions? <br/>
                    <span className="font-poppinsMedium">
                        Let us know!
                    </span>
                </h1>
                <div className="w-10/12 md:w-full xl:w-10/12 2xl:w-auto flex flex-col md:flex-row gap-y-6 gap-x-[60px] lg:gap-x-[80px] justify-center pb-6 md:pb-[37px]">
                    <form className="w-full">
                        <input 
                            className="w-full rounded-[17px] py-[15px] px-[22px] font-poppinsLight text-base sm:text-lg md:text-[20px] text-gray-700 focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Username" 
                        />
                    </form>
                    <form className="w-full">
                        <input 
                            className="w-full rounded-[17px] py-[15px] px-[22px] font-poppinsLight text-base sm:text-lg md:text-[20px] text-gray-700 focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                        />
                    </form>
                </div>
                <textarea 
                    id="message" 
                    rows="4" 
                    className="w-10/12 md:w-full xl:w-10/12 2xl:w-1/2 py-[15px] px-[22px] font-poppinsLight text-base sm:text-lg md:text-[20px] text-gray-700 rounded-[17px] focus:outline-none" 
                    placeholder="Write your question..."
                ></textarea>
                <button 
                    type="submit" 
                    className="px-7 md:px-10 py-3 font-poppinsMedium text-white text-base sm:text-lg md:text-[20px] bg-red-NL hover:bg-[#D93C3C] rounded-2xl mt-[37px]"
                >
                        Submit
                </button>
            </div>
        </div>
    );
}

export default Form;