import React, { useState } from "react";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/images/nightLogin.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navButtons = (title, link) => {
        return (
            <a 
                href={link}
                className="hover:text-gray-200" 
            >
                {title}
            </a>
        )
    }

    const linksCommunity = [
        { href: '#!', title: 'NADC' },
        { href: '#!', title: 'NCPC' },
        { href: '#!', title: 'NDDC' },
        { href: '#!', title: 'NLNC' },
        { href: '#!', title: 'NUXC' },
        { href: '#!', title: 'NWDC' }
    ]

    const linksEvent = [
        { href: '#!', title: 'After Hours Talk' },
        { href: '#!', title: 'After Hours Workshop' },
        { href: '#!', title: 'Internal Workshop' },
        { href: '#!', title: 'Find IT' },
        { href: '#!', title: 'Internal Project' }
    ]

    const styleTextNav="font-PoppinsRegular lg:text-sm xl:text-sm cursor-pointer text-black hover:text-cyan-600 px-3 py-2"

    return ( 
        <nav className="w-full bg-red-NL shadow-2xl fixed z-40 px-14 md:px-20 lg:px-[134px]">
            <div className="w-full flex mx-auto container h-16 lg:h-20">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex items-center my-5">
                        <a 
                            href="/"
                            className="flex items-center"
                        >
                            <img 
                                src={logo} 
                                className="inline mr-4 w-[35px] lg:w-[44px]" 
                                alt="Logo Night Login" 
                            />
                            <h1 className="inline font-poppinsSemi text-xl lg:text-2xl text-white">
                                Night Login
                            </h1>
                        </a>
                    </div>
                    <div className="hidden lg:flex gap-x-12 xl:gap-x-16 font-poppinsMedium text-lg text-white">
                        {navButtons("Home", "/")}
                        {navButtons("About", "/about")}
                        <Menu 
                            as="div" 
                            className="relative inline-block text-left"
                        >
                            <div className="flex items-center text-white-NL hover:text-gray-200 cursor-pointer">
                                <Menu.Button className="font-poppinsMedium text-lg ">
                                    Event
                                </Menu.Button>
                                <ChevronDownIcon className="w-4 ml-2 text-white-NL hover:text-gray-200" />
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 mt-2 w-48 shadow-2xl font-poppinsRegular origin-top-right rounded bg-white focus:outline-none z-40">
                                    <div className="px-1 py-1.5 bg-white-NL rounded-full">
                                        {linksEvent.map((link) => (
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href={link.href}
                                                        className={`${
                                                        active ? 'grid bg-pink-NL text-white' : 'grid bg-white-NL text-black'
                                                        } group flex w-full items-center rounded-md px-4 py-1.5`}
                                                    >
                                                        {link.title}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                        </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu 
                            as="div" 
                            className="relative inline-block text-left"
                        >
                            <div className="flex items-center text-white-NL hover:text-gray-200 cursor-pointer">
                                <Menu.Button className="font-poppinsMedium text-lg ">
                                    Community
                                </Menu.Button>
                                <ChevronDownIcon className="w-4 ml-2 text-white-NL hover:text-gray-200" />
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute mt-2 w-36 font-poppinsRegular origin-top-right rounded bg-white shadow-2xl focus:outline-none z-40">
                                    <div className="px-1 py-1.5 bg-white-NL rounded-full">
                                        {linksCommunity.map((link) => (
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href={link.href}
                                                        className={`${
                                                        active ? 'grid bg-pink-NL text-white' : 'grid bg-white-NL text-black'
                                                        } group flex w-full items-center rounded-md px-4 py-1.5`}
                                                    >
                                                        {link.title}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                        </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <div className="flex lg:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						className="bg-red-NL inline-flex items-center justify-center rounded-md text-white-NL"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						{!isOpen ? (
							<svg
								className="block h-[25px] w-[25px]"
								xmlns="http://www.w3.org/2000/svg"
							    fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							) : (
							<svg
								className="block h-[25px] w-[25px]"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>
            </div>
            <Transition
				show={isOpen}
				enter="transition ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
                <div className="block" id="mobile-menu">
					<div className="w-full grid">
						<div className="grid justify-items-center pt-2 pb-5 space-y-5 font-poppinsMedium text-right text-sm sm:text-base cursor-pointer text-white-NL py-2">
							<a href="/" className=" hover:text-gray-200">
                                Home
							</a>
							<a href="/about" className=" hover:text-gray-200">
                                About
							</a>
							<Menu 
                                as="div" 
                                className="relative inline-block text-right"
                            >
                                <div className="flex justify-center items-center text-white-NL hover:text-gray-200 cursor-pointer">
                                    <Menu.Button className="font-poppinsMedium text-sm sm:text-base">
                                        Event
                                    </Menu.Button>
                                    <ChevronDownIcon className="w-4 ml-1 text-white-NL hover:text-gray-200" />
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="relative right-0 mt-2 w-48 shadow-2xl font-poppinsRegular origin-top-right rounded bg-white focus:outline-none z-40">
                                        <div className="px-1 py-1.5 bg-white-NL rounded-full text-sm sm:text-base text-center">
                                            {linksEvent.map((link) => (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href={link.href}
                                                            className={`${
                                                            active ? 'grid bg-pink-NL text-white' : 'grid bg-white-NL text-black'
                                                            } group flex w-full items-center rounded-md px-4 py-1.5`}
                                                        >
                                                            {link.title}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                            </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
							<Menu 
                                as="div" 
                                className="relative inline-block text-right"
                            >
                                <div className="flex justify-center items-center text-white-NL hover:text-gray-200 cursor-pointer">
                                    <Menu.Button className="font-poppinsMedium text-sm sm:text-base">
                                        Community
                                    </Menu.Button>
                                    <ChevronDownIcon className="w-4 ml-1 text-white-NL hover:text-gray-200" />
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="relative right-0 mt-2 w-30 shadow-2xl font-poppinsRegular origin-top-right rounded bg-white focus:outline-none z-40">
                                        <div className="px-1 py-1.5 bg-white-NL rounded-full text-sm sm:text-base text-center">
                                            {linksCommunity.map((link) => (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href={link.href}
                                                            className={`${
                                                            active ? 'grid bg-pink-NL text-white' : 'grid bg-white-NL text-black'
                                                            } group flex w-full items-center rounded-md px-4 py-1.5`}
                                                        >
                                                            {link.title}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                            </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
						</div>
					</div>
				</div>
			</Transition>
        </nav>
     );
}
 
export default Navbar;