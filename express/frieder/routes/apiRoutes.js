// ===============================================================================
// LOAD DATA
// ===============================================================================
var tableData = require("../data/tableData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests


  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  // API POST Requests
  app.post("/api/tables", function(req, res) {

      tableData.push(req.body);
      res.json(true);   
  });

};
