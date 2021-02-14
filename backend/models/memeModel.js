const MemeSchema = require('./memeSchema');
const sequelize = require('sequelize');
exports.getMemes = () => {
    return new Promise((resolve,reject) =>{
        MemeSchema.findAll({
            attributes : ['id','name','url','caption'],
            limit : 100,
            order: [['createdAt','DESC']]
        })
        .then(memes => {
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
                    meme.url = obj.url;
                    meme.caption = obj.caption;
                    return meme.save();
                }
            })
            .then(updatedMeme => resolve(updatedMeme))
            .catch(err => {
                reject(err);
            })
    }) 
}

exports.getMemeUsers = () => {
  return new Promise((resolve,reject) => {
    
    MemeSchema.findAll({
      attributes : ['name',[sequelize.fn('COUNT','*'),'memeCount']],
      group: 'name',
      raw: true
    })
    .then(result => {
        result = result.map(item => {
          return {
            name : item.name,
            memeCount : parseInt(item.memeCount)
          }
        });
        result.sort((a,b)=> b.memeCount - a.memeCount);
        resolve(result);
    })
    .catch(err => {
      reject(err);
    })
  })
}

exports.getOneMeme = (id) => {
    return new Promise((resolve,reject) => {
        MemeSchema.findByPk(id)
        .then(data => resolve(data))
        .then(err => reject(err));
    })
}