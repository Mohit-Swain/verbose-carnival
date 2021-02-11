import React from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/
function AddPostIcon(props){
    const closeSvg = (<svg xmlns="http://www.w3.org/2000/svg" className="h-full z-40 w-full absolute top-0 md:top-5 transform hover:scale-110 text-gray-100 active:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>);
    const openSvg = ( <svg xmlns="http://www.w3.org/2000/svg"  
                        className="h-full z-40 w-full  absolute top-0 md:top-5 transform hover:scale-110
                            text-gray-100 active:text-green-500" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>)
    return (
        <div className=" flex-grow w-56 relative">
            <div className="w-full h-full bg-myviolet cursor-pointer hover:shadow-xl  box-content"
                    onClick={props.toggleDropDown}>
                {props.isDropDownOpen ? closeSvg : openSvg}
                <svg viewBox="0 0 200 200"  className=" absolute hidden md:block top-0 transform hover:scale-105" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#8A3FFC"  d="M57.8,-57.7C72.7,-42.9,81.1,-21.4,81.2,0.1C81.2,21.6,73,43.2,58.1,57.8C43.2,72.5,21.6,80.2,-0.2,80.4C-21.9,80.5,-43.8,73.1,-58.6,58.5C-73.3,43.8,-81,21.9,-80.5,0.5C-80,-21,-71.5,-41.9,-56.7,-56.7C-41.9,-71.5,-21,-80,0.2,-80.3C21.4,-80.5,42.9,-72.4,57.8,-57.7Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>
    )
}

AddPostIcon.propTypes = {
    toggleDropDown : PropTypes.func,
    isDropDownOpen: PropTypes.bool
};

export default AddPostIcon;