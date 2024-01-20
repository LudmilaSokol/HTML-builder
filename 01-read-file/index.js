const fs = require("fs");

const fileOutput = fs.createReadStream("./01-read-file/text.txt");

fileOutput.on("data", function(chunk){
  console.log(chunk.toString());
});