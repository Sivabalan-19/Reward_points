const express=require('express')
const path=require('path')
var mysql = require('mysql');
const app=express();
const corps=require('cors');


app.use(express.json())
app.use(corps())

var content=["Technical event","Skill","Assignment","Interview","society","product","TAC","SPecial Lab","Extra","Cumulative","Reward from Honor"]
var con = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "Navan@123",
    database:"rp"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });  
  app.post('/',function(req,res){
    
      var pass=req.body.userpassword;
      
      con.query("SELECT password FROM login where username='"+req.body.username+"'",function (err, result) {
      
          if (err){
            res.send(err);
          }
          else if(result[0].password==pass)
          {
            console.log("login sucessfully")
            res.send({message : 'success'});
          }
          else{
            res.send({message : 'not successful'});
          }
    });
      })
  app.get("/rewardtable", function(req, res) {
    var detai=[]
      con.query("select * from info", function(err,result) {
        content.forEach((r)=>{
            
            detai.push(
                {
                    "category":r+" ("+result[0].Technical_events_time+")",
                    "details":result[0].Technical_events
                }
            )
          
            
            
        })
  
      res.send({message: detai});
    })
    })
    app.get("/pointtable", function(req, res) {
      var detai=[]
        con.query("select * from pointcontainer", function(err,result) {
          console.log(result)     
           res.send({message: detai});
      })
      })
    app.get("/rewarddistributed",function(req,res){

      var d=[]
      ip1_t=0
      ip2_t=0
      overall_t=0
      con.query("SELECT * FROM rewarddistributed", function(err,result){
        result.forEach((r)=>{
          ip1_t=r.ip1+ip1_total;
          ip2_t=r.ip2+ip2_total;
          overall_t=r.ip1+r.ip2+overall_t;
          d.push({
            "sno":r.sno,
            "subject":r.subject,
            "ip1":r.ip1,
            "ip2":r.ip2,
            "total":r.ip1+r.ip2
          })
        });
        d.push({
          "sno":"lab subject",
          "subject":NaN,
          "ip1":NaN,
          "ip2":NaN,
          "total":NaN
        })
        d.push({
          "sno":"total",
          "subject":"5",
          "ip1":ip1_t,
          "ip2":ip2_t,
          "total":overall_t
        })
        console.log(d)
        res.send({message:d})
      })
    })
    app.get("/rewardinternal",function(req,res){

      var d=[]
      ip1_total=0
      ip2_total=0
      overall_total=0
      con.query("SELECT * FROM INTERNAL", function(err,result){
        result.forEach((r)=>{
          ip1_total=r.ip1+ip1_total;
          ip2_total=r.ip2+ip2_total;
          overall_total=r.ip1+r.ip2+overall_total;
          d.push({
            "sno":r.sno,
            "subject":r.subject,
            "ip1":r.ip1,
            "ip2":r.ip2,
            "total":r.ip1+r.ip2
          })
        });
        d.push({
          "sno":"lab subject",
          "subject":NaN,
          "ip1":NaN,
          "ip2":NaN,
          "total":NaN
        })
        d.push({
          "sno":"total",
          "subject":"5",
          "ip1":ip1_total,
          "ip2":ip2_total,
          "total":overall_total
        })
        console.log(d)
        res.send({message:d})
      })
    })
    app.listen(2500)