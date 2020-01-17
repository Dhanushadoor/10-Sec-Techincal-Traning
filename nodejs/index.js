// // // console.log("--------------------------------")

// // // var modulevar=require("./namemodule")
// // // // console.log(modulevar.name)

// // // modulevar.fun()
// // // console.log(modulevar.name)


// // let namevar = "Dhanush"

// //  friends=["A","B","c"]

// // // for(var z=0;z<friends.length;z++){
// // //     console.log(friends[z])
// // // }
// // // console.log(z)

// // // for(let z=0;z<friends.length;z++){
// // //     console.log(friends[z])
// // //     const pai=3.14
// // // }
// // // // console.log(z)//z does not have scope outside it can be used only inside the { }



// // // // const pai=3.14
// // // // pai=3
// // // console.log(pai)

// // // var modulevar=require("./namemodule")
// // // //both are same
// // // import namemodule from './namemodule.'//es6

// // // import {name1fun,name2fun} from './namemodule.'


// // var tablerow ="<tr><td>"+data1+"</td><td>"+data2+"</td></tr>"


// // var tablerow1= `<tr><td>${data1}</td><td>${data2}</td></tr>`

// // var multili=`Line1
// //              Line2`

// // var enemies =["x","y","z"]
// // var contracts=["custCareNo","EmergencyNo",...enemies]//spread operator
// // console.log(contracts)


// // function add(x,y,z){
// //     return x+y+z
// // }
// // var arr =[1,2,3]
// // console.log(add(...arr))

//  var arr =[1,2,3]

// add = (x,y,z) =>{
//     return x+y+z
// }
// console.log(add(...arr))  //ES 6




//afternoon

// console.log("hello")

var MdbCncVap = require('mongodb').MongoClient;
var MdbCncUrlVar = "mongodb://localhost:27017   ";
var NamMdbVar;
MdbCncVap.connect(MdbCncUrlVar, function(ErrRsgMdbVar, SvrRsgMdbVar)
{
    if (ErrRsgMdbVar) throw ErrRsgMdbVar;

    NamMdbVar = SvrRsgMdbVar.db('Tutorialb');

    console.log("Database Connected");
    
});
    

var SvrMgrVap = require('express');
var SvrMgrVaj =SvrMgrVap();
var BvrBdyRdrVap = require('body-parser');

SvrMgrVaj.use(BvrBdyRdrVap.json());

SvrMgrVaj.listen(8080,function()
{
    console.log("Server is started and running")
});

// // SvrMgrVaj.get("/",function(req,res)
// // {
// //     res.send("<h1>Welcome to Dhanush's serever page :)<h1>")
// // })

var friends=["Umesh","Ramesh","varush","Mahesh"]

SvrMgrVaj.get("/",homepage)
function homepage(req,res)
{
    res.send("<h1>Welcome to Dhanush's serever page :)<h1>")
}

SvrMgrVaj.post("/addfriend",function(req,res)
{
    var studentvar={
        "name":"Dhanush R",
	    "mobile":"874561294562",
	    "email":"rdtygvhbj@rdtvbh.com"
    }
    NamMdbVar.collection("Users").insertOne(
        studentvar,function(ErrRsgMdbVar,ResRsgMdbVar)
        {
            if (ErrRsgMdbVar) throw ErrRsgMdbVar;
            console.log("Data is inserted",ResRsgMdbVar.insertCount)
            res.status(201)
            res.send("Data inserted")
        })
})

SvrMgrVaj.put("/updatefriend/:id",function(req,res)
{
    var updatedfrnd = req.body.updatedfrnd
    var idx = req.params.idx
    friends[idx] = updatedfrnd
    res.json(friends)
})

SvrMgrVaj.delete("/deletefriend/:id",function(req,res)
{
    var idx = req.params.idx
    friends.splice(idx,1)
    res.json(friends)
})



// //--------------------------   npm install -g body-parser   ------------------------------------

//status code
//201->insert
//400->internal error
//404->not found
//500->unknown error
//204->delete
//401->unauthorized

//--------------------------17/jan-2020


    





