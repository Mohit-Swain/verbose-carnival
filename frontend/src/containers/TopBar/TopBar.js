import React, { Component } from 'react';

import NavLogo from '../../components/NavLogo/NavLogo';
import AddPostIcon from '../../UI/AddPostIcon/AddPostIcon';
import NavLinks from './NavLinks/NavLinks';

/*eslint-disable*/
class TopBar extends Component{
    constructor(props){
        super(props);
        this.setState({
            isListOpen : 0
        })
    }
    render(){
        
        
        return (
            <header className="fixed top-0">
                <nav className="h-16  align-middle bg-bluegray-100 flex flex-nowrap w-screen justify-around">
                    <NavLogo />
                    <AddPostIcon />
                    <NavLinks />
                </nav>
            </header>
        )
    }
}
/* eslint-enable */
export default TopBar;