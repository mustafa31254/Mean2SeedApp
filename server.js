var express= require('express');
var path=require('path');
var cors=require('cors');


var bodyParser= require('body-parser');
var users= require('./server/routes/users');

var app =express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
})

// app.use((req,res)=>{
//     res.sendFile(path.join(__dirname,'dist/index.html'));
// })
app.use('/users',users);


app.listen(3000,function(){
    console.log('Running on port 3000');
});