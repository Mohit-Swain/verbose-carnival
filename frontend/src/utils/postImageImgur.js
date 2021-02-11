import backendAxios from '../Axios/backendAxios';

function postImageImgur(file){
    if(!file){
        return null;
    }
    const data = new FormData();
    data.append('image',file);
    
    return backendAxios({
        method : 'post',
        url : '/imgurUpload',
        data : data
    });
}

export default postImageImgur;