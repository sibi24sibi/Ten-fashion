const express = require("express");
const mongoose = require("mongoose");
const contactRoute=require("./routes/ContactRoute")

const app = express();
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/tenFashion",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("error connecting to db",err)

)

app.use("/api",contactRoute)

require("dotenv").config({ path: "../.env" });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
