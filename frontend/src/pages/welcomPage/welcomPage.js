import AnimationRevealPage from 'helpers/AnimationRevealPage'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Hero from "../../components/hero/TwoColumnWithInput.js";
import SearchWelcom from './searchWelcom.js';


function WelcomPage() {

  const [searchLabel, setSearchLabel] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [maladieList, setMaladieList] = useState([])
  const [geneList, setGeneList] = useState([])
  const [startSearch, setStartSearch] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3100/api/disease/getAll")
        .then((response) =>{
          setMaladieList(response.data)
        })
        axios.get("http://localhost:3100/api/gene/getAll")
        .then((response) =>{
          setGeneList(response.data)
        })
  }, [])


  
  const search = async ()=>{
    console.log("searchLabel  " + searchLabel);
    
    let filtredMaladie={}
    filtredMaladie = await maladieList.filter((maladie) => maladie?.name?.toLowerCase().includes(searchLabel.toLowerCase()))

    console.log("filtredMaladie" , filtredMaladie)

    let filtredGene={}
    filtredGene= await geneList?.filter((gene)=>{
      gene?.name?.toLowerCase()?.includes(searchLabel?.toLowerCase())
    })
    console.log("filtredGene" , filtredGene)


    let allCombined=[]
    await filtredMaladie.map((maladie)=>{
       allCombined.push({name:maladie.name , omimNumber:maladie.omimNumber})
    })

    await filtredGene.map((gene)=>{
       allCombined.push({name:gene.name , omimNumber:gene.omimNumber})
    })
     console.log("allCombined" , allCombined)
   await setSearchResult(allCombined)
   await setStartSearch(true)

  }

  const resetList= async ()=>{
    await setStartSearch(false)
  }


  return (
    <div>
      {startSearch === false &&
      <div>
      <AnimationRevealPage>
        <Hero roundedHeaderButton={true} />
        <TextField
            helperText=""
            id="demo-helper-text-aligned"
            label="Recherche"
            onChange={(e)=>{setSearchLabel(e.target.value)}}
        />
        <Button variant="outlined" onClick={()=>search()}>Search</Button>
    
      </AnimationRevealPage>
      </div>}


      {startSearch === true &&
      <div>
        <SearchWelcom  liste={searchResult} resetList={resetList}/>
      </div>
     }


    </div>
  )
}

export default WelcomPage