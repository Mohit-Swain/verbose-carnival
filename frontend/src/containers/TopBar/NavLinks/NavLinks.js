import React , { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
function NavButton({children}){
    return(
        <button className="h-12 p-2 active:shadow-md 
                            hover:bg-purple-600 md:hover:elevation-3 hover:text-gray-50 hover:underline 
                            hover:font-semibold rounded-md">
            { children }
        </button>
    )
}

NavButton.propTypes = {
    children: PropTypes.element.isRequired
}


/*eslint-disable*/
class NavLinks extends Component{
    constructor(props){
        super(props);
        this.state = {
            isListOpen : false
        }
    }
    

    handleClick(){
        this.setState((prevState) => {
            return {isListOpen : !prevState.isListOpen}
        });
    }
    render(){
        const downIcon = (<svg xmlns="http://www.w3.org/2000/svg" className=" w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>);

        const upIcon = (<svg xmlns="http://www.w3.org/2000/svg" className=" w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>)

        let icon = (this.state.isListOpen ? upIcon : downIcon);
        const navButtonClasses = classNames('z-30 absolute flex flex-col top-16 border-2 border-green-100 elevation-4',' md:elevation-0 md:border-0 md:static md:block',{'hidden' : !this.state.isListOpen});

        return (
            <div className="bg-yellow-200 flex w-full justify-end md:space-x-3 items-center px-4 md:px-12
                                whitespace-nowrap font-mono select-none relative">
                <div className="h-full space-x-2 md:hidden bg-green-300 flex items-center px-4 
                                cursor-pointer hover:bg-green-500 hover:shadow-md hover:font-semibold"
                    onClick={() => this.handleClick()}>
                    <div>
                        Options
                    </div>
                    <div>
                        {icon}
                    </div>
                </div>                
                <div className={navButtonClasses}>
                    <NavButton>
                        Leader Board
                    </NavButton>
                    <NavButton>
                        Contact us
                    </NavButton>
                </div>   
                
            </div>
        )
    }
}

/*eslint-enable*/
export default NavLinks;