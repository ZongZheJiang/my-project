import React, {useState} from 'react';
import {menu, close, logo} from "../assets";
import {Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';



const NavBar = () => {
    const navigate = useNavigate();
    const [toggle,setToggle]=useState(true);
    const handleClick = ()=>{
        setToggle(!toggle);
        console.log("Toggle state:", !toggle);
    }

    return (
        <div className="navbar bg-base-300 shadow-lg fixed top-0 z-50" style={{height: '70px'}}>
            <div className='container mx-auto flex justify-between items-center w-full h-full'>
                <div>
                    <Link to="/">
                        <img src={logo} alt='logo' className='w-[50px] h-[50px]' />
                    </Link>
                </div>
                
                {/* Option 2: Use navigate function with buttons */}
                <button className="btn btn-soft" onClick={() => navigate('/projects')}>
                    Projects
                </button>
                <button className="btn btn-soft" onClick={() => navigate('/about')}>
                    About Me
                </button>

                
                <div onClick={handleClick}>
                    <img src={!toggle ? menu : close} alt='menu' className='w-[30px] h-[30px]' />
                </div>
                {/* <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'} style = {{display: toggle ? 'block' : 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                </ul> */}
            </div>
            
        </div>
    );
}

export default NavBar;