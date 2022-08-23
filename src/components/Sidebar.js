import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { FcAbout } from "react-icons/fc";

// components
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// data
import { links } from './../data/dummy';
import autoprefixer from 'autoprefixer';

// import state via context from custom hook

import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-2 mx-5  p-2  m-2 rounded-lg text-rose-800 text-md  hover:text-rose-600 hover:bg-rose-100';
  const normalLink = 'flex items-center gap-2  p-2  m-2 rounded-lg text-white text-gray-700 hover:bg-light-gray dark:text-gray-200 dark:hover:text-black ';
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }

  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 scrollbar-thin scrollbar-thumb-sky-100 scrollbar-track-white' >
      {activeMenu && (
        <>
          <div className="flex justify-between-items-center">
            <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">

              <SiShopware className="" />
              <span>Dashboard</span>
              <TooltipComponent content="Menu" position='RightCenter' className='ml-16'>
                <button type='button'
                  onClick={() => { setActiveMenu((prevActiveMenu) => (!prevActiveMenu)) }}
                  className='text-xl hover:drop-shadow-xl hover:bg-light-gray hover:text-sky-600 block md:hidden p-1' style={{ background: "white", borderRadius: "50%" }}>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>

            </Link>
          </div>


          <div className='mt-5'>
            {links.map((item, index) =>
            (
              <div key={index}>

                <div className='text-gray-400 mx-3 mt-3  uppercase flex'> {item.icon}<span>{item.title}</span></div>
                <div className=''>
                  {item.links.map((link, index) => (
                    <NavLink
                      key={index}
                      to={`${link.name}`}
                      onClick={handleCloseSidebar}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}

                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>

                  ))}

                </div>
              </div>
            )
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar