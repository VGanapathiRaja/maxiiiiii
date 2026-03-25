import React from 'react'
import { useContext } from 'react';
import Datacarrier from './Commonpagewherehouse';
export default function Thirdpage() {
    const Data2 = useContext(Datacarrier)
  return (
    <div>Thirdpage


        <h1><strong>  {Data2} </strong></h1>
    </div>

    
  )
}
