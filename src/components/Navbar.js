import React, { useEffect } from 'react';
// icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

//url
import avatar from '../data/avatar.jpg';
// components
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';

// data
import { useStateContext } from '../contexts/ContextProvider';

const NavbarButton = ({ title, customFunc, icon, color, dotColor }) => (
  
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-50 p-3 hover:drop-shadow-xl hover:bg-light-gray hover:text-sky-600"
    >
    <span style={{background:dotColor}} className="absolute inline-flex rounded h-2 w-2 right-2 top-2"></span>

      {icon}
    </button>
  </TooltipComponent>
);



const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();


  useEffect(()=>{

    const handleScreenSize =()=>{
      setScreenSize(window.innerWidth);
    }

    window.addEventListener('resize',handleScreenSize);
    handleScreenSize();

    return()=>{
      window.removeEventListener('resize',handleScreenSize);
    }

  },[]);

  useEffect(()=>{

    if(screenSize<=900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }

  },[screenSize]);



  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavbarButton title="Menu" customFunc={() => { setActiveMenu((prevActiveMenu) => (!prevActiveMenu)) }} color="black" icon={<AiOutlineMenu />} />

      <div className='flex'>

        <NavbarButton title="Cart" customFunc={() => handleClick('cart')} color="black" icon={<FiShoppingCart />} />
        <NavbarButton title="Chat" dotColor="red" customFunc={() => { handleClick('chat')}} color="black" icon={<BsChatLeft />} />
        <NavbarButton title="Notification" dotColor="red" customFunc={() => { handleClick('notification') }} color="black" icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex item-center cursor-pointer gap-3 p-2 rounded-lg  hover:bg-light-gray" onClick={()=>handleClick('userProfile')}>
            <img src={avatar} alt="avatar" className="rounded-lg w-8 h-8"/>
            <p>
              <span className='text-sky-400 text-14'>Hi,</span>{}
              <span className='text-sky-600 text-16 ml-2'>Hein</span>
            </p>
            <MdKeyboardArrowDown className='text-16 mt-1'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar