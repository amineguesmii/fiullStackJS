import React from "react";
import { useState } from "react"
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`

// teal is the color , kenet primary 
// 500 c pour l'opacité 

  ${tw`p-10 sm:p-12 md:p-16 bg-teal-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-teal-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-teal-500 fill-current w-24`

export default () => {
  const [Nom, setNom] = useState('')
  const [Tel, setTel] = useState('')
  const [Prenom, setPrenom] = useState('')
  const [Adresse, setAdresse] = useState('')
  const [TypeReclamation, setTypeReclamation] = useState('')
  const [Email, setEmail] = useState('')
  const [ContenuReclamation, setContenuReclamation] = useState('')
  const [error, setError] = useState('null')


const handleSubmit = async (e) => {
  e.preventDefault()
 
  const complaint = {Nom, Tel, Prenom, Adresse,TypeReclamation, Email, ContenuReclamation}

  const response = await fetch('/complaint', {
    method: 'POST',
    body: JSON.stringify(complaint),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if(!response.ok) {
    setError(json.error)

  }
  if (response.ok){
    setNom('')
    setTel('')
    setPrenom('')
    setAdresse('')
    setTypeReclamation('')
    setEmail('')
    setContenuReclamation('')
   
    setError(null)
    console.log('new complaint added', json)
  }

}



  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Formulaire d'une réclamation</h2>
            <form className="create" onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                <InputContainer>
                    <Label htmlFor="name-input">Type Reclamation</Label>
                    <Input id="name-input" type="text" name="name" 
                    onChange={(e) => setTypeReclamation(e.target.value)}
                    value ={TypeReclamation} />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Nom</Label>
                    <Input id="name-input" type="text" name="name"  onChange={(e) => setNom(e.target.value)} 
                    value ={Nom} />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Prenom</Label>
                    <Input id="name-input" type="text" name="name" 
                    onChange={(e) => setPrenom(e.target.value)}
                    value ={Prenom} />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="name-input">Adresse</Label>
                    <Input id="name-input" type="text" name="name" 
                    onChange={(e) => setAdresse(e.target.value)}
                    value ={Adresse} />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="name-input">Tel:</Label>
                    <Input id="name-input" type="number" name="name" 
                    onChange={(e) => setTel(e.target.value)}
                    value ={Tel} />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Email</Label>
                    <Input id="name-input" type="text" name="name" 
                    onChange={(e) => setEmail(e.target.value)}
                    value ={Email} />
                  </InputContainer>
                  
                  
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Réclamation</Label>
                    <TextArea id="message-input" name="message" placeholder="Ex Details de votre réclamation"
                    onChange={(e) => setContenuReclamation(e.target.value)}
                    value ={ContenuReclamation} />
                  </InputContainer>
                </Column>
                
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">Envoyer</SubmitButton>
              <SubmitButton type="submit" value="Submit">Annuler</SubmitButton>   
              {/* najmou nzidou fonction idha je clique sur annuler , les champs yarj3ou fer8in  */}
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
