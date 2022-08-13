import React from 'react'
import MaladieTable from "./maladieTable";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import Header from "../../components/headers/light.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;


function MaladiePage() {








  
  return (
    <div>
      <Header  />
      <Container>
      <Content>
        <HeadingWithControl>
          <Heading>
            <div style={{margin:"auto"}}>
              <h1>Maladie</h1>
            </div>
          </Heading> 
        </HeadingWithControl>
        <div style={{paddingTop:"100px"}}>
              <MaladieTable/>
        </div>
      </Content>
    </Container>
    </div>
  )
}

export default MaladiePage