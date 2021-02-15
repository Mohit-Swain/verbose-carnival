import backendAxios from '../Axios/backendAxios';

function postImageImgur(file){
    if(!file){
        return new Promise((_,reject) => reject('no files given'));
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