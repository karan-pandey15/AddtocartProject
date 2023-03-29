const express = require("express")
const app = express();
const PORT = 5000;
const User = require("./models/User")
const mongoose = require("mongoose")
const mongoDb = require("./db")
mongoDb();
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000/',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

require("./db")
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Origin,http://localhost:5000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With , Content-Type, Accept"
//     );
//     next();
// })

// app.use("/api" ,require("./Routes/CreateUser") )
app.use(express.json());
app.use(require("./Routes/CreateUser"));
app.use(require("./Routes/Displaydata"));
app.use(require("./Routes/OrderData"));
// app.use(require("./Routes/OrderData"));

app.get("/",(req,res)=>{
    res.end("Hello form the backend______");
})

app.listen(PORT,()=>{
    console.log("listening to port ",PORT)
});