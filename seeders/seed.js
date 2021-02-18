var mongoose = require("mongoose");
const Transaction = require("../models/transaction.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

var postSeed = [
  {
    name: "buy s2000",
    value: -12000,
    date: new Date(new Date().setDate(new Date().getDate() -3))
  },
  {
    name: "buy bmw",
    value: -30000,
    date: new Date(new Date().setDate(new Date().getDate() -2))
  },
  {
    name: "win lottery",
    value: 100000000,
    date: new Date(new Date().setDate(new Date().getDate() -1))
  }
  ,
  {
    name: "buy yate",
    value: -1000000,
    date: new Date(new Date().setDate(new Date().getDate() -8))
  }
  ,
  {
    name: "hawai flight",
    value: -250000,
    date: new Date(new Date().setDate(new Date().getDate() -6))
  }
  ,
  {
    name: "buy baseball team",
    value: -100000,
    date: new Date(new Date().setDate(new Date().getDate() -15))
  }
];

Transaction.deleteMany({})
  .then(() => Transaction.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
