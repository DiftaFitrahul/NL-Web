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
            <div className="w-full bg-white-NL relative rounded-5xl px-[134px]">
                <div className="grid justify-items-center content-center mx-auto container">
                    <h1 className="font-poppinsBold text-red-NL text-[40px] pt-[90px] pb-[70px]">
                        About Night Login
                    </h1>
                    <p className="font-poppinsRegular text-[24px] text-justify leading-[38px]">
                        Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait bidang-bidang IT.
                    </p>
                    <h1 className="font-poppinsBold text-red-NL text-[40px] pt-[161px] pb-[70px]">
                        Our Community
                    </h1>
                    <div className="flex justify-center pb-20">
                        <div className="grid grid-cols-2 gap-x-[150px] gap-y-[99px]">
                            {list.map((item) => (
                                <div className="grid justify-items-center bg-red-NL rounded-[38px] shadow-home-card px-[104px] py-[43px] gap-y-5">
                                    <img
                                        src={`${assetsKomunitas}/Logo-${item.title}.png`}
                                        className="w-[270px] pointer-events-none"
                                        loading="lazy"
                                        alt={`Logo ${item.title}`}
                                    />
                                    <p className="font-poppinsBold uppercase text-center text-[32px] text-white-NL">
                                        {item.title}
                                    </p>
                                    <a 
                                        href="#!"
                                        className="font-poppinsSemi text-black-NL rounded-[42px] bg-white-NL px-[31px] py-[11px] cursor-pointer"
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