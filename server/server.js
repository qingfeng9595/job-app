const express = require("express");
const userRouter = require('./user');



//新建app
const app = express();
app.use('/user',userRouter);

// app.get()
app.listen(9093, () => {
  console.log("node app start at porting 9093");
});
