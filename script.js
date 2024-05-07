// "use strict";

// var obj = {
//     x:10,
//     a : function (){
//         console.log(this.x);
//     }
// }

// obj.a();

///calll

let obj1 = {
    name: "sandeep",
    lastname: "pansari",
    b:"123",
    x: function(){
        console.log(this.name);
        console.log(this);
    }
}

obj1.x();

let obj2 = {
    name:"sachin",
    lastname:"tendulkar"
}

obj1.x.call(obj2);

let name={
    firstname:"sandeep",
    lastname: "pansari"
}

let printfullname=function(){
    console.log(this);
    console.log(this.firstname+" "+this.lastname);
}
 
printfullname.call(name);

let name2={
     firstname:"sanp",
    lastname: "pan"
}

printfullname.call(name2);