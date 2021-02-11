import React,{Component} from 'react';

import TopBar from '../TopBar/TopBar';
import MainDropDown from '../../UI/MainDropDown/MainDropDown';
import PostMemes from '../PostMemes/PostMemes';
import SideBar from '../../UI/SideBar/SideBar';
import MemeList from '../../components/MemeList/MemeList';
/*eslint-disable*/
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDropDownOpen : false,
            memeList : [

                {
            
            "id": "1",       
            
            "name": "MS Dhoni",
            
            "url": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",
            
            "caption": "Meme for my place"
            
                },
            
                {
            
            "id": "2",
            
            "name": "Viral Kohli",
            
            "url": "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
            
            "caption": "Another home meme"
            
                }
            
              ]
            
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
                
        return (
            <>
                <TopBar isDropDownOpen={this.state.isDropDownOpen} toggleDropDown={this.toggleDropDown}/>
                <MainDropDown isDropDownOpen={this.state.isDropDownOpen} closeDropDown={this.closeDropDown}>
                    <PostMemes />
                </MainDropDown>
                <SideBar />
                <MemeList memeList={this.state.memeList}/>
                
            </>
        )
    }
}

export default Layout;