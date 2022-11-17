const styleButton = "items-center px-[26px] py-[3px] rounded-[58px] bg-white-NL text-black-NL font-poppinsBold text-[24px]"

const Events = () => {
    return (
        <div className="w-full bg-white-NL">
            <div className="h-full relative grid justify-items-center content-center bg-red-NL rounded-5xl pb-48">
                <h1 className="font-poppinsBold text-white-NL text-[40px] pt-[130px] pb-[70px]">
                    Our Events
                </h1>
                <div className="flex flex-row gap-x-[48px] justify-center">
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