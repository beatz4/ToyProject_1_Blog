var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("post");

    dbo.createCollection("post", function(err, res) {
        if (err) throw err;
        console.log("Post collection created!");
        db.close();
    });

    dbo.createCollection("reply", function(err, res) {
        if (err) throw err;
        console.log("Reply collection created!");
        db.close();
    });

    // increament function
    function getNextSequence(name) {
        var ret = db.counters.findAndModify(
            {
                query: { _id: name },
                update: { $inc: {seq: 1 }},
                new: true
            }
        );
    }


    //
    // POST Table
    myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemons' },
        { _id: 156, name: 'Vanilla Dreams' }
    ];


    dbo.collection("post").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);

        // console.log("Number of documents inserted");
        // console.log(res.insertedCount)
        // console.log(res.ops)
        db.close();
    });


    // dbo.collection("orders").aggregate([
    //     { $lookup: 
    //         {
    //             from: 'products',
    //             localField: 'product_id',
    //             foreignField: '_id',
    //             as: 'orderdetails'
    //         }
    //     }
    // ]).toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(JSON.stringify(res));
    //     db.close();
    // })

    // dbo.createCollection("orders", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
       
    // });

    // var myobj = { _id: 1, product_id: 154, status: 1 };

    // dbo.collection("orders").insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
        
    // });

    // dbo.createCollection("products", function(err, res) {
    //     if (err) throw err;
    //     console.log("products collection created!");
      
    // });

    // myobj = [
    //     { _id: 154, name: 'Chocolate Heaven' },
    //     { _id: 155, name: 'Tasty Lemons' },
    //     { _id: 156, name: 'Vanilla Dreams' }
    // ];

    // dbo.collection("products").insertMany(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("some documents inserted!");
    // });

    // dbo.collection("orders").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // dbo.collection("products").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var myquery = { address: /^S/ };
    // var newvalues = { $set: { name: "Minnie" } };
    // dbo.collection("customers").updateMany(myquery, newvalues, function (err, res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " document(s) updated");
    //     console.log(res.result.nModified);
    //     db.close();
    // });


    // var myquery = { address: "Valley 345" };    

    // var newvalues = { $set: {name: "Mickey", address: "Canyon 123"}};
    // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    //     db.close();
    // });


    // dbo.dropCollection("customers", function(err, delOK) { 
    //     if (err) throw err;
    //     if (delOK) console.log("Collection deleted");
    //     db.close();
    // });


    // dbo.collection("customers").drop(function (err, delOK) {
    //     if (err) throw err;
    //     if (delOK) console.log("Collection deleted");
    //     db.close();
    // });

    // var myquery = { address: /^A/ };
    // dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    //     if (err) throw err;
    //     console.log(obj.result.n + " document(s) deleted");
    //     db.close();

    // });

    // sort
    // var mysort = { name: -1 };
    // dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var query = { address: /^S/ };      // start with the letter "S"
    // dbo.collection("customers").find(query).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // 1개의 object에 다른 값을 부여할 수 없다!!
    // dbo.collection("customers").find({}, { projection: {_id:0, name: 1, address: 1}}).toArray(function(err, result) {
    //     if (err) throw err;
    //     //console.log(result);
    //     console.log(result[2].address);
    //     db.close();
    // });

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