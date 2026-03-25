import React from 'react'
import { useContext } from 'react'
import Datacarrier from './Commonpagewherehouse'

export default function Secondpage1() {
    const Data1 = useContext(Datacarrier);
  return (
    <div>Secondpage1


        <h1><strong>  {Data1}  </strong></h1>
    </div>
  )
}
