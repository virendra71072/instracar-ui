const express =require('express');
const app=express();
const mongoose=require('mongoose');
const db=require('./config/keys').mongoUrl;
const user=require('./route/api/users');
const bodyParser=require('body-parser');
const passport=require('passport');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(db,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  require('./config/passport')(passport);
 app.use(passport.initialize());

app.use('/api/users',user);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

  port=process.env.PORT||5000;

  app.listen(port,()=>{
      console.log(`server connected on the port at ${port}`);
  });