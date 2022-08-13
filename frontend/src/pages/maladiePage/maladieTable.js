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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Button, TextField } from '@mui/material';


export default function MaladieTable(props) {
 

  const [ListMaladie, setListMaladie] = useState([])
    const [filtredList, setFiltredList] = useState([])
    const [searchValue, setsearchValue] = useState('')
    const [searchMenu, setSearchMenu] = useState(true)


    const [nom, setNom] = useState("")
    const [relatedGeneRecord, setRelatedGeneRecord] = useState("")
    const [who_ICD_Classification, setWho_ICD_Classification] = useState("")
    const [omimId, setOmimId] = useState("")
    const [icd10code, setIcd10code] = useState("")
    const [mode_of_Inheritance, setMode_of_Inheritance] = useState("")
    const [classification, setClassification] = useState("")


    const resetList =async () => {
      await setNom("")
      await setRelatedGeneRecord("")
      await setWho_ICD_Classification("")
      await setOmimId("")
      await setIcd10code("")
     await setSearchMenu(!searchMenu)
    }
 

    const search = async ()=>{
      if( (nom.length===0) && (relatedGeneRecord.length===0) && (who_ICD_Classification.length===0) && (omimId.length===0) &&(mode_of_Inheritance.length===0)  ){
        await setFiltredList(ListMaladie)
      } else {
      
        let listAfterFilter=ListMaladie
        
      if (nom.length>0){
        listAfterFilter = await listAfterFilter.filter((maladie) => maladie?.name?.toLowerCase().includes(nom.toLowerCase()))
      }
      if(omimId.length>0){
        listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.omimNumber?.toLowerCase().includes(omimId.toLowerCase()))
      }
      if(mode_of_Inheritance.length>0){
        listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.mode_of_Inheritance?.toLowerCase().includes(mode_of_Inheritance.toLowerCase()))
      }

      if(who_ICD_Classification.length>0){
        listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.who_ICD_Classification?.toLowerCase().includes(who_ICD_Classification.toLowerCase()))
      }
      
     await  setFiltredList(listAfterFilter)

      }
     await setSearchMenu(!searchMenu)
    }



    useEffect(() => {
      init()
    }, [])

  useEffect(() => {
      setFiltredList(ListMaladie)
    }, [ListMaladie])

 

    const init =()=>{
        axios.get("http://localhost:3100/api/disease/getAll")
        .then((response) =>{
            setListMaladie(response.data)
        })
    }


  return ( 
    <div style={{margin:"auto" , maxWidth:"1200px"}}>
      
      <div style={{paddingTop:"70px"}}>
    {searchMenu===false ?
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="center">omim Number</TableCell>
            <TableCell align="center">related Gene Record</TableCell>
            <TableCell align="center">WHO-ICD-CLassification</TableCell>
            <TableCell align="center">Mode of Inheritance</TableCell>
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
              <TableCell align="center">{row?.omimNumber}</TableCell>
              <TableCell align="center">{row?.relatedGeneRecord}</TableCell>
              <TableCell align="center">{row?.who_ICD_Classification}</TableCell>
              <TableCell align="center">{row?.mode_of_Inheritance}</TableCell>
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
        <TextField id="outlined-basic" label="OMIM Number*" variant="outlined"  onChange={(e)=>{setOmimId(e.target.value)}}/>
      </div>

      <div style={{paddingLeft:"20px"}}>
        <TextField id="outlined-basic" label="who_ICD_Classification" variant="outlined"  onChange={(e)=>{setWho_ICD_Classification(e.target.value)}}/>
      </div>
        
      </div>


      <div style={{display:"flex" , flexDirection:"row" , paddingTop:"20px"}}>
      <div>
        <TextField id="outlined-basic" label="mode of inheritance*" variant="outlined" onChange={(e)=>{setMode_of_Inheritance(e.target.value)}} />
      </div>

      {/*<div style={{paddingLeft:"20px"}}>
        <TextField id="outlined-basic" label="Disease Classification*" variant="outlined"  onChange={(e)=>{setClassification(e.target.value)}}/>
      </div>
      
        
      </div>


      <div style={{display:"flex" , flexDirection:"row" , paddingTop:"20px"}}>
      <div>
        <TextField id="outlined-basic" label="Incidence rate" variant="outlined" />
      </div>

      <div style={{paddingLeft:"20px"}}>
        <TextField id="outlined-basic" label="HPO Terms" variant="outlined" />
      </div>
      */ }
        
      </div>







      <div style={{display:"flex" , flexDirection:"row" , paddingTop:"40px", justifyContent:"flex-end"}}>
        <Button variant="outlined" onClick={()=>search()}>Search</Button>
      </div>
    
    
    
    </div>}
    
    
    
    
    
    </div>
      </div>
    
  );
}
