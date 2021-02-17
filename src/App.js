import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from 'axios'

import Header from './components/header'
import InfoCard from './components/infoCard'
import Picture from './components/picture'
import Footer from './components/footer'

import API_KEY from './keys/constants'

const Root =  styled.div`
  padding: 20em;
  margin: 0;
  box-sizing: border-box;
`

export default function App() {

  const [nasaInfo, setNasaInfo] = useState([])
  // const [picture, setPicture] = useState(null)

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then( res => {
      setNasaInfo(res.data)
    })
    .then(
      console.log('Fetching...')
    )
    .catch(err => [
      console.log(`${err}`)
    ])
  }, [])

  return (
    <Root>
      <Header />
      <InfoCard info={nasaInfo}/>
      <Picture info={nasaInfo}/>
      <Footer info={nasaInfo}/>
    </Root>
  );
}


