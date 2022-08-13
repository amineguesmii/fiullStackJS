import  { useEffect, useState } from 'react'
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;



function SearchWelcom(props) {


    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setSearchResult(props?.liste)
    
      return () => {
        setSearchResult([])
      }
    }, [props?.liste])
    


   return (
    <div>


<Container>
      <Content>
        <HeadingWithControl>
          <Heading>Resultat</Heading>
          </HeadingWithControl>
      
      <div style={{paddingTop:"100px"}}>
             <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="center">omim Number</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {  searchResult?.map((row) => (
            <TableRow
              key={row?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row?.omimNumber}</TableCell>
              
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div style={{paddingTop:"20px"}}>
      <Button variant="outlined" onClick={()=>{props?.resetList()}}>Retour</Button>
    </div>
    </div> 
          </div>
        
      </Content>
    </Container>

    </div>
  )
}

export default SearchWelcom