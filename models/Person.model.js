let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  favoriteFoods: {
    type: [String],
  },
});

module.exports = mongoose.model("Person", PersonSchema);
