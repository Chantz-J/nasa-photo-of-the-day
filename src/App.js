import React, { useState } from "react";
import styled from 'styled-components'

import Header from './components/header'
import InfoCard from './components/infoCard'
import Picture from './components/picture'
import Footer from './components/footer'


const Root =  styled.div`
  padding: 20em;
  margin: 0;
  box-sizing: border-box;
`

export default function App() {

  const [nasaInfo, setNasaInfo] = useState([])
  const [picture, setPicture] = useState(null)

  return (
    <Root>
      <Header />
      <InfoCard />
      <Picture />
      <Footer />
    </Root>
  );
}


