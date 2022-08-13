const express = require('express');
const router = express.Router();

const Gene = require('../../models/Gene');


router.get('/test', (req, res) => res.json({ msg: 'Gene Works' }));



router.post('/addMultiple',async  (req, res) => {

  let list =req.body
  console.log(list)

  await list.map((Gene1)=> {
    let add = new Gene (
      {
          name: Gene1.name,
          omimNumber:Gene1.omimNumber,
          relatedGeneRecord:Gene1.relatedGeneRecord,
          geneId:Gene1.geneId,
          proteinName:Gene1.proteinName,
          uniportId:Gene1.uniportId,
    })
     add.save()
  })
    return res.status(200).json("mchet 3asba")
});


router.post('/add',async  (req, res) => {

  let Gene = new Gene (
    {
      name: Gene.name,
      omimNumber:Gene.omimNumber,
      relatedGeneRecord:Gene.relatedGeneRecord,
      geneId:Gene.geneId,
      proteinName:Gene.proteinName,
      uniportId:Gene.uniportId,
  }

  )
  await Gene.save().then((resp)=>
    res.status(200).json(resp)
  )
  .catch((err) =>{
    res.status(500).json(err)
  })

 
});



router.post('/update', async (req, res) => {
       
  await  Gene.findOneAndUpdate({ _id: req.body.id },{
    name: Gene.name,
    omimNumber:Gene.omimNumber,
    relatedGeneRecord:Gene.relatedGeneRecord,
    who_ICD_Classification:Gene.who_ICD_Classification,
    mode_of_Inheritance:Gene.mode_of_Inheritance

  }).then((response)=>{
      return res.status(200).json(response)
  }).catch((err)=>{
      return res.status(500).json(err)
  })

});



router.get('/getAll',async  (req,res) =>{
   let list = {}
   list = await  Gene.find()
  return res.status(200).json(list);
})



router.get('/getById/:id' , async (req,res)=>{
  let Gene= await Gene.findById(req.params.id)
  return res.status(200).json(Gene)
})


router.post('/delete/:id', async (req, res) => {
  await  Gene.findByIdAndDelete(req.params.id).then((response)=>{
       return res.status(200).json(" muatation deleted")
   }).catch((err)=>{
       return res.status(200).json(err)
   })

});




module.exports = router;
