const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MaladieSchema = new Schema({
  name: {
    type: String,
    
  },
  omimNumber: {
    type: String,
    
  },
  relatedGeneRecord: {
    type: String,
    
  },
  who_ICD_Classification: {
    type: String,
    
  },
  mode_of_Inheritance: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  alternativeNames: {
    type: String,
    
  },
  
 
});

module.exports = Post = mongoose.model('maladie', MaladieSchema);
