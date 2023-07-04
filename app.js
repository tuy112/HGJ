// app.js
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// cookie parser
// const cookieParser = require("cookie-parser");

// const studyRouter = require("./routes/studyRoute.js");

// Middleware ==================================================
app.use(express.json()); // req.body parser
// app.use(cookieParser()); // cookie parser
// app.use(cors()); // front-back connect

// localhost:3000/api/
// app.use('/api', [studyRouter]);
// Middleware ==================================================

// HTML, CSS
app.use(express.static(path.join(__dirname, 'assets')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});

// server start!!
app.listen(port, () => {
  console.log(port, '=> 서버가 시작되었습니다!^^');
});