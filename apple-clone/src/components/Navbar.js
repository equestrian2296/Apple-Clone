"use client";

import Image from "next/image";
import apple from "../../public/assets/images/apple.svg";
import bag from "../../public/assets/images/bag.svg";
import search from "../../public/assets/images/search.svg";

import { navMenu } from "./NavMenu";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".menu-container")) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (openMenu !== null) {
      document.body.classList.add("blurred");
    } else {
      document.body.classList.remove("blurred");
    }
  }, [openMenu]);

  return (
    <>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black text-white">
        <nav className="flex w-full screen-max-width relative">
          <Image src={apple} alt="Apple" width={14} height={18} />

          <div className="flex flex-1 justify-center max-sm:hidden">
            {navMenu.map((menu, index) => (
              <div
                key={index}
                className="relative px-5 text-sm cursor-pointer text-gray hover:text-white transition-all menu-container"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === index ? null : index);
                  }}
                >
                  {menu.title}
                </div>

                {openMenu === index && (
                  <>
                    {/* Full-Screen Background Overlay */}
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40"></div>

                    {/* Floating Dropdown Menu */}
                    <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-4 z-50 w-[600px]">
                      <div className="bg-black text-white p-10 shadow-lg rounded-lg flex flex-col gap-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="flex flex-col gap-2">
                            <h4 className="text-gray-400 uppercase text-xs">Shop</h4>
                            {menu.links.map((link, idx) => (
                              <Link
                                key={idx}
                                href={link.href}
                                className="block py-1 text-lg font-semibold hover:text-gray-400"
                              >
                                {link.text}
                              </Link>
                            ))}
                          </div>

                          <div className="flex flex-col gap-2">
                            <h4 className="text-gray-400 uppercase text-xs">Quick Links</h4>
                            <Link href="#" className="block py-1 hover:text-gray-400">
                              Find a Store
                            </Link>
                            <Link href="#" className="block py-1 hover:text-gray-400">
                              Order Status
                            </Link>
                            <Link href="#" className="block py-1 hover:text-gray-400">
                              Apple Trade In
                            </Link>
                          </div>

                          <div className="flex flex-col gap-2">
                            <h4 className="text-gray-400 uppercase text-xs">Special Stores</h4>
                            <Link href="#" className="block py-1 hover:text-gray-400">
                              Education
                            </Link>
                            <Link href="#" className="block py-1 hover:text-gray-400">
                              Business
                            </Link>
                            <Link href="#" className="block py-1 hover:text-gray-400">
                              Government
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <Image src={search} alt="search" width={18} height={18} />
            <Image src={bag} alt="bag" width={18} height={18} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
