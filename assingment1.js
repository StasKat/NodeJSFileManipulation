//gfet user input. 
const fs = require('fs');

var args = process.argv.slice(2);
console.log('myArgs: ', args);

var files = fs.readFileSync('./allCurrentFiles.txt');
console.log(files.toString());

const writeToFiles = JSON.stringify(args);

fs.writeFile('./allCurrentFiles.txt', writeToFiles, (error) => {
  if(error){
    console.log('failed to write.')
  }
});

for (let j = 0; j < args.length; j ++){
  createFile(args[j]);
}




function createFile(userInput){
    fs.appendFile(userInput, "You Are Awesome!", (error) => {
      if (error){
          console.log("there was an error");

      } else {
          console.log("input was successful.");
      }
    });
}



function getAllCurrentFiles(){
    //parse and convert to stirng array or uh parse. 
}



