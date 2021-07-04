const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];


const downloader = (url, path) => {

  request(url, (error, response, body) => {
    if (error) {
      throw error;
    }
    
    fs.writeFile(path, body, (error) => {
      if (error) {
        console.error(err.stack);
        return;
      }
      const stats = fs.statSync(path);
      
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}.`);
    });
  });

};
downloader(url, path);

// fs.writeFile(fileName, data, function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });

// what if local file already exists
// what if local path was invalid
// url results in an error