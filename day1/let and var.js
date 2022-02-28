//everything comes under the ES6 features in javascript(js) and program-1 with let keyword
function dosomething(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    console.log('outside :'+i);
}
dosomething();


//program-2 with var and let keyword
var a=100;
console.log(100);
{
    let a= 200;
    console.log(a);
}
console.log(a);
