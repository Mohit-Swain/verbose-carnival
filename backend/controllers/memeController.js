const memeModel = require('../models/memeModel.js')
/*eslint-disable*/

exports.getMemes = async (req,res,next) => {
    memeModel.getMemes()
        .then(memes => {
            return res.json(memes);
        })
        .catch(err => next(err));
}

exports.postMemes = (req,res,next) => {
    let name = req.body.name;
    let url = req.body.url;
    let caption = req.body.caption;
    if(name===undefined || url===undefined || caption===undefined){
      return res.status(400).json({
          status : 400,
          message : 'Some arguments/values are missing'
      });
    }

    name = name.trim();
    url = url.trim();
    caption = caption.trim();
    if(name === '' || url==='' || caption===''){
      return res.status(405).json({
        status: 405,
        message: 'Invalid Inputs given'
      })
    }
    
    
    memeModel.postMemes({
        name : name,
        url : url,
        caption : caption
    }).then(meme => {
        const id = meme.id;
        return res.status(201).json({id : id});
    })
    .catch(err => next(err));
}

exports.patchMemes = (req,res,next) => {
    let id = req.params.id.trim();
    if(!id){
        return res.json(405).json({
            status: 405,
            message: 'id parm invalid'
        });
    }
    
    let url = req.body.url;
    let caption = req.body.caption;
    if(url === undefined || caption === undefined){
        return res.status(400).json({
            status : 400,
            message : 'Arguments are missing'
        });
    }
    url = url.trim();
    caption = caption.trim();
    if(url === '' || caption === ''){
      return res.status(405).json({
        status: 405,
        message: 'Invalid Inputs given'
      })
    }
    const obj = {
        url : url,
        caption : caption
    }
    memeModel.patchMemes(id,obj)
    .then(updatedmeme => {
        if(!updatedmeme){
            return res.status(404).json({
                status : 404,
                message: 'Meme Not Found'
            });
        }
        const {id,name,url,caption} = updatedmeme;
        return res.status(200).json({
            id: id,
            name : name,
            url : url,
            caption : caption
        });
    })
    .catch(err => next(err));
}


exports.getMemeUsers = (req,res,next) => {
    memeModel.getMemeUsers()
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => {
      return next(err);
    })
    
}

exports.getOneMeme = (req,res,next) => {
  let id = req.params.id.trim();
    if(!id){
        return res.json(400).json({
            status: 400,
            message: 'id parm invalid'
        });
    }
    id = parseInt(id,10);
  memeModel.getOneMeme(id)
  .then(data => {
    if(data){
      return res.status(200).json(data);
    }
    return res.status(404).json({
      status: 404,
      message: 'meme not found'
    });
  }).catch(err => {
    return next(err);
  })
}