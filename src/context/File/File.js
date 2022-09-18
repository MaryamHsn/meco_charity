import React, { useState } from 'react'
import HelpingRequested from './HelpingRequested';
import NeedyInformation from './NeedyInformation';
import Income from './Income'
import LifeSituatationsecond from './LifeSituatation'
import Researchers from './Researchers'
import VisitResult from './VisitResult'
import OtherItem from './OtherItem';
import Report from './Report'

export default function File() {
  const [helpingRequested,setHelpingRequested]= useState(false);
  const [income,setIncome]= useState(false); 
  const [lifeSituatation,setLifeSituatation]= useState(false); 
  const [needyInformation,setNeedyInformation]= useState(false);
  const [otherItem,setOtherItem]= useState(false); 
  const [report,setReport]= useState(false); 
  const [researchers,setReasearchers]= useState(false); 
  const [visitResult,setVisitResult]= useState(false); 
   
    return (
    <div className='box'>      
    <div>
      <table>
      <tbody>
        <tr>
         <td><label >شماره پرونده</label></td>
         <td><input type='text' className='input-form'></input></td>
        </tr>
        <tr><td><label>تاریخ</label></td>
        <td><input type='date' className='input-form'></input></td>
        </tr>
        </tbody>
      </table>
    </div>
       <div className='card'>
       <button className='btn' onClick={()=>setNeedyInformation(!needyInformation)}>
            {needyInformation? <span>- مشخصات نیازمند</span> : <span> + مشخصات نیازمند</span>}
        </button>
        <p>
            {needyInformation && <NeedyInformation />}
        </p>
        <button className='btn' onClick={()=>setLifeSituatation(!lifeSituatation)}>
            {lifeSituatation? <span>- وضعیت فرزندان و اعضاء خانواده</span> : <span> + وضعیت فرزندان و اعضاء خانواده</span>}
        </button>
        <p>
            {lifeSituatation && <LifeSituatationsecond />}
        </p>
        <button className='btn' onClick={()=>setIncome(!income)}>
            {income? <span> - درآمد</span> : <span>+ درآمد</span>}
        </button>
        <p>
            {income && <Income />}
        </p>
        <button className='btn' onClick={()=>setOtherItem(!otherItem)}>
            {otherItem? <span> - سایر موارد</span> : <span>+ سایر مورد</span>}
        </button>
        <p>
            {otherItem && <OtherItem />}
        </p>        
        <button className='btn' onClick={()=>setHelpingRequested(!helpingRequested)}>
            {helpingRequested? <span>- کمک های درخواستی</span> : <span>+ کمک های درخواستی</span>}
        </button>
        <p>
        {helpingRequested && <HelpingRequested />}
        </p>
        <button className='btn' onClick={()=>setVisitResult(!visitResult)}>
            {visitResult? <span> - شرح بازدید</span> : <span>+ شرح بازدید</span>}
        </button>
        <p>
            {visitResult && <VisitResult />}
        </p>
        <button className='btn' onClick={()=>setReasearchers(!researchers)}>
            {researchers? <span> - افراد محقق</span> : <span>+ افراد محقق</span>}
        </button>
        <p>
            {researchers && <Researchers />}
        </p>
        <button className='btn' onClick={()=>setReport(!report)}>
            {report? <span> - گزارش</span> : <span>+ گزارش</span>}
        </button>
        <p>
            {report && <Report />}
        </p>
        <button className='btn-submit' >ثبت</button>    
       </div>
            
    </div>
  )
}
 