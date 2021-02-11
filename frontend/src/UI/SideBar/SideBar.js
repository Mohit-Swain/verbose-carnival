import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
/*eslint-disable*/
function SideBar(){
    const [isSideBarOpen, changeSideBar ] = useState(false);
    let topRef = useRef();
    useEffect(()=>{
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    },[])

    const handleClick = e => {
        if (topRef.current && topRef.current.contains(e.target)) {
            // inside click
            return;
        }
        changeSideBar(false);
    }
    const asideClasses = classNames("transform top-0 right-0 w-2/3 md:w-5/12 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",
                {'translate-x-0' : isSideBarOpen,'translate-x-full' : !isSideBarOpen});
    return(
        <aside ref={topRef}
            className={asideClasses}>
        </aside>


    )

}


export default SideBar;