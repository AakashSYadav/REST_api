'use strict';

exports.read_a_task = function(req, res) {
	var mynum = req.params.mynum;
	var lat1 = req.params.lat;
	var lon1 = req.params.lon;
	var lux1 = req.params.lux;
	console.log(mynum)
  var qry = "CREATE TABLE mylux (lat INT, lon INT, lux INT)";
  var insert_qry = "INSERT INTO mylux (lat, lon, lux) VALUES ("+lat1+","+ lon1+","+ lux1+")";
  var sel_qry = "SELECT * FROM mylux where lat = "+lat1+" AND lon = "+lon1;

 // con.query(qry, function (err, result) {
 //  	if (err){
 //  		console.log("error creating table");
 //  		throw err;
 //  	}
 //  	console.log("table created");
 //  });

if(mynum=='0'){
  con.query(sel_qry, function (err, result) {
  	if (err){
  		console.log("error creating table");
  		throw err;
  	}
  	console.log("table displayed");
  	res.json(JSON.parse(JSON.stringify(result)));
  	console.log(result);
  	var id1 = result[0]['lat'];
  	var val1 = result[0]['lon'];
  	var val2 = result[0]['lux'];
  	console.log(id1);
  	console.log(val1);
  	console.log(val2);
  });
}
else {
	con.query(insert_qry, function (err, result) {
  	if (err){
  		console.log("error creating table");
  		throw err;
  	}
  	res.json(JSON.parse(JSON.stringify(result)));
  	console.log("data entered");
  });
}

};
