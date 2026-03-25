import React from 'react'
import Subpage1 from './Subpage1'
import Subpages2 from './Subpages2'
import Secondpage1 from './Secondpage1'
import Thirdpage from './Thirdpage'
import Fourthpage from './Fourthpage'

import Datacarrier from './Commonpagewherehouse'

export default function Mainpages() {
  return (
    <div>
        <h1>main pages</h1>
        <hr />  hello
        <Subpage1 X="hi child how are you ? keep rocing keep going"/>
        <hr />
        <Subpages2 X="hi child how are you ?  keep rocing"/>
        <hr />

    <hr />

   <Datacarrier.Provider value={"hi hello keep going"}>
         <Secondpage1/>
        <hr />
        <Thirdpage/>
        <hr />
        <Fourthpage/>
   </Datacarrier.Provider>



            
    </div>
  )
}
