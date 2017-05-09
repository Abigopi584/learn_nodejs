// File REad and Write using readFile and writeFile.
// The file read and write is asynchronous. The console.log is dispalyed first.
// To make it syncronous we have use readFileSync(). but this is not best practise as the server will wait for the entire
//file to read and then move on to next task, which will affect the performance.

var fs = require('fs');
var content;

function readMyFile(sourceFile, callback){
    fs.readFile(sourceFile, 'utf-8',function(err,data){
        if (err)
            callback(new Error(err));
        else
            callback(null, data);

    })
}

readMyFile('./newFile.txt', function(err,content){
    if(err)
        console.warn(err)
    else
        writeToMyNewFile(content);
})

function writeToMyNewFile(content){
    fs.writeFile('./writeFile.txt',content,function(err,data){
        if(err){
            console.warn(err);
        }
        else
            console.log('The work is done');
    });
}

console.log(' Here goes FILE READ And WRITE');