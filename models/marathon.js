const mongoose = require('mongoose');
const Schema = mongoose.Schema;

MarathonSchema = new Schema({
  name:{
    type: String,
    required: [true, 'El nombre del maratón es requerido.']
  },
  country:{
    type: Schema.Types.ObjectId,
    ref: 'Country',
    required:[true, 'El país de la maratón es requerido.']
  },
  location:{
    type:String,
    required:[true, 'El lugar donde se realiza el maratón es requerido']
  },
  altitude: Number,
  race_web:{
    type: String,
    lowercase:true
  },
  race_logo: String,
  race_since: String,
  race_day: String,
  race_date: Date,
  race_type: {
    type: String,
    enum: ['City', 'Trail'],
    default: 'City'
  },
  distance: {
    type: Number,
    min: 42.195,
    default: 42.195
  },
  resume: String
});

module.exports = mongoose.model('Marathon', MarathonSchema);