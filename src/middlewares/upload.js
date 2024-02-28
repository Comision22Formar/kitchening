const multer = require('multer');
const path = require('path');
const crypt = require('crypto');

const storage = multer.diskStorage({
    destination : function(req, file, callback){
        if(file.mimetype == "application/pdf"){
            callback(null, 'public/documents')
        }else {
            callback(null, 'public/images')
        }
    },
    filename : (req,file, callback) => {
        callback(null, `${crypt.randomUUID()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage
});

module.exports = upload