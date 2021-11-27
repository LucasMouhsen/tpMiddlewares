const fs= require("fs");
const path = require("path");

const userLogs = (req, res, next) =>{
    console.log(req.url);
    fs.appendFileSync(path.join(__dirname, "../logs/userLogs.txt"), ` el usuario ingreso a la ruta: ${req.url}\n`,"utf-8");
    next();
};

module.exports = userLogs;