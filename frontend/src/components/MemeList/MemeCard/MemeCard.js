import React,{useState} from 'react';
import PropTypes from 'prop-types';
import OptionsDropDown from './OptionsDropDown/OptionsDropDown';
/*eslint-disable*/
function MemeCard(props){
    const [dropDownOpen,setDropDown] = useState(false);
    const toggleDropDown = () => {
        setDropDown((prev) => !prev);
    }
    return (
        <div className="mx-auto px-4 py-6 max-w-xl rounded-md">
            <div className="bg-white shadow-2xl rounded-md" >
                <div className="px-4 py-2 mt-2 bg-white">
                    <div className="user relative flex items-center mt-2 mb-4">
                        <OptionsDropDown toggleDropDown={toggleDropDown} dropDownOpen={dropDownOpen}/>
                            <span className="text-gray-700">-{props.meme.name}</span>
                    </div>
                    <h2 className="font-bold text-xl text-gray-800">{props.meme.caption}</h2>
                </div>
                <div className="my-2 border-t-2 border-gray-300">
                    <img src={props.meme.url} />
                </div>
            </div>
        </div>
    )
}
MemeCard.propTypes = {
    meme : PropTypes.object
};
export default MemeCard;