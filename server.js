/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/*********************I STOPED ON LESSON NUMBER 42 ****************************** */
/*********************I STOPED ON LESSON NUMBER 42 ****************************** */
/*********************I STOPED ON LESSON NUMBER 42 ****************************** */
/********************NOW TO SETUP CONTACTS.JS ROUTES***************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
/******************************************************************************** */
const express =require('express');
const connectDB = require('./config/db');



const app=express();

//init middleware
app.use(express.json({extented:false}));

const PORT =  process.env.PORT  || 5000;

//connection to database



app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));
connectDB();
app.listen(PORT,() =>{

    console.log('server is runnning on '+ PORT);
});

/******************************************************************************** */
