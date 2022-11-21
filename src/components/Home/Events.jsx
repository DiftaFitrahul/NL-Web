const styleButton = "items-center px-[18px] sm:px-[26px] py-[3px] rounded-[58px] bg-white-NL hover:bg-black-NL text-black-NL hover:text-white-NL font-poppinsBold text-[14px] smallest:text-base sm:text-[20px] lg:text-[24px]"

const Events = () => {
    return (
        <div 
            id={"Events"}
            className="w-full bg-white-NL"
        >
            <div className="h-full relative grid justify-items-center content-center bg-red-NL rounded-2.2xl smallest:rounded-2.5xl md:rounded-3.5xl xl:rounded-5xl pb-48">
                <h1 className="font-poppinsBold text-white-NL text-center text-[28px] md:text-[35px] lg:text-[40px] pt-[60px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] pb-[30px] md:pb-[40px] lg:pb-[50px] xl:pb-[70px]">
                    Our Events
                </h1>
                <div className="flex flex-row gap-x-[20px] smallest:gap-x-[30px] sm:gap-x-[48px] justify-center">
                    <button className={styleButton}>
                        2020
                    </button>
                    <button className={styleButton}>
                        2021
                    </button>
                    <button className={styleButton}>
                        2022
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Events;