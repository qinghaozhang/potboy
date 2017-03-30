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

RestaurantSchema.index({'address': 'text'});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
var Restaurant = mongoose.model('Restaurant', RestaurantSchema)

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function(){
  console.log("database connected")
  Restaurant.remove({},function(err){
    Restaurant.create(restaurant , function(err, data){});
  })
})

module.exports = Restaurant;

// fake data restaurant for testing
var restaurant = [
    {
      id: 1,
      name: "Elmhurst Beef Stew",
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
      name: "Maspeth Crazy Bowl",
      rate: 2,
      address: "95-25 Queens Blvd, Rego Park, NY 11374",
      describtion: "Corem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "12/02/2001",
      thumb: "thumb3.png"
    },
    {
      id: 4,
      name: "Jackson Height Japanese House",
      rate: 3,
      address: "136-59 37th Avenue, Flushing, NY 11354",
      describtion: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
      update_time: "08/02/2012",
      thumb: "thumb4.png"
    },
    {
      id: 5,
      name: "Forest Hill Spicy Inn",
      rate: 3,
      address: "83-02 Broadway, Queens, NY 11373",
      describtion: "Eorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "08/23/2012",
      thumb: "thumb5.png"
    },
    {
      id: 6,
      name: "Uptown Thai Food",
      rate: 4,
      address: "1411 2nd Ave, New York, NY 10021",
      describtion: "Forem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "08/04/2017",
      thumb: "thumb6.png"
    },
    {
      id: 7,
      name: "Mountant Top Italian",
      rate: 4,
      address: "302 E 12th St, New York, NY 10003",
      describtion: "Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "08/04/2012",
      thumb: "thumb7.png"
    },
    {
      id: 8,
      name: "Brooklyn Burger",
      rate: 4,
      address: "259 5th Ave, Brooklyn, NY 11215",
      describtion: "Horem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "08/14/2013",
      thumb: "thumb8.png"
    },
    {
      id: 9,
      name: "Mountant top Hot Pot",
      rate: 4,
      address: "325 E 34th St, New York, NY 10016",
      describtion: "Iorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      update_time: "09/02/2011",
      thumb: "thumb9.png"
    }
  ]
