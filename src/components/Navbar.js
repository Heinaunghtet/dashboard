import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavbarButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-50 p-3 hover:drop-shadow-xl hover:bg-light-gray hover:text-sky-600"
    >

      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {

  const { activeMenu, setActiveMenu } = useStateContext();


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavbarButton title="Menu" customFunc={() => { setActiveMenu((prevActiveMenu) => (!prevActiveMenu)) }} color="black" icon={<AiOutlineMenu />} />

    </div>
  )
}

export default Navbar