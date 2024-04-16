const express = require("express");
const multer = require("multer");
const csvParser = require("csv-parser");
const { uploadKey } = require("../controllers/uploadKey");
const { uploadData } = require("../controllers/uploadData");
const { generateCsv } = require("../controllers/generateCsv");


const upload = multer();
const router = express.Router();

router.post("/upload/key", upload.single("keyFile"), uploadKey);
router.post("/upload/data", upload.single("dataFile"), uploadData);
router.post("/generate/csv",generateCsv)



module.exports = router;
