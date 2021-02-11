import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
function MainDropDown(props){
    const topNode = useRef();

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    
    
    const handleClick = e => {
        if (topNode.current && topNode.current.contains(e.target)) {
            // inside click
            return;
        }
        props.closeDropDown();
    };

    const mainClasses = classNames({'-top-3/4' : !props.isDropDownOpen,
                                    'top-16':  props.isDropDownOpen},
                        "transition-all duration-500 fixed h-5/6 md:h-3/4 w-full z-10  bg-transparent")

    return (
        <div className={mainClasses}  ref={topNode}>
            <div className="border-4 border-t rounded-md relative h-full w-11/12 md:w-5/6 mx-auto
                         md:border-b-60 border-indigo-400 elevation-4 ">
                {props.children}
            </div>
        </div>
    )
}

MainDropDown.propTypes = {
    children : PropTypes.element,
    isDropDownOpen : PropTypes.bool,
    closeDropDown : PropTypes.func
}

export default MainDropDown;