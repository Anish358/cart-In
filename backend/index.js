const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const ErrorController = require("./Controllers/ErrorController");

const app = express();
const PORT = 5000 || process.env.PORT;
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://anish:ani33ash@cluster0.1fga8.mongodb.net/cartIn?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  app.listen(PORT, () => console.log(`Server listning on port ${PORT}`));
});

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(ErrorController);
app.get("/", (req, res) => {
  res.send("Hello World");
});
