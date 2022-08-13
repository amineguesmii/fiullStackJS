import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState }from 'react'
import axios from 'axios';
import {Button, TextField } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';




export default function MutationTable(props) {
 

  const [listeMutation, setlisteMutation] = useState([])
    const [filtredList, setFiltredList] = useState([])
    const [searchValue, setsearchValue] = useState('')
    const [searchMenu, setSearchMenu] = useState(true)


    const [nom, setNom] = useState("")
    const [relatedGeneRecord, setRelatedGeneRecord] = useState("")
    const [dbSNP, setDbSNP] = useState("")
    const [relatedDiseaseRecord, setRelatedDiseaseRecord] = useState("")
    const [clinvarClinicalSignificance, setClinvarClinicalSignificance] = useState("")



    const resetList =async () => {
     await setNom("")
     await setRelatedGeneRecord("")
     await setDbSNP("")
     await setRelatedDiseaseRecord("")
     await setClinvarClinicalSignificance("")
     await setSearchMenu(!searchMenu)
    }
 
 
    


    const search = async ()=>{
      if( (nom.length===0) && (relatedGeneRecord.length===0) && (dbSNP.length===0) && (relatedDiseaseRecord.length===0) &&(clinvarClinicalSignificance.length===0)  ){
        await setFiltredList(listeMutation)
      } else {
      
        let listAfterFilter=listeMutation
        
      if (nom.length>0){
        listAfterFilter = await listAfterFilter.filter((maladie) => maladie?.name?.toLowerCase().includes(nom.toLowerCase()))
      }
      if(dbSNP.length>0){
        listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.dbSNP?.toLowerCase().includes(dbSNP.toLowerCase()))
      }
      if(relatedDiseaseRecord.length>0){
        listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.relatedDiseaseRecord?.toLowerCase().includes(relatedDiseaseRecord.toLowerCase()))
      }

      if(clinvarClinicalSignificance.length>0){
        listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.clinvarClinicalSignificance?.toLowerCase().includes(clinvarClinicalSignificance.toLowerCase()))
      }
      
     await  setFiltredList(listAfterFilter)

      }
     await setSearchMenu(!searchMenu)
     
    }



    useEffect(() => {
      init()
    }, [])

  useEffect(() => {
      setFiltredList(listeMutation)
    }, [listeMutation])

 

    const init =()=>{
        axios.get("http://localhost:3100/api/mutation/getAll")
        .then((response) =>{
          setlisteMutation(response.data)
        })
    }





  return ( 
    <div style={{margin:"auto" , maxWidth:"1200px"}}>
      
      <div style={{paddingTop:"70px"}}>
    {(searchMenu===false) ?
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="center">Genomic Location</TableCell>
            <TableCell align="center">related Gene Record</TableCell>
            <TableCell align="center">dbSNP</TableCell>
            <TableCell align="center">Clinvar</TableCell>
            <TableCell align="center">Related Disease Record</TableCell>
            <TableCell align="center">Clinvar Clinical Significance</TableCell>
            <TableCell align="center">View details</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {  filtredList?.map((row) => (
            <TableRow
              key={row?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row?.genomicLocation}</TableCell>
              <TableCell align="center">{row?.relatedGeneRecord}</TableCell>
              <TableCell align="center">{row?.dbSNP}</TableCell>
              <TableCell align="center">{row?.clinvar}</TableCell>
              <TableCell align="center">{row?.relatedDiseaseRecord}</TableCell>
              <TableCell align="center">{row?.clinvarClinicalSignificance}</TableCell>
              <TableCell align="right" ><RemoveRedEyeIcon /></TableCell>
              <TableCell align="right" ><DeleteIcon /></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div style={{paddingTop:"20px"}}>
      <Button variant="outlined" onClick={()=>{resetList()}}>Retour</Button>
    </div>
    </div>
    :
    
    <div style={{display:"flex" , flexDirection:"column" , margin:"auto" , maxWidth:"400px" }}>
      <div style={{display:"flex" , flexDirection:"row"}}>
      <div>
        <TextField id="outlined-basic" label="Nom*" variant="outlined" onChange={(e)=>{setNom(e.target.value)}}/>
      </div>

      <div style={{paddingLeft:"20px"}}>
        <TextField id="outlined-basic" label="Related Gene Record" variant="outlined" onChange={(e)=>{setRelatedGeneRecord(e.target.value)}} />
      </div>
        
      </div>


      <div style={{display:"flex" , flexDirection:"row" , paddingTop:"20px"}}>
      <div>
        <TextField id="outlined-basic" label="DbSNP" variant="outlined"  onChange={(e)=>{setDbSNP(e.target.value)}}/>
      </div>

      <div style={{paddingLeft:"20px"}}>
        <TextField id="outlined-basic" label="Clinvar Clinical Significance" variant="outlined" onChange={(e)=>{setClinvarClinicalSignificance(e.target.value)}} />
      </div>
        
      </div>


      <div style={{display:"flex" , flexDirection:"row" , paddingTop:"20px"}}>
      <div>
        <TextField id="outlined-basic" label="Related Disease Record" variant="outlined" onChange={(e)=>{setRelatedDiseaseRecord(e.target.value)}} />
      </div>

      
        
      </div>


   

      <div style={{display:"flex" , flexDirection:"row" , paddingTop:"40px", justifyContent:"flex-end"}}>
        <Button variant="outlined" onClick={()=>search()}>Search</Button>
      </div>
    
    
    
    </div>}
    
    
    
    
    
    </div>
      </div>
    
  );
}
