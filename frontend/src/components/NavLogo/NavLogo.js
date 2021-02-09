import React from 'react';
import doge from '../../assets/images/doge.png';
function NavLogo(){
    return (
        <div className=" bg-blue-200   flex w-full items-center  md:justify-center">
            <img src={doge} alt="Meme App logo" 
                className="h-full mx-4 border-2 border-transparent hover:border-yellow-300 rounded-3xl"/>
            
            <div className=" md:font-mono md:font-semibold md:text-lg hidden md:block hover:text-xl whitespace-nowrap">
                Meme_App
            </div>
        </div>
    )
}

export default NavLogo;