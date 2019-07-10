import * as multer from 'multer';

const storage = multer.diskStorage({
    destination: function(equest, file, cb){
        cb(null, "uploads/");
    },
    filename: function(request, file, cb){
        cb(null, file.originalname);
    }
});

const uploads = multer({ storage: storage});

export default uploads;