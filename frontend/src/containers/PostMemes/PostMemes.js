import React, {Component} from 'react';
import PostMemesForm from '../../components/PostMemesForm/PostMemesForm';
import PostMemesView from '../../components/PostMemesView/PostMemesView';
import postImageImgur from '../../utils/postImageImgur';
import backendAxios from '../../Axios/backendAxios';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        backendAxios.post('/memes',{
            name : this.state.userName,
            url : this.state.memeUrl,
            caption : this.state.memeCaption
        }).then(() => {
            alert('uploaded');
        })
        .catch(err => {
            alert('something went wrong');
            console.error(err);
        })
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
        // e is event or a file
        this.setState({
            loadingUrl : true
        });
        const myFile = (e.target ? e.target.files[0] : e);
        postImageImgur(myFile)
        .then(res => {
            this.setState({
                loadingUrl : false,
                memeUrl : res.data.data.link
            })
        })
        .catch(err => {
            alert('something went wrong');
            console.error(err);
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
                               updateImageUrl={this.updateImageUrl} handleSubmit={this.handleSubmit}/>
                <PostMemesView parentState={this.state}/>
            </div>
        );
    }
}


export default PostMemes;