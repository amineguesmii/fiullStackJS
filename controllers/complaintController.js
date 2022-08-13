// const mongoose = require("mongoose");
const Complaint = require("../models/complaintmodel"); 
const mongoose = require('mongoose')

// get all complaints
const getallcomplaints = async (req,res) =>{
    const complaints = await Complaint.find ({}).sort({createdAt: -1})
    res.status(200).json(complaints)
}


// get a single complaint 
const getonecomplaint = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such complaint'})
    }

    const complaint = await Complaint.findById(id)

    if(!complaint) {
        return res.status(404).json({erro: 'No such complaint'})
    }

    res.status(200).json(complaint)
}


// create a new complaint 
const createcomplaint = async (req , res) => {
    const Comp = req.body

    //add doc to db 
    try {

        const newcomplaint = new Complaint(Comp)
        newcomplaint.save();
        res.status(200).json(newcomplaint)
    } catch(error){
        res.status(400).json({error: error.message})


    }
}

// delete a complaint 
const deletecomplaint = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such complaint'})
    }


    const complaint = await Complaint.findByIdAndDelete({_id: id})

    if(!complaint) {
        return res.status(400).json({erro: 'No such complaint'})
    }

    res.status(200).json(complaint)


}

// update a complaint 
const updatecomplaint = async (req, res) => {

    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such complaint'})
    }

    const complaint = await Complaint.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!complaint) {
        return res.status(400).json({erro: 'No such complaint'})
    }
    res.status(200).json(complaint)

}


module.exports = {
    updatecomplaint,
    deletecomplaint,
    getallcomplaints,
    getonecomplaint,
    createcomplaint
}