import React from "react";

import ContactUsForm from "components/forms/SimpleContactUs.js";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
 import Header from  "components/headers/light.js";


export default () => (
 
    <AnimationRevealPage>
        <Header />
    <TwoColSingleFeatureWithStats />
     <ContactUsForm />
  
     </AnimationRevealPage>
    
 
);
