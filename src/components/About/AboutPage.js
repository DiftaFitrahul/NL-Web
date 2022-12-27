import { HtmlHead } from "../../components/HtmlHead";
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
import{ NLAdministrator }from "../data/dataPengurusNL.js";

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
    <>
      <HtmlHead title="About" decription="Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi." />
      <div className="h-full">
        <div className="pt-32 text-center">
          <div className="py-24 flex flex-row justify-center h-80">
            <img
              className="h-auto shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)]"
              src={Logo}
              loading="lazy"
              alt="logo"
            />
          </div>
          <div className="w-full">
            <h2 className="font-poppinsBold text-white text-4.5xl  font-bold">
              About Night Login
            </h2>
            <p className="font-poppinsRegular mx-36 my-7 text-white text-xl leading-9 text-center">
              Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait bidang-bidang IT.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <img src={HappyBunchL} alt="myPicture" className="h-100" loading="lazy" />
            <img src={HappyBunchR} alt="myPicture" className="h-100" loading="lazy" />
          </div>
          <div className="bg-pink-NL rounded-10xl mx-56 py-16 px-12 mt-0 shadow-custom shadow-grey">
            <h2 className="text-black-NL font-poppinsBold text-4.5xl font-bold my-1">
              #BeginToGain
            </h2>
            <p className="font-poppinsRegular text-black-NL text-xl mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              veniam odio iure animi quis, architecto cum molestias! Excepturi,
              repellat fuga neque possimus sapiente eos ipsum unde a ab aut
              provident rem temporibus, laborum nihil asperiores aspernatur enim
              beatae, placeat eaque praesentium perspiciatis! Quasi veniam
              voluptatibus tempore nihil hic iste fugiat!
            </p>
          </div>
          <div className="py-10 mt-40 bg-black-NL rounded-3xl md:rounded-3.5xl xl:rounded-5xl">
            <h2 className="text-white text-4.5xl font-poppinsBold pt-32">
              Meet The Team
            </h2>
            <p className="font-poppinsRegular text-white text-2xl mt-7 mb-10">
              Introducing our incredible team from different field and interest
            </p>
            <div className="h-full">
              <div className="w-full">
                <BoxProfile title="President" name={NLAdministrator.leader.president} />
                <BoxProfile title="Vice" name={NLAdministrator.leader.vice} />
              </div>
              <div className="w-80 bg-white ml-40 my-32 shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
                <p className="font-poppinsSemi my-3 text-[1.8rem] text-black-NL ">
                  Management Team
                </p>
              </div>
              <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl ">
                  <h3 className="font-poppinsSemi -mt-4 text-white text-[1.4rem] ">
                    Public Relation Team
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-start ml-[6%]">
                <BoxProfile title="Head" name={NLAdministrator.managementTeam.publicRealtionTeam.head} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.publicRealtionTeam.members[0]} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.publicRealtionTeam.members[1]} />
              </div>
              <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl ">
                  <h3 className="font-poppinsSemi -mt-4 text-white text-[1.4rem] ">
                    Creative Media Team
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-start ml-[6%]">
                <BoxProfile title="Head" name={NLAdministrator.managementTeam.creativeMediaTeam.head} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.creativeMediaTeam.members[0]} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.creativeMediaTeam.members[1]} />
              </div>
              <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl ">
                  <h3 className="font-poppinsSemi -mt-4 text-white text-[1.4rem] ">
                    Administration Team
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-start ml-[6%]">
                <BoxProfile title="Head" name={NLAdministrator.managementTeam.administrationTeam.head} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.administrationTeam.members[0]} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.administrationTeam.members[1]} />
                <BoxProfile title="Member" name={NLAdministrator.managementTeam.administrationTeam.members[2]} />
              </div>
              <div className="w-80 bg-white ml-40 mt-20 shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
                <p className="font-poppinsSemi my-3 text-[1.8rem] text-black-NL ">
                  Community Team
                </p>
              </div>
              {/* Membuat Comunity Section */}
              <div className="flex flex-row my-20 mx-[10%] font-poppinsSemi">
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
                  <img 
                    src={activeLogo} 
                    alt="Logo" 
                    className=" px-14 w-[25%]" 
                  />
                  <div className="py-10 bg-red-NL w-1"></div>
                  <div className="font-poppinsMedium py-5 px-14 inline break-word text-white text-3xl">
                    Night Login {activeFirstnameLogo} <br /> {activeLastnameLogo}{" "}
                    Community
                  </div>
                </div>
                <div className="box">
                  <BoxProfile title={activeTitle} name={activeName} />
                  <BoxProfile title={activeViceTitle} name={activeViceName} />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row justify-center bg-pink-NL mt-32 rounded-3xl md:rounded-3.5xl xl:rounded-5xl py-28 px-7 smallest:px-12 sm:px-14 md:px-20 lg:px-[134px]">
                <div className="w-full flex flex-col pb-[50px] sm:pb-[60px] md:pb-[70px] xl:pb-[70px] 2xl:pb-[59px] xl:mr-16 justify-center">
                  <h2 className="font-poppinsBold text-white text-[25px] sm:text-[28px] md:text-[30px] lg:text-[31px] xl:text-start">
                    Do you want to be a part of
                    Night Login?
                  </h2>
                  <p className="font-poppinsMedium text-white text-[25px] sm:text-[28px] md:text-[30px] lg:text-[28px] xl:text-start pt-4">
                    Wait for further information!
                  </p>
                </div>
                <img 
                  src={Drawkit} 
                  alt="Illustrasi" 
                  className="mx-auto w-3/5 lg:w-1/2 2xl:w-[42%]" 
                  loading="lazy" 
                />
              </div>
              <img 
                src={HappyBunch} 
                alt="Dekorasi" 
                className="-mt-[170px] lg:-mt-[190px] xl:-mt-[210px] 2xl:mt-[-17rem] w-40 lg:w-44 xl:w-48 2xl:w-64" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
