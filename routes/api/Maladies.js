const express = require('express');
const router = express.Router();

const Maladie = require('../../models/Maladie');


router.get('/test', (req, res) => res.json({ msg: 'maladie Works' }));





router.post('/addMultiple',async  (req, res) => {

  let list =req.body
  console.log(list)

  await list.map((maladie)=> {
    console.log(maladie)
    let add = new Maladie (
      {
        name: maladie.Name,
        omimNumber:maladie.omimNumber,
        relatedGeneRecord:maladie.relatedGeneRecord,
        who_ICD_Classification:maladie.who_ICD_Classification,
        mode_of_Inheritance:maladie.mode_of_Inheritance
    })
     add.save()
  })
    return res.status(200).json("mchet 3asba")
});


router.post('/add',async  (req, res) => {

  let maladie = new Maladie (
    {
    
      name: maladie.Name,
      omimNumber:maladie.omimNumber,
      relatedGeneRecord:maladie.relatedGeneRecord,
      who_ICD_Classification:maladie.who_ICD_Classification,
      mode_of_Inheritance:maladie.mode_of_Inheritance
  
  }

  )
  await maladie.save().then((resp)=>
    res.status(200).json(resp)
  )
  .catch((err) =>{
    res.status(500).json(err)
  })

 
});



router.post('/update', async (req, res) => {
       
  await  Maladie.findOneAndUpdate({ _id: req.body.id },{
    name: maladie.name,
    omimNumber:maladie.omimNumber,
    relatedGeneRecord:maladie.relatedGeneRecord,
    who_ICD_Classification:maladie.who_ICD_Classification,
    mode_of_Inheritance:maladie.mode_of_Inheritance

  }).then((response)=>{
      return res.status(200).json(response)
  }).catch((err)=>{
      return res.status(500).json(err)
  })

});



router.get('/getAll',async  (req,res) =>{
   let list = {}
   list = await  Maladie.find()
  return res.status(200).json(list);
})



router.get('/getById/:id' , async (req,res)=>{
  let maladie= await Maladie.findById(req.params.id)
  return res.status(200).json(maladie)
})


router.post('/delete/:id', async (req, res) => {
  await  Maladie.findByIdAndDelete(req.params.id).then((response)=>{
       return res.status(200).json(" muatation deleted")
   }).catch((err)=>{
       return res.status(200).json(err)
   })

});




module.exports = router;
