import React,{useState} from 'react';
import PropTypes from 'prop-types';
import OptionsDropDown from './OptionsDropDown/OptionsDropDown';
import SideBar from '../../../UI/SideBar/SideBar';
import PostMemesForm from '../../PostMemesForm/PostMemesForm';
import backendAxios from '../../../Axios/backendAxios';
import postImageImgur from '../../../utils/postImageImgur';
function MemeCard(props){
    const [dropDownOpen,setDropDown] = useState(false);
    const [isOpenEditForm,setEditForm] = useState(false);
    const [memeState,changeMemeState] = useState({
                                        userName : props.meme.name,
                                        memeUrl : props.meme.url,
                                        memeCaption: props.meme.caption,
                                        loadingUrl : false
                                    });

    const updateImageUrlImgur = (e) => {
      // e is event or a file
      console.log('bebe');
      changeMemeState((prevState) => {
        let newState = {...prevState};
        newState.loadingUrl = true;
        return newState;
      });
      const myFile = (e.target ? e.target.files[0] : e);
      console.log(e);
      postImageImgur(myFile)
      .then(res => {
        changeMemeState((prevState) => {
          let newState = {...prevState};
          newState.memeUrl = res.data.data.link;
          newState.loadingUrl = false;
          return newState;
      });
      })
      .catch(err => {
          alert('something went wrong');
          console.error(err);
          changeMemeState((prevState) => {
            let newState = {...prevState};
            newState.loadingUrl = false;
            return newState;
          });
 
      })
  }

    const handleInputChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if(name === 'userName'){
            return;
        }
        changeMemeState({
            ...memeState,
            [name] : value
        })
    }
    const handleSubmit = () => {
        const obj = {
            name : memeState.userName,
            url : memeState.memeUrl,
            caption : memeState.memeCaption
        };

        backendAxios
            .patch('/memes/'+props.meme.id,obj)
            .then(() => {
                alert('updated');
                setEditForm(false);
            })
            .catch(err => {
                alert('something went wrong');
                console.error(err);
            })
    }
    const addEmoji = (emoji) => {
      changeMemeState((prevState) => {
          let newState = {...memeState};
          newState.memeCaption = prevState.memeCaption + emoji;
          return newState;
      });
  }
    const openEditForm = () => {
        setDropDown(false);
        setEditForm(true);
    }

    const closeEditForm = () => {
        setEditForm(false);
    }

    const toggleDropDown = () => {
        setDropDown((prev) => !prev);
    }

    return (
        <>
            {isOpenEditForm ? ( 
                <SideBar isOpened={isOpenEditForm} closeSideBar={function(){closeEditForm()}}>
                    <PostMemesForm parentState={memeState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} 
                      updateImageUrl={updateImageUrlImgur} addEmoji={addEmoji} editMode></PostMemesForm>
                </SideBar>
            ) : null}
            <div className="mx-auto px-4 py-6 max-w-full md:max-w-xl rounded-md">
                <div className="bg-white shadow-2xl rounded-md break-words" >
                    <div className="px-4 py-2 mt-2 bg-white">
                        <div className="user relative flex items-center mt-2 mb-4">
                            {<OptionsDropDown openEditForm={openEditForm} toggleDropDown={toggleDropDown} dropDownOpen={dropDownOpen}/>}
                                <span className="text-gray-700 text-lg">- {props.meme.name}</span>
                        </div>
                        <h2 className="font-bold text-xl text-gray-800">{props.meme.caption}</h2>
                    </div>
                    <div className="my-2 border-t-2 border-gray-300">
                        <img src={props.meme.url} />
                    </div>
                </div>
            </div>
        </>
    )
}

MemeCard.propTypes = {
    meme : PropTypes.object.isRequired
};
export default MemeCard;