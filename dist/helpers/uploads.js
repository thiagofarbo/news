"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (equest, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (request, file, cb) {
        cb(null, file.originalname);
    }
});
const uploads = multer({ storage: storage });
exports.default = uploads;
