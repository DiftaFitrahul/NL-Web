import { useState } from "react";
import { komunitasList } from "../data/dataKomunitas";

const assetsKomunitas = "/images/Home";

const MainDesc = () => {
    const [list] = useState(komunitasList);

    return (
        <div 
            id={"MainDesc"}
            className="w-full bg-pink-NL relative grid justify-items-center content-center rounded-2.2xl smallest:rounded-2.5xl md:rounded-3.5xl xl:rounded-5xl mt-10"
        >
            <h1 className="font-poppinsBold text-center text-black-NL text-[31px] smallest:text-[35px] md:text-[42px] lg:text-[48px] xl:text-[51px] 2xl:text-[55px] py-[40px] md:py-[50px] lg:py-[60px] xl:py-[70px]  2xl:py-[90px]">
                #BeginToGain
            </h1>
            <div className="w-full bg-white-NL relative rounded-2.2xl smallest:rounded-2.5xl md:rounded-3.5xl xl:rounded-5xl px-7 smallest:px-12 sm:px-14 md:px-20 lg:px-[134px] pb-12 lg:pb-28">
                <div className="grid justify-items-center content-center mx-auto container">
                    <h1 className="font-poppinsBold text-center text-red-NL text-[28px] md:text-[35px] lg:text-[40px] pt-[60px] lg:pt-[80px] xl:pt-[90px] pb-[30px] md:pb-[40px] lg:pb-[50px] xl:pb-[70px]">
                        About Night Login
                    </h1>
                    <p className="font-poppinsRegular text-[17px] md:text-[20px] lg:text-[23px] xl:text-[24px] text-justify leading-[30px] md:leading-[35px] lg:leading-[38px]">
                        Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait bidang-bidang IT.
                    </p>
                    <h1 
                        id={"Community"}
                        className="font-poppinsBold text-center text-red-NL text-[28px] md:text-[35px] lg:text-[40px] pt-[100px] md:pt-[120px] lg:pt-[130px] xl:pt-[150px] 2xl:pt-[161px] pb-[30px] md:pb-[40px] lg:pb-[50px] xl:pb-[70px]"
                    >
                        Our Communities
                    </h1>
                    <div className="flex justify-center pb-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[80px] md:gap-x-[100px] xl:gap-x-[150px] gap-y-[99px]">
                            {list.map((item) => (
                                <div className="flex flex-col justify-center py-auto bg-red-NL shadow-custom3 hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition duration-300 rounded-[30px] lg:rounded-[38px] px-10 md:px-12 xl:px-20 2xl:px-[104px] py-[31px] lg:py-[43px] gap-y-5">
                                    <img
                                        src={`${assetsKomunitas}/Logo-${item.title}.png`}
                                        className="w-9/12 sm:w-full mx-auto pointer-events-none"
                                        width={`${item.width}`}
                                        loading="lazy"
                                        alt={`Logo ${item.title}`}
                                    />
                                    <p className="font-poppinsBold uppercase text-center text-xl smallest:text-2xl lg:text-[32px] text-white-NL">
                                        {item.title}
                                    </p>
                                    <a 
                                        href="#!"
                                        className="mx-auto font-poppinsSemi text-xs smallest:text-sm lg:text-base text-black-NL hover:text-white-NL text-center rounded-[25px] lg:rounded-[42px] bg-white-NL hover:bg-pink-NL w-full xl:w-10/12 2xl:w-3/4 px-3 lg:px-[31px] py-2 lg:py-[11px] cursor-pointer"
                                    >
                                        {item.textButton}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDesc;