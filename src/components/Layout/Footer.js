
import { useState } from "react";
import { sosmedList } from "../data/dataSosmed";
import logoNL from '../../assets/images/nightLogin.png';
import logoKMTETI from '../../assets/images/cropped-KMTETI-Full-Color-9 1.png';

const Footer = () => {
    const [list] = useState(sosmedList);

    const footerButtons = (title, link) => {
        return (
            <a 
                href={link}
                className="font-poppinsRegular text-sm sm:text-base xl:text-[20px] mt-3 lg:mt-0 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-NL" 
            >
                {title}
            </a>
        )
    }

    return ( 
        <div className="w-full h-full bg-black-NL px-7 smallest:px-12 sm:px-14 md:px-20 lg:px-24 xl:px-[134px] pt-[70px] z-40">
            <div className="mx-auto container">
                <div className="flex items-center text-white-NL gap-x-3 lg:gap-x-4">
                    <img
                        className="w-[35px] sm:w-[39px] md:w-[45px] xl:w-[51px]" 
                        src={logoNL} 
                        loading="lazy"
                        alt="Logo Night Login"
                    />
                    <h1 className="font-poppinsBold text-[22px] sm:text-[24px] md:text-[26px] xl:text-[30px]">
                        Night Login
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between text-white-NL">
                    <div className="grid lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
                        <p className="font-poppinsLight text-justify leading-relaxed text-sm sm:text-base xl:text-[18px] py-5">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                        <div className="flex gap-x-4">
                            {list.map((item) => (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src={item.src}
                                        className="w-[22px] sm:w-[23px] xl:w-[26px]"
                                        loading="lazy"
                                        alt={`${item.title} icon`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col smallest:flex-row gap-x-28 sm:gap-x-32 2xl:gap-x-48 gap-y-9 smallest:gap-y-0 pt-10 lg:pt-0">
                        <div className="grid">
                            <p className="font-poppinsMedium text-sm sm:text-base xl:text-[20px]">
                                Quick Links :
                                <div className="w-[90px] smallest:w-full border-red-NL border-2"></div>
                            </p>
                            {footerButtons ("About", "/about")}
                            {footerButtons ("Event", "#Events")}
                            {footerButtons ("Community", "#Community")}
                        </div>
                        <div className="grid">
                            <p className="font-poppinsMedium text-sm sm:text-base xl:text-[20px] pb-4">
                                Lorem ipsum :
                                <div className="w-[100px] smallest:w-full border-red-NL border-2"></div>
                            </p>
                            <img
                                src={logoKMTETI}
                                className="w-[81px] smallest:w-[86px] xl:w-[94px]"
                                loading="lazy"
                                alt="Logo KMTETI"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-center font-poppinsLight text-xs xl:text-sm text-white-NL pt-14 pb-5">
                    Copyright © 2022 Night Login UGM
                </p>
            </div>
        </div>
     );
}
 
export default Footer;