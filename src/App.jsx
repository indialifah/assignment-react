import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Heading from './components/Heading'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process.jsx'
import './app.css'

import { logo, navLinks, headList, services, studies, processes} from './const.js'


function App() {
  return (
    <>
      <Navbar logo={logo} navLinks={navLinks}/>
      <Header />
      <Heading heading={headList[0].heading} subheading={headList[0].subheading}/>
      <Services services={services}/>
      <Heading heading={headList[1].heading} subheading={headList[1].subheading} />
      <CaseStudies studies={studies}/>
      <Heading heading={headList[2].heading} subheading={headList[2].subheading} />
      <Process processes={processes}/>
      <Heading heading={headList[3].heading} subheading={headList[3].subheading} />

      <Heading heading={headList[4].heading} subheading={headList[4].subheading} />

      <Heading heading={headList[5].heading} subheading={headList[5].subheading} />
    </>
  )
}

export default App
