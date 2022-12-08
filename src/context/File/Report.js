import React,{useState} from 'react'
import { ShowCard, ShowTextarea } from '../Utils'

export default function Report() {
  const [result,setResult] =useState('');
  const [help,setHelp] =useState('');
  const [sessionNumber,setSessionNumber] =useState('');
  const [sessionDate,setSessionDate] =useState('');
  const [SessionٍManager,setSessionManager] =useState('');
  return (
    <div className='card-form' style={{'flex-direction': 'column'}}>
    <ShowTextarea value=' نتیجه مصوبه اعضای خیریه: ' onChange={(e)=>setResult(e.target.value)} ></ShowTextarea>
    <ShowTextarea value='میزان ونوع کمک مصوب شده:' onChange={(e)=>setHelp(e.target.value)} ></ShowTextarea>
    <ShowCard value='شماره جلسه:'  onChange={(e)=>setSessionNumber(e.target.value)} /> 
    <ShowCard value='  تاریخ جلسه : '  onChange={(e)=>setSessionDate(e.target.value)} /> 
    <ShowCard value='دبیر جلسه :' onChange={(e)=>setSessionManager(e.target.value)}  /> 
    </div>
  )
}
