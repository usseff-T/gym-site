import {routes} from "./routes";
import {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";

const NavMenu = ({routes}) => (
    <>
        {routes.map((route, i) => (
            <li key={i}>
                <Link
                    className={`px-4 ${
                        route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                    }`}
                    to={route.href}>
                    {route.name}
                </Link>
            </li>
        ))}
    </>
);

const AuthNavMenu = () => (
    <>
        <li>
            <button
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-1.5 px-4 rounded">
                Sign Up
            </button>
        </li>
        <li>
            <button className="border border-blue-600 bg-blue-600 text-white hover:bg-opacity-90 py-1.5 px-4 rounded">
                Sign Up
            </button>
        </li>
    </>
);

const Headerr = () => {
    const [stateMenu, setstateMenu] = useState(false);
    const HandelMenu = () => {
        setstateMenu(!stateMenu);
    };
    return (
        <div className="py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
            <nav className={"relative"}>

                <div className="container px-4 mx-auto">

                    {/*Nav Desktop */}
                    <div className="hidden lg:flex justify-between">
                        {/* Icon */}
                        <div>
                            <a className="font-black text-3xl" href="#!">
                                Gym
                            </a>
                        </div>

                        {/* Menu Item  */}
                        <div className={""}>
                            <ul
                                className="flex flex-col
			  lg:flex-row
			  justify-center
			  items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
                                id="navbar"
                            >
                                <NavMenu routes={routes}/>
                                <AuthNavMenu/>
                            </ul>
                        </div>
                    </div>

                    {/*Mobile Nav */}
                    <div className={"lg:hidden"}>

                        <div className={"flex justify-between"}>

                            <div>
                                <a className="font-black text-3xl" href="#!">
                                    Gym
                                </a>
                            </div>


                            {/* Toggle */}
                            <AiOutlineMenu className={
                                "w-10 h-10 hover:cursor-pointer lg:hidden"}
                                           onClick={HandelMenu}/>

                            {/* Item in Menu */}
                            <div
                                className={stateMenu ? "absolute z-50 bg-white m-20 border" +
                                    "rounded-lg py-4 px-6 w-1/2 dark:bg-gray-800 dark:text-white" : "hidden"}>
                                <ul className={"flex flex-col gap-7 text-center"}>
                                    <NavMenu routes={routes}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Headerr;
