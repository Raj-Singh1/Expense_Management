document.write("Hello sql file is attached");

function add(){
	var date = Date.get();
	console.log(date);
	}
	
	add();
	
/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "mydb"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Add primary key to an existing table:
  var insert = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(insert, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/