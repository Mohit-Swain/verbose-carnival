import React,{useState, useRef} from 'react';
import Picker from 'emoji-picker-react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropZone from 'react-dropzone';
function PostMemesForm(props){
    const imageFileRef = useRef();
    const emojiSvg = (<svg xmlns="http://www.w3.org/2000/svg" className="w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>)
    const [isEmojiPickerOpen,changeEmojiPicker] = useState(false);
    
    const onDrop = (files) => {
        props.updateImageUrl(files[0]);
    }

    return (
        <section className={"md:flex-divide md:h-full w-full bg-blue-100 overflow-auto " + (props.editMode ? 'h-full' : 'h-2/3') }>
            <DropZone onDrop={onDrop} noClick>
                {({getRootProps,getInputProps,isDragActive}) => (
                    <div {...getRootProps()}  >
                        <div  className={classNames({'hidden' : !isDragActive},"border-4 md:border-green-400 py-52 mx-16 md:my-4 md:rounded-md md:border-dashed  text-6xl text-center font-mono")}>Drop It...</div>
                        <div  className={classNames({'hidden' : isDragActive},"md:my-4 mx-16 md:px-16 py-2 md:pt-0 md:border-2 md:border-purple-400 md:rounded-md md:border-dashed ")}>

                        <form name="postMemes" encType="multipart/form-data">
                            <h2 className="text-lg md:text-2xl my-2 md:my-3 font-bold font-mono text-center leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                {props.editMode ? 'Edit Meme' :'Add New Memes...'}
                            </h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Your Name:
                                </label>
                                <input name="userName" 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline capitalize disabled:opacity-50" 
                                    type="text" placeholder="User Name" autoComplete="off" required
                                    value={props.parentState.userName} onChange={props.handleInputChange} 
                                    disabled={props.editMode}  
                                />
                            </div>
                                <div className="mb-4 border-2 rounded border-dashed border-gray-800 px-4 py-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Meme URL: <span className="text-gray-400">or DropFile</span>
                                    </label>
                                    <input name="memeUrl" 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        type="url" placeholder="ex. https://i.imgur.com/1GVIKve.png" required 
                                        value={props.parentState.memeUrl} onChange={props.handleInputChange}
                                    />
                                    <div className="w-full text-center flex items-center py-1">
                                        <hr className="w-full border-gray-400"/>
                                        <span className="w-1/6 text-xm md:text-sm  text-gray-500 font-mono">Or</span>
                                        <hr className="w-full  border-gray-400"/>
                                    </div>
                                    <label className="flex justify-center py-1 px-3 text-gray-700 leading-tight" htmlFor="imageUpload">
                                        {(!props.editMode && props.parentState.loadingUrl) ? (<span className="text-green-500">Loading...</span>) :(<span>Drop a File Or <span className="underline font-mono cursor-pointer hover:text-blue-400">Click Here</span> to Upload </span>)}
                                    </label>
                                    <input {...getInputProps()} name="imageFile" type="file" ref={imageFileRef} id="imageUpload" accept="image/*" 
                                    className=" hidden py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={props.updateImageUrl}
                                    />
                                </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                            Meme Caption:
                            <div className="relative">
                                <textarea name="memeCaption" 
                                    className="shadow resize-none form-textarea mt-1 block w-full h-3/4 md:h-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    rows="5" placeholder="Give a Caption for the meme..." 
                                    value={props.parentState.memeCaption} onChange={props.handleInputChange}
                                />
                                <div className="absolute bottom-1">
                                    <div className="relative">
                                        <div className={classNames("absolute left-8",{'hidden' : !isEmojiPickerOpen})}>
                                            <Picker native onEmojiClick={(_,obj) => props.addEmoji(obj.emoji)}/>
                                        </div>
                                        <span className="cursor-pointer"
                                        onClick={() => changeEmojiPicker(prevState => !prevState)}>{emojiSvg}</span>
                                    </div>
                                </div>
                                
                            </div>
                            </label>
                            </div>
                            {!props.editMode && (
                                <div className="mb-4 float-right">
                                <label className="block">
                                <input className="mr-2 leading-tight" type="checkbox"/>
                                <span className="text-sm">
                                    Remember Me
                                </span>
                                </label>
                                </div>
                            ) }
                            
                            <div className="flex items-center justify-start">
                                <button onClick={props.handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                )}
            </DropZone>
        </section>
    )
}
PostMemesForm.propTypes ={
    parentState : PropTypes.object,
    handleInputChange : PropTypes.func,
    addEmoji : PropTypes.func,
    updateImageUrl : PropTypes.func,
    handleSubmit : PropTypes.func,
    editMode : PropTypes.bool
};

export default PostMemesForm;