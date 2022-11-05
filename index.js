const express=require('express');
const app= express();
const port=8000;
//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//use express server
app.use('/',require('./routes'));//it will move to routes/index.js for furthur 

console.log('ejs file load done');
app.listen(port,function(err){
    if(err)
    {
        console.log('Error: ',err);
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});