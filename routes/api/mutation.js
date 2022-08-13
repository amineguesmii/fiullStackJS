const express = require('express');
const router = express.Router();

const Mutation = require('../../models/Mutation');


router.get('/test', (req, res) => res.json({ msg: 'mutation Works' }));


router.get('/getAll',async  (req,res) =>{
    let list = {}
    list = await  Mutation.find()
   return res.status(200).json(list);
 })


router.post('/addMultiple',async  (req, res) => {

  let list =req.body
  console.log(list)

  await list.map((mutation)=> {
    console.log(mutation)
    let add = new Mutation (
      {
        name: mutation.name,
        genomicLocation: mutation.genomicLocation,
        relatedGeneRecord: mutation.relatedGeneRecord,
        dbSNP: mutation.dbSNP,
        clinvar: mutation.Clinvar,
        relatedDiseaseRecord: mutation.relatedDiseaseRecord,
        clinvarClinicalSignificance: mutation.clinvarClinicalSignificance,
        clinicalSignification: mutation.clinicalSignification,
        
    })
     add.save()
  })
    return res.status(200).json("mchet 3asba")
});




module.exports = router;
