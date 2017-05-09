var fs = require('fs');
var fileCount = 1;
var writable;
// dividing the input file into chunks.
var readable = fs.createReadStream('./newFile.txt',{encoding:'UTF-8', highWaterMark: 2 * 1024}); //highWaterMark : size of the chunk

// using .on to call a function that creates new files based on the number of chunks created by createReadStream and writes the chunks 
// into the newly created files.
readable.on('data',function(chunk){
      createNewFile(fileCount, function(fileNme) {
            writable = fs.createWriteStream(`./${fileNme}`);
            writable.write(chunk);
            console.log(`write done successfully to file ${fileNme}`)
        });
      fileCount = fileCount + 1;
});

function createNewFile(fileNum, cb){
        var fileName = 'newFile'+fileNum+'.txt';
        fs.open(fileName,'w',function(err,fd){
            if(err)
            {    return console.error(err) };
            console.log(`New File ${fileName} created`);
            cb(fileName);
        })
    }
