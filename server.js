//* Dependencies
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//* Connect to database
connectDB();

//* Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

//*Define routes here
app.use("/api/locations", require("./routes/locations"));

//* Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //* Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 8080;

//*Initialize server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
