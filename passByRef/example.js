// Pass by value. Always with primitives. Has different memory locations for different variables.

function changeVal(b){
  b =2;
};

var a=1;
changeVal(a);
console.log(a);
// 1


// Pass by reference. OBjects are always pass by reference. When we call the changeObj function and pass the object
// as the parameter . The parameter(d) and the object(obj1) share the same memory location. so whatever happens to the
// parameter d affects object obj1 thereby updating the properties of obj1 with properties in d.
var d;
function changeObj(d){
    d.prop1 = function() {
        console.log("This property is a function");
    };
    d.prop2 = {name:'Abi', age:'32'};
}

var obj1={} ;
obj1.prop1 = {'name':'bala','age':'34'};
changeObj(obj1);
console.log(obj1);
//{ prop1: [Function], prop2: { name: 'Abi', age: '32' } }
console.log(obj1.prop1);
//[Function]