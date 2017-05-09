// File read and write using createReadStream() and createWriteStream().
//When the file is huge, the data can be split into chunks and processed seperately.

var fs = require('fs');

var readeable = fs.createReadStream('./newFile.txt',{encoding:'UTF-8',highWaterMark: 2 * 1024});

var writable = fs.createWriteStream('./writeFile.txt');

var writable_pipe = fs.createWriteStream('./write_pipe.txt');

readeable.on('data',function(chunk){
    console.log(chunk.length);
    writable.write(chunk);
    });

// pipe() method is provided by node JS that replaces the entire on(). It takes a readable chunk from read Stream
// and writes it to write stream.
readeable.pipe(writable_pipe);

//if the stream is both readable and writable(duplex) then the result of the write can be piped to another write stream
//or read write stream.

