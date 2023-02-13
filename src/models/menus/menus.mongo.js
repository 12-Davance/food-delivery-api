const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  categories: [
    {
      name: String,
      picture: String,
      menuItems: [
        {
          name: String,
          status: Boolean,
          picture: String,
          extras: [{ name: String, price: Number }],
          variations: [{ name: String, price: Number }],
          ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}]
        },
      ],
    },
  ]
});

module.exports = mongoose.model('Menu', menuSchema);
