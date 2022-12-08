import React,{useState} from 'react'
import { ShowCardInTable } from '../Utils'

export default function AddTransaction(){
  function Add(){  
    console.log('todo:  ') 
}
const[name,setName]=useState('')
const[personalNO,setPersonalNO]=useState('')
const[agreement,setAgreement]=useState('')
const[department,setDepartment]=useState('')
const[price,setPrice]=useState('')
const[dateYear,setDateYear]=useState('')
const[dateMounth,setDateMounth]=useState('')
const[period,setPeriod]=useState(6)
return (
<div className='card-form-table'>
<div className='table-arrenge'> 
  <table >
    <tbody>
    <ShowCardInTable value='نام و نام خانوادگی :' onChange={(e)=>setName(e.target.value)}/>
    <ShowCardInTable value='شماره پرسنلي:' onChange={(e)=>setPersonalNO(e.target.value)}/>
    <ShowCardInTable value='نوع قرارداد:' onChange={(e)=>setAgreement(e.target.value)}/>
    <ShowCardInTable value='مديريت:' onChange={(e)=>setDepartment(e.target.value)}/>    
    </tbody>
  </table> 
  <table  >
    <tbody>
    <ShowCardInTable value='مبلغ :' onChange={(e)=>setPrice(e.target.value)}/>
    <ShowCardInTable value='از حقوق ماه:' onChange={(e)=>setDateMounth(e.target.value)}/>
    <ShowCardInTable value='از حقوق سال:' onChange={(e)=>setDateYear(e.target.value)}/>
    <ShowCardInTable value='به مدت:' onChange={(e)=>setPeriod(e.target.value)}/>
    </tbody>
  </table>


</div>
<div>
 <button type="button" className="btn-add-row"  onClick={Add}>افزودن شرکت کننده</button>
</div>
</div>
)
}
