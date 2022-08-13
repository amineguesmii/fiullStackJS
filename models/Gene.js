const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GeneSchema = new Schema({
  name: {
    type: String,
    
  },
  omimNumber: {
    type: String,
    
  },
  relatedDiseaseRecord: {
    type: String,
    
  },
  geneId: {
    type: String,
    
  },
  proteinName: {
    type: String,
    
  },
  uniportId: {
    type: String,
    
  },
  
 
});

module.exports = Post = mongoose.model('Gene', GeneSchema);
