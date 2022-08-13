const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MutationSchema = new Schema({
  name: {
    type: String,
    
  },
  genomicLocation: {
    type: String,
    
  },
  relatedGeneRecord: {
    type: String,
    
  },
  dbSNP: {
    type: String,
    
  },
  clinvar: {
    type: String,
    
  },
  relatedDiseaseRecord: {
    type: String,
    
  },
  clinvarClinicalSignificance: {
    type: String,
    
  },
  clinicalSignification: {
    type: String,
    
  },
  
 
});

module.exports = Post = mongoose.model('mutation', MutationSchema);
