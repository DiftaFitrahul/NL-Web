import Logo from './image/long-1.png';
import HappyBunchL from './image/HappyBunch-left.png';
import HappyBunchR from './image/HappyBunch-right.png';

const AboutPage = () => {

    const boxProfile = (title, name) => {
        return <div className="w-80 h-96 inline-block my-6 mx-16">
            <div className="w-72 h-76 bg-grey-NL rounded-4xl border-solid border-black border-4 shadow-custom2"></div>
            <p className="mt-8 text-white text-3xl font-bold">{title}</p>
            <p className="my-2 text-white text-xl font-semibold">{name}</p>
        </div>
    }

    return (
        <div className="AboutPage">

            <div className="home h-200 bg-red-NL">
                <div className="py-24 flex flex-row justify-center h-100">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="about">
                    <h2 className="text-white text-4.5xl  font-bold">
                        About Night Login
                    </h2>
                    <p className="mx-36 my-7 text-white text-xl leading-9 text-start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos non iste cupiditate perferendis dolore fugit, magni, labore minus nobis temporibus repellendus consequuntur quisquam laborum nesciunt, accusantium modi rem atque ut tempora earum? Ullam, quo ad. Quidem quaerat itaque vitae blanditiis, commodi inventore debitis atque minima minus in eligendi laboriosam laudantium quis corrupti beatae. Adipisci, nam recusandae? Ducimus blanditiis nisi modi accusamus a repellat aliquid quibusdam rem, ut rerum! Voluptates, dolores?
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <img src={HappyBunchL} alt="myPicture" className="h-100" />
                    <img src={HappyBunchR} alt="myPicture" className="h-100" />
                </div>
                <div className="h-72 bg-pink-NL rounded-10xl mx-56 px-7 mt-0 shadow-custom shadow-grey">
                    <h2 className=" text-black-NL text-4.5xl  font-bold pt-10 my-1">#BeginToGain</h2>
                    <p className="text-black-NL text-xl mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam odio iure animi quis, architecto cum molestias! Excepturi, repellat fuga neque possimus sapiente eos ipsum unde a ab aut provident rem temporibus, laborum nihil asperiores aspernatur enim beatae, placeat eaque praesentium perspiciatis! Quasi veniam voluptatibus tempore nihil hic iste fugiat!</p>
                </div>
                <div className="h-300 mt-40 bg-black-NL rounded-t-180px">
                    <h2 className="text-white text-4.5xl font-bold pt-32">
                        Meet The Team
                    </h2>
                    <p className="text-white text-2xl mt-7 mb-10">Introducing our incredible team from different field and interest</p>
                    <div className="box">
                        <div className="presiden">
                            {boxProfile("President", "Samatha Marhaendra P.")}
                            {boxProfile("vice", "Christian Ale P")}
                        </div>
                        <div className="vice">
                            {boxProfile("Head", "Sagara Aldavy M.N.S")}
                            {boxProfile("Member", "Khairun Nisa'Z")}
                            {boxProfile("Member", "Byan Cahaya R. A")}
                        </div>
                        <div className="vice">
                            {boxProfile("Head", "Arifah Amelia T.")}
                            {boxProfile("Member", "Fajar Rizki W")}
                            {boxProfile("Member", "M Daniyal Kautsar")}
                        </div>
                        <div className="vice">
                            {boxProfile("Head", "Gerrit Ezra Yudi K.")}
                            {boxProfile("Member", "Talitha Andani")}
                            {boxProfile("Member", "Dhiyaa Amalia P.")}
                            {boxProfile("Member", "Anisa Nur Rahmanlina")}
                        </div>
                        <div className="w-96 bg-white ml-60 my-32 shadow-[7px_5px_0_1px_#DA4949,14px_10px_0_1px_#FE8F75,14px_10px_0_5px_black] border-solid border-black border-4">
                            <p className="my-5 font-bold text-[2.2rem] text-black-NL ">Management Team</p>
                        </div>
                        <div className="flex flex-row"></div>
                    </div>
                </div>
            </div>
        </div>);
}

export default AboutPage;