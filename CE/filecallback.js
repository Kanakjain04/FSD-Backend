const { error } = require("console");
const fs = require("fs");
const read = () => {
    fs.readFile("./data.txt","utf-8", (error,
        data)=> {
            if(error) {
                console.log("Error reading data")
            }
            else{
                console.log(data)
            }
        }
    );
}
module.exports = read;