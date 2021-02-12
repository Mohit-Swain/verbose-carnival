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
    const name = req.body.name;
    const url = req.body.url;
    const caption = req.body.caption;
    if(!name || !url || !caption){
        return res.status(400).json({
            status : 400,
            message : 'Some arguments are missing'
        });
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
    const id = req.params.id;
    if(!id){
        return res.json(404).json({
            status: 404,
            message: 'id parm missing'
        });
    }
    
    const url = req.body.url;
    const caption = req.body.caption;
    if(!url && !caption){
        return res.status(400).json({
            status : 400,
            message : 'All arguments are missing'
        });
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