import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';




function GeneList() {

    const [ListGene, setListGene] = useState([])
    const [filtredList, setFiltredList] = useState([])
    const [searchMenu, setSearchMenu] = useState(true)
    


    const [nom, setNom] = useState("")
    const [gene, setGene] = useState("")
    const [omimId, setOmimId] = useState("")
    const [proteinName, setProteinName] = useState("")
    const [uniportId, setUniportId] = useState("")

    const resetList =async () => {
        await setNom("")
        await setGene("")
        await setOmimId("")
        await setProteinName("")
        await setUniportId("")
        await setSearchMenu(!searchMenu)
       }


       const search = async ()=>{
        if( (nom.length===0) && (gene.length===0) && (omimId.length===0)  && ( proteinName?.length===0 ) && ( uniportId?.length===0 )){
          await setFiltredList(ListGene)
        } else {
        
          let listAfterFilter=ListGene
          
        if (nom.length>0){
          listAfterFilter = await listAfterFilter.filter((maladie) => maladie?.name?.toLowerCase().includes(nom.toLowerCase()))
        }
        
        if(gene.length>0){
          listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.geneId?.toLowerCase().includes(gene.toLowerCase()))
        }
        if(omimId.length>0){
          listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.omimNumber?.toLowerCase().includes(omimId.toLowerCase()))
        }
        if(proteinName.length>0){
          listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.proteinName?.toLowerCase().includes(proteinName.toLowerCase()))
        }
        if(uniportId.length>0){
          listAfterFilter =await listAfterFilter.filter((maladie) => maladie?.uniportId?.toLowerCase().includes(uniportId.toLowerCase()))
        }
        
       await  setFiltredList(listAfterFilter)
  
        }
       await setSearchMenu(!searchMenu)
      }



    useEffect(() => {
        init()
      }, [])
  
    useEffect(() => {
        setFiltredList(ListGene)
      }, [ListGene])
  
   
  
      const init =()=>{
          axios.get("http://localhost:3100/api/gene/getAll")
          .then((response) =>{
              setListGene(response.data)
          })
      }



      
      return (
        <div style={{margin:"auto" , maxWidth:"1200px"}}>
          
          <div>
            
          <div style={{paddingTop:"70px"}}>
        {searchMenu===false ?
        <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>gene id</TableCell>
                <TableCell align="center">nom</TableCell>
                <TableCell align="center">omim Number</TableCell>
                <TableCell align="center">protein Name</TableCell>
                <TableCell align="center">uniport Id</TableCell>
                <TableCell align="center">View details</TableCell>
                <TableCell align="center">Delete</TableCell>

                
                
              </TableRow>
            </TableHead>
            <TableBody>
              {  filtredList?.map((row) => (
                <TableRow
                  key={row?.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.geneId}</TableCell>
                  <TableCell align="center">{row?.name}</TableCell>
                  <TableCell align="center">{row?.omimNumber}</TableCell>
                  <TableCell align="center">{row?.proteinName}</TableCell>
                  <TableCell align="center">{row?.uniportId}</TableCell>
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
          <div >
          <TextField
              id="standard-size-normal"
              defaultValue=""
              placeholder='Gene Id'
              variant="outlined"
              onChange={(e)=>{setGene(e.target.value)}}
            />
          </div>
          
          <div style={{paddingLeft:"20px"}}>
          <TextField
              id="standard-size-normal"
              defaultValue=""
              placeholder='Nom'
              variant="outlined"
              onChange={(e)=>{setNom(e.target.value)}}
            />
          </div>
    
          
            
          </div>
    
    
          <div style={{display:"flex" , flexDirection:"column" , margin:"auto" , maxWidth:"400px" }}>
          <div style={{display:"flex" , flexDirection:"row" , paddingTop:"20px"}}>
            <div>
          <TextField
              id="standard-size-normal"
              defaultValue=""
              placeholder='OMIM Number*'
              variant="outlined"
              onChange={(e)=>{setOmimId(e.target.value)}}
            />
          </div>
          <div style={{paddingLeft:"20px"}}>
          <TextField
              id="standard-size-normal"
              defaultValue=""
              placeholder='Protein Name'
              variant="outlined"
              onChange={(e)=>{setProteinName(e.target.value)}}
            />
          </div>
          </div>
          </div>


          <div style={{display:"flex" , flexDirection:"column" , margin:"auto" , maxWidth:"400px" ,  paddingTop:"20px"}}>
          <div >
            <div >
          <TextField
              id="standard-size-normal"
              defaultValue=""
              placeholder='Uniport Id'
              variant="outlined"
              onChange={(e)=>{setUniportId(e.target.value)}}
            />
          </div>
          </div>
          </div>
    
          
    
    
    
          <div style={{display:"flex" , flexDirection:"row" , paddingTop:"40px", justifyContent:"flex-end"}}>
            <Button variant="outlined" onClick={()=>search()}>Rechercher</Button>
          </div>
        
        
        
        </div>}
        
        
        
        
        
        </div>
          </div>
        </div>
      )
}

export default GeneList