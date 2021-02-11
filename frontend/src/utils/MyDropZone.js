import React,{useState} from 'react';
import DropZone from 'react-dropzone';
import PropTypes from 'prop-types';
/*eslint-disable*/
function MyDropZone({children}){
    const [myFile,setFile] = useState(null);
    const onDrop = (file) => {
        setFile(file);
        alert(myFile);
    }
    // const loadingUi = ( <div  className="md:my-4 mx-16 md:px-16 py-2 md:py-2 md:border-2 md:border-green-400 
    // md:rounded-md md:border-dashed text-6xl">Drop It...</div>);

    return (
        <DropZone className="dropzone" accept={'image/*'} onDrop={onDrop} noClick>
          {({getRootProps,getInputProps,isDragActive}) => children}
        </DropZone>
    )
}

MyDropZone.propTypes = {
    children : PropTypes.element
}

export default MyDropZone;