import React from 'react'
import Head from '../ComponentsWebDesign/Head/Head'

import HeaderWeb from '../ComponentsWebDesign/HeaderWeb/HeaderWeb'
import Navigationweb from '../ComponentsWebDesign/Navigationweb/Navigationweb'
import PrivacyContent from '../ComponentsWebDesign/PrivacyContent/PrivacyContent'



const WebDesign = () => {
    return (
        <div>
          <HeaderWeb></HeaderWeb>
          {/* <Navigationweb></Navigationweb> */}
          <Head></Head>
          <PrivacyContent></PrivacyContent>
        </div>
    )
}

export default WebDesign
