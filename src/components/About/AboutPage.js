import Logo from "../../assets/images/About/long.png";
import LogoNADC from "../../assets/images/Home/Logo-NADC.png";
import LogoNCPC from "../../assets/images/Home/Logo-NCPC.png";
import LogoNDDC from "../../assets/images/Home/Logo-NDDC.png";
import LogoNLNC from "../../assets/images/Home/Logo-NLNC.png";
import LogoNUXC from "../../assets/images/Home/Logo-NUXC.png";
import LogoNWDC from "../../assets/images/Home/Logo-NWDC.png";
import HappyBunchL from "../../assets/images/About/HappyBunch-left.png";
import HappyBunchR from "../../assets/images/About/HappyBunch-right.png";
import HappyBunch from "../../assets/images/About/HappyBunch.png";
import Drawkit from "../../assets/images/About/Drawkit.png";
import BoxProfile from "./BoxProfile.js";
import { useState } from "react";

const AboutPage = () => {
  const [activeButton, setActiveButton] = useState("NADC");
  const [activeLogo, setActiveLogo] = useState(LogoNADC);
  const [activeFirstnameLogo, setActiveFirstnameLogo] = useState("Aplication");
  const [activeLastnameLogo, setActiveLastnameLogo] = useState("Development");
  const [activeTitle, setActiveTitle] = useState("Head");
  const [activeName, setActiveName] = useState("Gerrit");
  const [activeViceTitle, setActiveViceTitle] = useState("Head");
  const [activeViceName, setViceActiveName] = useState("Gerrit");

  return (
    <div className="AboutPage">
      <div className="home text-center">
        <div className="mt-14 py-24 flex flex-row justify-center h-80">
          <img
            className="h-auto shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)]"
            src={Logo}
            loading="lazy"
            alt="logo"
          />
        </div>
        <div className="about">
          <h2 className="text-white text-4.5xl  font-bold">
            About Night Login
          </h2>
          <p className="mx-36 my-7 text-white text-xl leading-9 text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos non iste cupiditate perferendis dolore fugit, magni,
            labore minus nobis temporibus repellendus consequuntur quisquam
            laborum nesciunt, accusantium modi rem atque ut tempora earum?
            Ullam, quo ad. Quidem quaerat itaque vitae blanditiis, commodi
            inventore debitis atque minima minus in eligendi laboriosam
            laudantium quis corrupti beatae. Adipisci, nam recusandae? Ducimus
            blanditiis nisi modi accusamus a repellat aliquid quibusdam rem, ut
            rerum! Voluptates, dolores?
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <img src={HappyBunchL} alt="myPicture" className="h-100" loading="lazy" />
          <img src={HappyBunchR} alt="myPicture" className="h-100" loading="lazy" />
        </div>
        <div className="h-72 bg-pink-NL rounded-10xl mx-56 px-7 mt-0 shadow-custom shadow-grey">
          <h2 className=" text-black-NL text-4.5xl  font-bold pt-10 my-1">
            #BeginToGain
          </h2>
          <p className="text-black-NL text-xl mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            veniam odio iure animi quis, architecto cum molestias! Excepturi,
            repellat fuga neque possimus sapiente eos ipsum unde a ab aut
            provident rem temporibus, laborum nihil asperiores aspernatur enim
            beatae, placeat eaque praesentium perspiciatis! Quasi veniam
            voluptatibus tempore nihil hic iste fugiat!
          </p>
        </div>
        <div className="h-[280rem] mt-40 bg-black-NL rounded-t-180px">
          <h2 className="text-white text-4.5xl font-bold pt-32">
            Meet The Team
          </h2>
          <p className="text-white text-2xl mt-7 mb-10">
            Introducing our incredible team from different field and interest
          </p>
          <div className="box">
            <div className="presiden">
              <BoxProfile title="President" name="Samatha Marhaendra P." />
              <BoxProfile title="Vice" name="Christian Ale P." />
            </div>
            <div className="w-80 bg-white ml-40 my-32 shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
              <p className="my-3 font-bold text-[1.8rem] text-black-NL ">
                Management Team
              </p>
            </div>
            <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
              <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl ">
                <h3 className="-mt-4 text-white font-semibold text-[1.4rem] ">
                  Public Relation Team
                </h3>
              </div>
            </div>
            <div className="vice">
              <BoxProfile title="Head" name="Sagara Aldavy M.N.S" />
              <BoxProfile title="Member" name="Khairun Nisa’ Z." />
              <BoxProfile title="Member" name="Byan Cahaya R. A" />
            </div>
            <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
              <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl ">
                <h3 className="-mt-4 text-white font-semibold text-[1.4rem] ">
                  Creative Media Team
                </h3>
              </div>
            </div>
            <div className="vice">
              <BoxProfile title="Head" name="Arifah Amelia T." />
              <BoxProfile title="Member" name="Fajar Rizki W." />
              <BoxProfile title="Member" name="M. Daniyal Kautsar" />
            </div>
            <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
              <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl ">
                <h3 className="-mt-4 text-white font-semibold text-[1.4rem] ">
                  Administration Team
                </h3>
              </div>
            </div>
            <div className="vice">
              <BoxProfile title="Head" name="Gerrit Ezra Yudi K." />
              <BoxProfile title="Member" name="Talitha Andani" />
              <BoxProfile title="Member" name="Dhiyaa Amalia P" />
              <BoxProfile title="Member" name="Anisa Nur Rahmalina" />
            </div>
            <div className="w-80 bg-white ml-40 mt-20 shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
              <p className="my-3 font-bold text-[1.8rem] text-black-NL ">
                Community Team
              </p>
            </div>
            {/* Membuat Comunity Section */}
            <div className="flex flex-row my-20 mx-[10%]">
              <button
                onClick={() => {
                  setActiveButton("NADC");
                  setActiveLogo(LogoNADC);
                  setActiveFirstnameLogo("Aplication");
                  setActiveLastnameLogo("Development");
                  setActiveTitle("Head");
                  setActiveName("Firdaus Bisma Suryakusuma");
                  setActiveViceTitle("Vice Head");
                  setViceActiveName("Muhammad Hasan Chamdany");
                }}
                className={`button ${
                  activeButton === "NADC"
                    ? "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-white text-red-NL"
                    : "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-red-NL text-white"
                }`}
              >
                NADC
              </button>
              <button
                onClick={() => {
                  setActiveButton("NCPC");
                  setActiveLogo(LogoNCPC);
                  setActiveFirstnameLogo("Competitive");
                  setActiveLastnameLogo("Programming");
                  setActiveTitle("Head");
                  setActiveName("Harry Krisna Darmawan");
                  setActiveViceTitle("Vice Head");
                  setViceActiveName("Wiweka Yoga Sadewa");
                }}
                className={`button ${
                  activeButton === "NCPC"
                    ? "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-white text-red-NL"
                    : "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-red-NL text-white"
                }`}
              >
                NCPC
              </button>
              <button
                onClick={() => {
                  setActiveButton("NDDC");
                  setActiveLogo(LogoNDDC);
                  setActiveFirstnameLogo("Data Science and");
                  setActiveLastnameLogo("Data Analitic");
                  setActiveTitle("Head");
                  setActiveName("Rizky Alif Ramadhan");
                  setActiveViceTitle("Vice Head");
                  setViceActiveName("Karunia Perjuangan");
                }}
                className={`button ${
                  activeButton === "NDDC"
                    ? "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-white text-red-NL"
                    : "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-red-NL text-white"
                }`}
              >
                NDDC
              </button>
              <button
                onClick={() => {
                  setActiveButton("NLNC");
                  setActiveLogo(LogoNLNC);
                  setActiveFirstnameLogo("Linux and");
                  setActiveLastnameLogo("Networking");
                  setActiveTitle("Head");
                  setActiveName("Muhammad Farrel Rafirizqy");
                  setActiveViceTitle("Vice Head");
                  setViceActiveName("Novaldy Pratama");
                }}
                className={`button ${
                  activeButton === "NLNC"
                    ? "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-white text-red-NL"
                    : "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-red-NL text-white"
                }`}
              >
                NLNC
              </button>
              <button
                onClick={() => {
                  setActiveButton("NUXC");
                  setActiveLogo(LogoNUXC);
                  setActiveFirstnameLogo("User");
                  setActiveLastnameLogo("Experience");
                  setActiveTitle("Head");
                  setActiveName("Tiara Kesuma Putri");
                  setActiveViceTitle("Vice Head");
                  setViceActiveName("Annisa Somaningtyas");
                }}
                className={`button ${
                  activeButton === "NUXC"
                    ? "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-white text-red-NL"
                    : "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-red-NL text-white"
                }`}
              >
                NUXC
              </button>
              <button
                onClick={() => {
                  setActiveButton("NWDC");
                  setActiveLogo(LogoNWDC);
                  setActiveFirstnameLogo("Web");
                  setActiveLastnameLogo("Development");
                  setActiveTitle("Head");
                  setActiveName("Aldo Arya Saka Mukti");
                  setActiveViceTitle("Vice Head");
                  setViceActiveName("Alphonsus Jovian Joy Reynaldo");
                }}
                className={`button ${
                  activeButton === "NWDC"
                    ? "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-white text-red-NL"
                    : "py-3 px-8 mx-5 text-xl rounded-[2.5rem] bg-red-NL text-white"
                }`}
              >
                NWDC
              </button>
            </div>
            {/* Community box */}
            <div>
              <div className="flex flex-row justify-center my-10">
                <img src={activeLogo} alt="Logo" className=" px-14 w-[25%]" />
                <div className="py-10 bg-red-NL w-1"> </div>
                <div className="py-5 px-14 inline break-word text-white font-semibold text-3xl">
                  Night Login {activeFirstnameLogo} <br /> {activeLastnameLogo}{" "}
                  Community
                </div>
              </div>
              <div className="box">
                <BoxProfile title={activeTitle} name={activeName} />
                <BoxProfile title={activeViceTitle} name={activeViceName} />
              </div>
            </div>
            <div className="flex flex-row justify-center h-[45rem] bg-pink-NL mt-32 rounded-t-180px py-28">
              <div className="py-44 mr-16">
                <h2 className="text-white font-bold text-[2.5rem] text-start">Do you want to be part of<br/> Night Login?</h2>
                <p className="text-white font-semibold text-[2rem] text-start">wait fot further information</p>
              </div>
              <img src={Drawkit} alt="animationPic" className="w-[42%]" loading="lazy" />
            </div>
            <img src={HappyBunch} alt="" className="mt-[-17rem] w-64" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
