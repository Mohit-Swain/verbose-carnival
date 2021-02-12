import React from 'react';
import PropTypes from 'prop-types';
function OptionsDropDown(props) {
    return (
        <div className="absolute right-0">
        <div className="flex items-center my-32">

        <div  className="relative">
            <button onClick={props.toggleDropDown}  className="z-10 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 elevation-2 hover:elevation-0">
            <svg  className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            </button>
            {
                props.dropDownOpen ? 
                (<div className="absolute right-0 md:left-0 md:right-auto mt-2 w-48 bg-white rounded-md overflow-hidden elevation-6 z-20 tracking-wide">
                    <ul>    
                        <li onClick={props.openEditForm} className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200 cursor-pointer">Edit </li>
                        <li className="block px-4 py-2 text-sm text-red-400 border-b hover:bg-gray-200 cursor-pointer">Report </li>
                    </ul>
                </div>) 
                : null
            }
        </div>
        </div>
        </div>
    );    
}

OptionsDropDown.propTypes = {
    dropDownOpen : PropTypes.bool,
    toggleDropDown : PropTypes.func,
    openEditForm : PropTypes.func,
    closeEditForm : PropTypes.func
}

export default OptionsDropDown;