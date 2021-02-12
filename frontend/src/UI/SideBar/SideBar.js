import React, {useEffect, useRef} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function SideBar(props){
    let topRef = useRef();
    

    const handleClick = (e) => {
        if (topRef.current && topRef.current.contains(e.target)) {
            // inside click
            return;
        }
        
        props.closeSideBar();
    }    
    
    useEffect(()=>{
        if(props.isOpened){
            document.body.style.overflow = 'hidden';
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
            document.body.style.overflow = 'unset';            
        }
    },[]);

    const asideClasses = classNames("transform top-0 px-4 py-8 right-0 w-3/4 md:w-5/12 bg-violet-200 elevation-5 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-40 top-16",
                {'translate-x-0' : props.isOpened,'translate-x-full' : !props.isOpened});
    return(
        <aside ref={topRef} className={asideClasses}>
            <button onClick={props.closeSideBar} className=" absolute my-2 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 elevation-2 hover:elevation-0">
                <svg xmlns="http://www.w3.org/2000/svg" className=" text-gray-200 w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            {props.children}
        </aside>
    )

}

SideBar.propTypes = {
    isOpened : PropTypes.bool.isRequired,
    children : PropTypes.element,
    closeSideBar : PropTypes.func.isRequired
}


export default SideBar;