import React,{useState} from 'react'
import metabnblogo from '../Assets/landingPageAssets/Grouplogo.png'
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const hamburgerMenuHandler = () =>{
    setMenu(!menu);
  }
  return (
    <div className=' py-8 px-3 md:px-[90px]'>
        <div className='flex items-center justify-between'>
            <img src={metabnblogo} className=' w-[150px] sm:w-[233px] h-[26px] sm:h-[36.67px]' height={""} alt="meta-bnb-logo" />
            <ul className=' hidden md:flex items-center justify-between'>
                <li className=' mx-[28px]'>Home</li>
                <li className=' mx-[28px]'>Place to stay</li>
                <li className=' mx-[28px]'>NFTs</li>
                <li className=' mx-[28px]'>Community</li>
            </ul>
            <button className=' lg:block hidden btn text-white px-5 py-2'>Connect Wallet</button>
            <div onClick={hamburgerMenuHandler} className=' md:hidden'>
                {!menu ? <GiHamburgerMenu className='text-[#A02279]' size={26} /> : <AiOutlineClose className='text-[#A02279]' size={26} /> }
            </div>
        </div>
    </div>
  )
}

export default Navbar