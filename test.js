const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost"); //!using the database created on models folder
mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });
//?connects te the database - my_database
//!if it does not exist it creates one
////BlogPost.create({ title: "random", body: "random" }, (error, blogpost) => {
////  console.error(error, blogpost);});
//*gives error or an appropriate output
////BlogPost.find({}, (error, blogspot) => {
////  console.log(error, blogspot);});
//?tells all the values in our database
////BlogPost.findByIdAndDelete(id, (error, blogspot) => {
////  console.log(error, blogspot);});
//!deleting of things in the data
////BlogPost.findByIdAndUpdate(id, (error, blogspot) => {
////  console.log(error, blogspot);});
//?find and updastes the value
