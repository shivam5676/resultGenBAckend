const express = require("express");
const bodyParser=require("body-parser")
const router = require("./routes/upload");
const app = express();
const cors=require("cors")
app.use(cors())
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(router)
app.listen("2000", () => {
  console.log("server is listening");
});
