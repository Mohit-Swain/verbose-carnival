import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLogo from '../../components/NavLogo/NavLogo';
import AddPostIcon from '../../UI/AddPostIcon/AddPostIcon';
import NavLinks from './NavLinks/NavLinks';

class TopBar extends Component{
    render(){
        return (
            <header className="fixed z-20 top-0">
                <nav className="h-16  align-middle bg-bluegray-100 flex flex-nowrap w-screen justify-around">
                    <NavLogo />
                    <AddPostIcon isDropDownOpen={this.props.isDropDownOpen} toggleDropDown={this.props.toggleDropDown} />
                    <NavLinks />
                </nav>
            </header>
        )
    }
}

TopBar.propTypes = {
    toggleDropDown : PropTypes.func,
    isDropDownOpen : PropTypes.bool
}
export default TopBar;