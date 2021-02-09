import React,{Component} from 'react';

import TopBar from '../TopBar/TopBar';
import MainDropDown from '../../UI/MainDropDown/MainDropDown';
import PostMemes from '../PostMemes/PostMemes';
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDropDownOpen : false
        };
        this.openDropDown = this.openDropDown.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    closeDropDown() {
        this.setState({
            isDropDownOpen : false
        });
    }
    openDropDown(e){
        e.stopPropagation();
        this.setState({
            isDropDownOpen : true
        });
    }

    toggleDropDown(e){
        e.stopPropagation(); 
        this.setState((prevState) => {
            return {
                isDropDownOpen : !prevState.isDropDownOpen
            }
        })
    }
    render(){
        const styles = {
            height: '120vh',
            width : '96px',
            backgroundColor : '#aaa'
        };
        
        return (
            <>
                <TopBar isDropDownOpen={this.state.isDropDownOpen} toggleDropDown={this.toggleDropDown}/>
                <MainDropDown isDropDownOpen={this.state.isDropDownOpen} closeDropDown={this.closeDropDown}>
                    <PostMemes />
                </MainDropDown>
                <div className="bg-blue-200"> TopBar, Memes </div>
                <div style={styles}>div</div>
                
            </>
        )
    }
}

export default Layout;