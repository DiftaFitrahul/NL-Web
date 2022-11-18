import { useState } from "react";
import { komunitasList } from "../data/dataKomunitas";

const assetsKomunitas = "/images/Home";

const MainDesc = () => {
    const [list] = useState(komunitasList);

    return (
        <div 
            id={"MainDesc"}
            className="w-full bg-pink-NL relative grid justify-items-center content-center rounded-5xl mt-10"
        >
            <h1 className="font-poppinsBold text-black-NL text-[55px] py-[90px]">
                #BeginToGain
            </h1>
            <div className="w-full bg-white-NL relative rounded-5xl md:px-20 lg:px-[134px] pb-12 lg:pb-28">
                <div className="grid justify-items-center content-center mx-auto container">
                    <h1 className="font-poppinsBold text-red-NL text-[40px] pt-[90px] pb-[70px]">
                        About Night Login
                    </h1>
                    <p className="font-poppinsRegular text-[24px] text-justify leading-[38px]">
                        Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait bidang-bidang IT.
                    </p>
                    <h1 
                        id={"Community"}
                        className="font-poppinsBold text-red-NL text-[40px] pt-[161px] pb-[70px]"
                    >
                        Our Community
                    </h1>
                    <div className="flex justify-center pb-20">
                        <div className="grid grid-cols-2 gap-x-[100px] xl:gap-x-[150px] gap-y-[99px]">
                            {list.map((item) => (
                                <div className="flex flex-col justify-center py-auto bg-red-NL rounded-[30px] lg:rounded-[38px] shadow-home-card px-12 xl:px-20 2xl:px-[104px] py-[31px] lg:py-[43px] gap-y-5">
                                    <img
                                        src={`${assetsKomunitas}/Logo-${item.title}.png`}
                                        className="mx-auto pointer-events-none"
                                        width={`${item.width}`}
                                        loading="lazy"
                                        alt={`Logo ${item.title}`}
                                    />
                                    <p className="font-poppinsBold uppercase text-center text-2xl lg:text-[32px] text-white-NL">
                                        {item.title}
                                    </p>
                                    <a 
                                        href="#!"
                                        className="mx-auto font-poppinsSemi text-sm lg:text-base text-black-NL text-center rounded-[25px] lg:rounded-[42px] bg-white-NL w-full xl:w-10/12 2xl:w-3/4 px-3 lg:px-[31px] py-2 lg:py-[11px] cursor-pointer"
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