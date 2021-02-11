import React, {Component} from 'react';
import PostMemesForm from '../../components/PostMemesForm/PostMemesForm';
import PostMemesView from '../../components/PostMemesView/PostMemesView';
import postImageImgur from '../../utils/postImageImgur';
/*eslint-disable*/

function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
 }
 
class PostMemes extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName : '',
            memeUrl : '',
            memeCaption: '',
            loadingUrl : false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addEmoji = this.addEmoji.bind(this);
        this.updateImageUrl = this.updateImageUrl.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if(name === 'userName'){
            value = capitalizeTheFirstLetterOfEachWord(value);
        }
        this.setState({
            [name] : value
        })
    }
    updateImageUrl(e){
        this.setState({
            loadingUrl : true
        });
        const myFile = (e.target ? e.target.files[0] : e);
        postImageImgur(myFile)
        .then(res => {
            console.log(res);
            console.log(res.data.data.link);
            this.setState({
                loadingUrl : false,
                memeUrl : res.data.data.link
            })
        })
        .catch(err => {
            alert(err.status + '-' + err.statusText);
            this.setState({loadingUrl : false});
        })
    }
    addEmoji(emoji){
        this.setState((prevState) => {
            return {
                memeCaption : prevState.memeCaption + emoji
            };
        });
    }
    
    render(){
        return(
            <div className="h-full flex flex-wrap flex-col md:flex-row items-stretch divide-y-2 md:divide-x-2 divide-bluegray-300">
                <PostMemesForm handleInputChange={this.handleInputChange} parentState={this.state} addEmoji={this.addEmoji}
                               updateImageUrl={this.updateImageUrl} />
                <PostMemesView parentState={this.state}/>
            </div>
        );
    }
}

export default PostMemes;