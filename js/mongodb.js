var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    // 1개의 object에 다른 값을 부여할 수 없다!!
    dbo.collection("customers").find({}, { projection: {name: 0, address: 1}}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

    // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 }}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // dbo.collection("customers").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // dbo.collection("customers").findOne({}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result.name);
    //     db.close();
    // });

    // var myobj = [
    //     { _id: 154, name: 'Chocolate Heaven' },
    //     { _id: 155, name: 'Tasty Lemon' },
    //     { _id: 156, name: 'Vanilla Dream' }
    // ];
    // var myobj = { name: "Company Inc", address: "Highway 37" };
    // var myobj = [
    //     { name: 'John', address: 'Highway 37' },
    //     { name: 'Peter', address: 'Lowstreet 4' },
    //     { name: 'Amy', address: 'Apple st 652' },
    //     { name: 'Hannah', address: 'Mountain 21' },
    //     { name: 'Michael', address: 'Valley 345' },
    //     { name: 'Sandy', address: 'Ocean blvd 2' },
    //     { name: 'Betty', address: 'Green Grass 1' },
    //     { name: 'Richard', address: 'Sky st 331' },
    //     { name: 'Susan', address: 'One way 98' },
    //     { name: 'Vicky', address: 'Yellow Garden 2' },
    //     { name: 'Ben', address: 'Park Lane 38' },
    //     { name: 'William', address: 'Central st 954' },
    //     { name: 'Chuck', address: 'Main Road 989' },
    //     { name: 'Viola', address: 'Sideway 1633' }
    // ];

    // dbo.collection("customers").insertMany(myobj, function (err, res) {
    //     if (err) throw err;
    //     console.log(res);

    //     // console.log("Number of documents inserted");
    //     // console.log(res.insertedCount)
    //     // console.log(res.ops)
    //     db.close();
    // });

    // dbo.createCollection("customers", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });
});