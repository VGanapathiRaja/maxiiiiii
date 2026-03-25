import React from 'react'
import { useContext } from 'react'
import Datacarrier from './Commonpagewherehouse'
export default function Fourthpage() {
    const Data3 = useContext(Datacarrier)
  return (
    <div>Fourthpage

        <h1><strong> {Data3}  </strong></h1>
    </div>
  )
}
