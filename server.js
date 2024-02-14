const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);
const PORT = process.env.PORT || 3001;
app.listen (PORT, function(){
    console.log("this app is listening on port 3001");
});