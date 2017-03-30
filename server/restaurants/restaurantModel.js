var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  rate: Number,
  address: String,
  describtion: String,
  update_time: String,
  thumb: String
});

var db = mongoose.connection;
var Restaurant = mongoose.model('Restaurant', RestaurantSchema)

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function(){
  console.log("database connected");
  Restaurant.remove({},function(err){
    Restaurant.create(restaurant , function(err, data){});
  })
})

module.exports = Restaurant;

// fake data restaurant for testing
var restaurant = [
    {
      id: 1,
      name: "Elmhurst Hot Pot",
      rate: 5,
      address: "83-02 Broadway, Queens, NY 11373",
      describtion: "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "01/01/2011",
      thumb: "thumb1.png"
    },
    {
      id: 2,
      name: "Manhattan Hot Pot",
      rate: 4,
      address: "31 St Marks Pl, New York, NY 10003",
      describtion: "Borem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "05/06/2010",
      thumb: "thumb2.png"
    },
    {
      id: 3,
      name: "Maspeth Hot Pot",
      rate: 2,
      address: "95-25 Queens Blvd, Rego Park, NY 11374",
      describtion: "Corem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "12/02/2001",
      thumb: "thumb3.png"
    },
    {
      id: 4,
      name: "Jackson Height Hot Pot",
      rate: 3,
      address: "136-59 37th Avenue, Flushing, NY 11354",
      describtion: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
      update_time: "08/02/2012",
      thumb: "thumb4.png"
    },
    {
      id: 5,
      name: "Forest Hill Hot Pot",
      rate: 3,
      address: "83-02 Broadway, Queens, NY 11373",
      describtion: "Eorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "08/04/2012",
      thumb: "thumb5.png"
    },
    {
      id: 5,
      name: "Mountant top Hot Pot",
      rate: 4,
      address: "145-66 29th Avenue, Flushing, NY 11354",
      describtion: "Forem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "08/04/2012",
      thumb: "thumb5.png"
    }
  ]
