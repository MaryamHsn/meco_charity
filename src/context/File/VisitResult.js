import React, { useState } from 'react'
import { ShowTextarea } from '../Utils'

export default function VisitResult() {
  const [visit,setVisit] = useState(''); 
  
  return (
    <div className='card-form' style={{'flex-direction': 'column'}}>
      <ShowTextarea value='شرح بازدید اعضا صندوق خیریه' onChange={(e)=>setVisit(e.target.value)} />
    </div>
  )
}
