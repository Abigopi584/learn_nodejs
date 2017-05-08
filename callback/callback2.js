//two numbers x and y equal to 5 and 9 respectively. Sum x and y and square the result using callback


sumOfNum(3,2,function(result){
    console.log(`The sum of two numbers ${result}`);
    square(result);
})

function sumOfNum(x,y,callback){
    z = x + y;
    callback(z);
}

function square(num){
   var  sqresult = num * num;
   console.log(sqresult);
}