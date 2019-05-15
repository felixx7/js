var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port : 8887,
  database: "toko_kn"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM produk", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].nama);
  });
});