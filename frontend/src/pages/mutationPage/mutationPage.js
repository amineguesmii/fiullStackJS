import React from 'react'
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import Header from "../../components/headers/light.js";
import MutationTable from './mutationTable.js';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;


function MutationPage() {



  
  return (
    <div>
      <Header  />
      <Container>
      <Content>
        <HeadingWithControl>
          <Heading>
            <div style={{margin:"auto"}}>
              <h1>Mutation</h1>
            </div>
          </Heading> 
        </HeadingWithControl>
        <div style={{paddingTop:"200px"}}>
              <MutationTable />
        </div>
      </Content>
    </Container>
    </div>
  )
}

export default MutationPage