import HeadBanner from '@/components/Layout/Banner/HeadBanner';
import Navbar from '@/components/Layout/Header/Navbar'
import ConferenceDetailsComponent4 from '@/components/Shared/Events/ConferenceDetailsComp4'
import React from 'react'

const ICETS = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='ICETS 2027'/>
    <ConferenceDetailsComponent4/>
    </>
  )
}

export default ICETS