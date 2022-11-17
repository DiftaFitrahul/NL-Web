const BoxProfile = ({title, name}) => {
    return ( 
        <div className="w-80 h-96 inline-block my-6 mx-16">
            <div className="w-72 h-76 bg-grey-NL rounded-4xl border-solid border-black border-4 shadow-custom2"></div>
            <p className="mt-8 text-white text-3xl font-bold">{title}</p>
            <p className="my-2 text-white text-xl font-semibold">{name}</p>
        </div>
     );
}
 
export default BoxProfile;