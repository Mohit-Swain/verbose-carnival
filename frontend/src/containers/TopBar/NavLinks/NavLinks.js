import React , { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SideBar from '../../../UI/SideBar/SideBar';
import ContactUsForm from '../../../components/ContactUsForm/ContactUsForm';
import Leaderboard from '../../../components/LeaderboardTable/LeaderboardTable';
function NavButton(props){
    return(
        <button onClick={props.onClick} className="h-12 p-2 active:shadow-md text-lg
                            hover:bg-purple-600 md:hover:elevation-3 hover:text-gray-50 hover:underline 
                            hover:font-semibold rounded-md">
            { props.children }
        </button>
    )
}

NavButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}


/*eslint-disable*/
class NavLinks extends Component{
    constructor(props){
        super(props);
        this.state = {
            isListOpen : false,
            isOpenContactUs : false,
            isOpenLeaderboard : false
        }
        this.dropDownRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.closeContactForm = this.closeContactForm.bind(this);
        this.openContactForm = this.openContactForm.bind(this);
        this.closeLeaderboard = this.closeLeaderboard.bind(this);
        this.openLeaderboard = this.openLeaderboard.bind(this);
    }
    componentDidMount(){
        document.addEventListener("click", this.handleClick);
    }
    componentWillUnmount(){
        document.removeEventListener("click", this.handleClick);
    }
    
    handleClick(e) {
        if (this.dropDownRef && this.dropDownRef.current.contains(e.target)) {
            // inside click
            return;
        }
        this.closeDropDown();
    };

    handleOptionsClick(e){
        e.stopPropagation();
        this.setState((prevState) => {
            return {isListOpen : !prevState.isListOpen}
        });
    }
    closeDropDown(){
        this.setState({
            isListOpen : false
        });
    }

    closeContactForm(){
      this.setState({
        isOpenContactUs  : false
      });
    }

    openContactForm(e){
      console.log('open');
      e.stopPropagation();
      this.setState({
        isOpenContactUs  : true
      });
    }

    closeLeaderboard(){
      this.setState({
        isOpenLeaderboard  : false
      });
    }

    openLeaderboard(){
      this.setState({
        isOpenLeaderboard : true
      });
    }
    render(){
        const downIcon = (<svg xmlns="http://www.w3.org/2000/svg" className=" w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>);

        const upIcon = (<svg xmlns="http://www.w3.org/2000/svg" className=" w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>)

        const icon = (this.state.isListOpen ? upIcon : downIcon);
        const navButtonClasses = classNames('absolute flex flex-col top-16 border-2 border-green-100 elevation-4',
                                            ' md:elevation-0 md:border-0 md:static md:block bg-bluegray-100 md:bg-transparent',
                                            {'hidden' : !this.state.isListOpen});

        return (
          <>
            <div ref={this.dropDownRef} className="bg-yellow-200 flex w-full justify-end md:space-x-3 items-center px-4 md:px-10
                                whitespace-nowrap font-mono select-none relative transition-all">
                <div className="h-full space-x-2 md:hidden bg-green-300 flex items-center px-4 
                                cursor-pointer hover:bg-green-500 hover:shadow-md hover:font-semibold"
                    onClick={(e) => this.handleOptionsClick(e)}>
                    <div>
                        Options
                    </div>
                    <div>
                        {icon}
                    </div>
                </div>                
                <div  className={navButtonClasses}>
                    <NavButton onClick={this.openLeaderboard}>
                        Leader_Board
                    </NavButton>
                    <NavButton onClick={this.openContactForm}>
                        Contact_Us
                    </NavButton>
                </div>   
                
            </div>
            {
              this.state.isOpenContactUs ? (
                <SideBar isOpened={this.state.isOpenContactUs} closeSideBar={this.closeContactForm}>
                <ContactUsForm />
              </SideBar>
              ) : null
            }
            {
              this.state.isOpenLeaderboard ? (
                <SideBar isOpened={this.state.isOpenLeaderboard} closeSideBar={this.closeLeaderboard}>
                  <Leaderboard/>
                </SideBar>
              ) : null
            }
          </>
        )
    }
}

/*eslint-enable*/
export default NavLinks;