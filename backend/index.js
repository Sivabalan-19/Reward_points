const express=require('express')
const path=require('path')
var mysql = require('mysql');
const multer= require('multer')
const app=express();
const corps=require('cors');
const { CONNREFUSED } = require('dns');
var id=1;
var name="hi"
app.use(express.json())
app.use(corps())
app.use(express.static("public"))
var content=["Technical_event","Skill","Assignment","Interview","Technical_society_Activity","Product","TAC","Special_Lab_Initiatives","Extra_Curricular_Activities_times","External_events"]
var con = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "Navan@123",
    database:"brp2"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });  
  const fs = require('fs');

  const Sto = multer.diskStorage({
    destination: (req, file, cb) => {
      const destPath = path.join(__dirname, 'public/images');
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      cb(null, destPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
  });
  
const upload=multer({storage:Sto})
app.post('/upload',upload.single('image'),function(req,res){
  const eventId = req.body.eventId;
  const image = req.file.filename;
 console.log()
  const sql = 'UPDATE POINTS_COLLECTED_COPY SET document = ? WHERE Activity_name = ?';
  const values = [image, eventId];
  console.log("HI")
  con.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving data to the database:', err);
      return res.status(500).send('Error saving data to the database.');
    }
    res.status(200).send('File uploaded and data saved successfully.');
    console.log("HI")
  });
});
  app.post('/addevents', function(req, res){
    var event;
    var eventdata = req.body.eventdata;

    if(eventdata.rewardmode){
      event="reward"
    }else{
      event="honour"
    }


    con.query(`INSERT INTO POINTS_COLLECTED_COPY (Activity_code,Activity_name,Activity_type,Activity_category,points,Organizer,Availability,description,No_of_students_expected,faculty_id) VALUES ("${eventdata.eventName}","${eventdata.eventName}","${eventdata.selectedType}","${event}",${eventdata.maxPoints},"${name}",${eventdata.noOfStudents},"${eventdata.eventDetails}",${eventdata.noOfStudents},${id})`)
  }
);
app.get("/notifications",function (req, res){
con.query("SELECT Activity_type,Activity_name,'Event Registered' AS source_table FROM points_collected_copy pc JOIN Registered_Events re ON pc.Event_id = re.Event_id WHERE re.user_id = "+id+" Union All SELECT Activity_type,Activity_name,'RP ADDED' AS source_table FROM points_collected ecs JOIN points_collected_copy pcc ON ecs.event_id = pcc.Event_id WHERE ecs.user_id ="+id,function(err,result){
  res.send({message:result});
})
})
app.get('/bar',function(req,res){

con.query("WITH RankedStudents AS ( SELECT user_id, total, ROW_NUMBER() OVER (ORDER BY total DESC) AS Position FROM student_rp_gatered ) SELECT AVG(rs.total) AS AverageRP, (SELECT total FROM student_rp_gatered WHERE user_id ="+id+") AS TotalRP,(select count(*) from student_rp_gatered) as c, rs.Position, rs.user_id, rs.total, srg.year FROM RankedStudents rs JOIN student_rp_gatered srg ON rs.user_id = srg.user_id WHERE rs.user_id ="+id,function(err,result){

  res.send({message:result});
})

})
app.get("/rectangle",function(req,res){

  con.query("SELECT * FROM student_rp_gatered where user_id="+id,function(err,result){

    res.send({message:result});

  })
})
  app.post('/changeregister',function(req,res){
    
    var iD=req.body.id;

    con.query("INSERT INTO `Registered_Events` (`user_id`, `Event_id`) VALUES("+id+","+iD+")",function (err, result) {
      con.query("UPDATE `POINTS_COLLECTED_COPY` SET `Availability` = `Availability` - 1 WHERE `Event_id` ="+iD,function (err, result) {
 
        res.send("success!");
      })
    })
    
  
  });
  app.post('/',function(req,res){
    
      var pass=req.body.userpassword;
      name=req.body.username
     
      con.query("SELECT userpassword,position,user_id FROM login where username='"+req.body.username+"'",function (err, result) {

        if(Object.keys(result).length==0){
          res.send({message : 'not successful'});
       
        }
         
        else if(result[0].userpassword==pass)
          {
            id=result[0].user_id;
       
         
            res.send({message : 'success',position:result[0].position});
          }
          else{
            res.send({message : 'not successful'});
          }
    });
      })
      app.post('/email',function(req,res){
    
        var email=req.body.email;
       
       
        con.query("SELECT userpassword,position,user_id FROM login where email='"+email+"'",function (err, result) {
  
          if(Object.keys(result).length==0){
            res.send({message : 'not successful'});
         
          }
           
          else if(true)
            {
              id=result[0].user_id;
         
           
              res.send({message : 'success',position:result[0].position});
            }
            else{
              res.send({message : 'not successful'});
            }
      });
        })
  app.get("/rewardtable", function(req, res) {
    var detai=[]
    
      con.query("select * from points_details where user_id ="+id, function(err,result) {
        results=result[0]

        content.forEach((r)=>{
    
            detai.push(
                {
                    "category":r+" ("+results[r]+")",
                    "details":results[r]
                }
            )
        })
        detai.push({
          "category":"Cumulative_points",
            "details":results["Cumulative_points"]
        })
        detai.push({
          "category":"Reward_From_Honour_points",
            "details":results["Reward_From_Honour_points"]
        })
   
      res.send({message: detai});
    })
    })
    app.get("/pointtable", function(req, res) {
      var detai=[]
        con.query("SELECT pc.* FROM points_collected_copy pc LEFT JOIN Registered_Events re ON pc.Event_id = re.Event_id AND re.user_id = "+id+" WHERE re.user_id IS NULL  AND pc.Availability > 0 ", function(err,result) {
          result.forEach((r)=>{ 
           
            detai.push({
              "id":r.Event_id,
              "Date":r.StartDate,
              "Activity_code":r.Activity_code,
              "Activity_name":r.Activity_name,
              "Tpye":r.Activity_type,
              "Activity_type":r.Activity_category,
              "points":r.points,
              "Organier":r.Organizer,
              "seat":r.Availability,
              "descr":r.description,
              
            })
          });  
   
          res.send({message: detai}); 
      })
      })
      app.get("/register", function(req, res) {
        var detai=[]
          con.query("SELECT pc.* FROM points_collected_copy pc JOIN Registered_Events re ON pc.Event_id = re.Event_id WHERE re.user_id = "+id, function(err,result) {
            result.forEach((r)=>{
        
              detai.push({
                "id":r.Event_id,
                "Date":r.StartDate,
                "Activity_code":r.Activity_code,
                "Activity_name":r.Activity_name,
                "Tpye":r.Activity_type,
                "Activity_type":r.Activity_category,
                "points":r.points,
                "Organier":r.Organizer,
                "seat":r.Availability,
                "descr":r.description,
                "status":r.status
              })
            });  
        
            res.send({message: detai}); 
        })
        })
        app.get("/r", function(req, res) {
          var detai=[]
         
            con.query("SELECT pc.* FROM points_collected_copy pc WHERE pc.faculty_id = "+id , function(err,result) {
          
              res.send({message: result}); 
          })
          })
      app.get("/detailer", function(req, res) {
        var detai=[]
          con.query("SELECT ecs.*, pcc.* FROM points_collected ecs JOIN points_collected_copy pcc ON ecs.event_id = pcc.Event_id WHERE ecs.user_id ="+id, function(err,result) {
            result.forEach((r)=>{
          
              detai.push({
                "Date":r.Date,
                "Activity_code":r. Activity_code,
                "Activity_name":r.Activity_name,
                "Tpye":r.Activity_type,
                "Activity_type":r. Activity_category,
                "points":r.points,
                "Organier":r.Organizer,
              
              })
            });  
     
            res.send({message: detai}); 
        })
        })
    app.get("/rewarddistributed",function(req, res){
      sno=1
      var d=[]
      ip1_t=0
      ip2_t=0
      overall_t=0
      con.query("SELECT * FROM reward_distributed where user_id ="+id, function(err,result){
       
        result.forEach((r)=>{
           
                ip1_t=r.ip1+ip1_t;
                ip2_t=r.ip2+ip2_t;
                overall_t=r.ip1+r.ip2+overall_t;
                d.push({
                  "sno":sno,
                  "subject":r.subject,
                  "ip1":r.ip1,
                  "ip2":r.ip2,
                  "total":r.ip1+r.ip2
                })
                sno=sno+1;
      
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
              res.send({message:d})
      })
      
    })
    app.get("/rewardinternal",function(req, res){
      Sno=1
      var d=[]
      ip1_ta=0
      ip2_ta=0
      overall_ta=0
      con.query("SELECT * FROM mark_distributed where user_id ="+id, function(err,result){
       
        result.forEach((r)=>{
         
                ip1_ta=r.ip1+ip1_ta;
                ip2_ta=r.ip2+ip2_ta;
                overall_ta=r.ip1+r.ip2+overall_ta;
                d.push({
                  "sno":Sno,
                  "subject":r.subject,
                  "ip1":r.ip1,
                  "ip2":r.ip2,
                  "total":r.ip1+r.ip2
                })
                Sno=Sno+1;
              
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
                            "ip1":ip1_ta,
                            "ip2":ip2_ta,
                            "total":overall_ta
                          })
              res.send({message:d})
      })
      
    })
 
    app.listen(2500)