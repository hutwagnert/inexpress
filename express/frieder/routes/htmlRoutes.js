var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("survey");
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    console.log("home");
  });
};
