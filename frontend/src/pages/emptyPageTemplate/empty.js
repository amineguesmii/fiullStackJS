import React, { useState } from "react";

import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;


function Empty() {


   return (
    <div>


<Container>
      <Content>
        <HeadingWithControl>
          <Heading>title</Heading>
          
        </HeadingWithControl>
        
      </Content>
    </Container>



    </div>
  )
}

export default Empty