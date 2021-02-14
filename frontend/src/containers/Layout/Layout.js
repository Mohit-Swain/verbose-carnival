import React,{Component} from 'react';
import backendAxios from '../../Axios/backendAxios';
import TopBar from '../TopBar/TopBar';
import MainDropDown from '../../UI/MainDropDown/MainDropDown';
import PostMemes from '../PostMemes/PostMemes';
import MemeList from '../../components/MemeList/MemeList';
/*eslint-disable*/
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDropDownOpen : false,
            memeList : []
            
        };
        this.openDropDown = this.openDropDown.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    componentDidMount(){
        backendAxios
            .get('/memes')
            .then((res) => {
                this.setState({memeList : res.data})
            })
            .catch((err) => {
                alert(err.data ? err.data.message : err);
            })
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
                        <PostMemes  />
                    </MainDropDown>
                    <MemeList memeList={this.state.memeList}/>
            </>
        )
    }
}

export default Layout;