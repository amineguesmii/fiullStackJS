const express = require("express");

// express app
const app = express();
const cors = require("cors");
const disease = require ('./routes/api/Maladies')
const gene = require ('./routes/api/Gene')
const mutation = require ('./routes/api/mutation')

require("dotenv").config();


app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));
// get driver connection
 
const path = require("path")

app.use(
  cors({
    origin: "*",
  })
);


require("dotenv").config();
// Import DATABASE CONNEXION
const connectDB = require("./db/conn");
connectDB();
app.use(express.json());





const PORT = process.env.PORT;


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/disease', disease);
app.use('/api/gene', gene);
app.use('/api/mutation', mutation);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is Running on PORT ${PORT}`);
});