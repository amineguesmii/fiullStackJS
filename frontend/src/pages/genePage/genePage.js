import React from 'react'
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import Header from "../../components/headers/light.js";
import GeneList from './geneList';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;

function GenePage() {
  return (
   <div>
      <Header  />
      <Container>
      <Content>
        <HeadingWithControl>
          <Heading>
            <div style={{margin:"auto"}}>
              <h1>Gene</h1>
            </div>
          </Heading> 
        </HeadingWithControl>
        <div style={{paddingTop:"100px"}}>
              <GeneList/>
        </div>
      </Content>
    </Container>
</div>
  )
}

export default GenePage