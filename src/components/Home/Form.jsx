const Form = () => {
    return (
        <div className="w-full bg-pink-NL rounded-5xl">
            <div className="h-full relative grid justify-items-center content-center px-[344px] pb-36">
                <h1 className="font-poppinsBold text-black-NL text-center text-[32px] pt-[130px] pb-[59px]">
                    Do you have any questions? <br/>
                    <span className="font-poppinsMedium">
                        Let us know!
                    </span>
                </h1>
                <div className="flex flex-row gap-x-[80px] justify-center pb-[37px]">
                    <form className="w-full">
                        <input 
                            className="w-full rounded-[17px] py-[15px] px-[22px] font-poppinsLight text-[20px] text-gray-700 focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Username" 
                        />
                    </form>
                    <form className="w-full">
                        <input 
                            className="w-full rounded-[17px] py-[15px] px-[22px] font-poppinsLight text-[20px] text-gray-700 focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                        />
                    </form>
                </div>
                <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full py-[15px] px-[22px] font-poppinsLight text-[20px] text-gray-700 rounded-[17px] focus:outline-none" 
                    placeholder="Write your question..."
                ></textarea>
                <button 
                    type="submit" 
                    className="px-7 py-3 font-poppinsMedium text-white text-[20px] bg-red-NL rounded-2xl mt-[37px]"
                >
                        Submit
                </button>
            </div>
        </div>
    );
}

export default Form;