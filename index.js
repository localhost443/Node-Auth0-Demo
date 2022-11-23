const express = require("express");
const router = require('./index.routers')

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(router)



app.listen("8080", () => {
  console.info("Server has been started at port 8080");
})