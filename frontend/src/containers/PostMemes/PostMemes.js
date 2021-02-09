import React, {Component} from 'react';
import PostMemesForm from '../../components/PostMemesForm/PostMemesForm';
import PostMemesView from '../../components/PostMemesView/PostMemesView'
class PostMemes extends Component {
    render(){
        return(
            <div className="h-full flex flex-wrap flex-col md:flex-row items-stretch divide-y-2 md:divide-x-2 divide-bluegray-300">
                <PostMemesForm />
                <PostMemesView />
            </div>
        );
    }
}

export default PostMemes;