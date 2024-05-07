// "use strict";

// var obj = {
//     x:10,
//     a : function (){
//         console.log(this.x);
//     }
// }

// obj.a();


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