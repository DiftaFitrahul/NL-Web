import logo from './image/nightLogin.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navButtons = (title, link) => {
        return <Link className=" mx-7" to={link}>{title}</Link>
    }
    return ( 
        <div className="flex flex-row h-20 bg-red-NL shadow-3xl relative">
            <div className="flex-1 flex font-bold text-white  text-2xl my-5 pl-40">
                <img className="inline mr-4 " src={logo} alt="logo" />
                <div className="inline">Night Login</div>
                </div>
            <div className="flex-1 flex max-w-xl font-semibold text-xl my-6 text-white">
                {navButtons("Home", "/home")}
                {navButtons("About", "/about")}
                {navButtons("Event", "https://google.com")}
                {navButtons("Community", "https://google.com")}
            </div>
        </div>
     );
}
 
export default Navbar;