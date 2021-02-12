const MemeSchema = require('../utils/memeSchema');

exports.getMemes = () => {
    return new Promise((resolve,reject) =>{
        MemeSchema.findAll({
            attributes : ['id','name','url','caption'],
            limit : 100,
            order: [['createdAt','DESC']]
        })
        .then(memes => {
            console.log(memes);
            if(!memes){
                reject(new Error('Something went wrong with DB'));
            }
            return resolve(memes);
        })
        .catch(err => {
            reject(err);
        })
    })
}

exports.postMemes = (obj) => {
    return new Promise((resolve,reject) => {
        MemeSchema.findOne({ where : obj})
            .then(meme => {
                if(meme){
                    const error = new Error('meme already present in DataBase');
                    error.code = 409;
                    reject(error);
                }
                else{
                    return MemeSchema.create(obj)
                    .then(meme =>{
                        resolve(meme);
                    })
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.patchMemes = (id,obj) => {
    return new Promise((resolve,reject) => {
        MemeSchema.findOne({ where : {id : id}})
            .then(meme => {
                if(!meme){
                    resolve(null);
                }
                else{
                    if(obj.url) meme.url = obj.url;
                    if(obj.caption) meme.caption = obj.caption;
                    return meme.save();
                }
            })
            .then(updatedMeme => resolve(updatedMeme))
            .catch(err => {
                reject(err);
            })
    }) 
}