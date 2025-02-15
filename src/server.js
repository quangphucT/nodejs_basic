import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web'
require("dotenv").config();
const app = express(); // tạo app có thể sự dụng được  all tính năng của express, gọi hàm express()
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
