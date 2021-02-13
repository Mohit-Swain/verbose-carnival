import React,{useState} from 'react';
import PropTypes from 'prop-types';
import OptionsDropDown from './OptionsDropDown/OptionsDropDown';
import SideBar from '../../../UI/SideBar/SideBar';
import PostMemesForm from '../../PostMemesForm/PostMemesForm';
import backendAxios from '../../../Axios/backendAxios';
function MemeCard(props){
    const [dropDownOpen,setDropDown] = useState(false);
    const [isOpenEditForm,setEditForm] = useState(false);
    const [memeState,changeMemeState] = useState({
                                        userName : props.meme.name,
                                        memeUrl : props.meme.url,
                                        memeCaption: props.meme.caption,
                                        loadingUrl : false
                                    });

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
                    <PostMemesForm parentState={memeState} handleInputChange={handleInputChange} handleSubmit={handleSubmit} editMode></PostMemesForm>
                </SideBar>
            ) : null}
            <div className="mx-auto px-4 py-6 max-w-xl rounded-md">
                <div className="bg-white shadow-2xl rounded-md" >
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