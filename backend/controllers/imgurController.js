const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

exports.postImageImgur = (req,res,next) => {
    const file = req.file;
    console.log(process.env);
    if(!file){
        res.status(400).json({
            message : 'No files found'
        });
    }
    let data = new FormData();
    data.append('image', fs.createReadStream(file.path));
    const config = {
        method: 'post',
        url: 'https://api.imgur.com/3/upload',
        headers: { 
            'Authorization': `Client-ID ${process.env.IMGUR_ACCESS_TOKEN}`, 
            ...data.getHeaders()
        },
        data : data
    };
    // return res.json(file);

    axios(config)
    .then(function (response) {
        return res.json(response.data).status(200);
    })
    .catch(function (error) {
        console.log(error);
        next(error);
    }).finally(() => {
        fs.unlink(file.path,() => {});
    })
    
}