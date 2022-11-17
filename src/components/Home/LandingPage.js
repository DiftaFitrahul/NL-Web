import { ChevronDownIcon } from '@heroicons/react/24/solid';
import LogoNL from '../../assets/images/Logo NL.png';

const LandingPage = () => {
    return (
        <div className="h-screen">
            <div className="w-full min-h-full relative grid justify-items-center content-center">
                <img
                    src={LogoNL}
                    className="w-[150px] md:w-[200px] lg:w-[230px] xl:w-[300px]"
                    alt="Logo Night Login"
                />
                <h1 className="font-poppinsBold text-center text-white text-[30px] md:text-[36px] lg:text-[40px] xl:text-[55px] pt-[10px]">
                    Night Login UGM
                </h1>
                <a 
                    href="#MainDesc"
                    className="relative my-auto -bottom-20 lg:-bottom-28 xl:-bottom-32 2xl:-bottom-48 cursor-pointer animate-bounce"
                >
                    <ChevronDownIcon className="w-10 lg:w-12 xl:w-14 text-white" />
                </a>
            </div>
        </div>
    );
}

export default LandingPage;