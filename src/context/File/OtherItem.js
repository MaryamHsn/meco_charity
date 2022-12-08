import React,{useState} from 'react'
import { ShowCardPrice, ShowTextarea } from '../Utils'

export default function OtherItem() {
  const [homeStatus,setHomeStatus] = useState('rental')
  const [input,setInput] = useState('text')
  const [rentMounth,setRentMounth] = useState(0)
  const [rent,setRent] = useState(0)

  const options=[
    {label:'شخصي' , value:'personal'},
    {label:'منزل پدري' , value:'paternal'},
    {label:'استیجاری' , value:'rental'}
  ]
  const handleChange = (event) => {
    setHomeStatus(event.target.value);
    if(event.target.value === 'rental'){ 
      setInput('text') 
    }
    else{
      setInput('hidden')
    }
  };
  return (
    <div className='card-form' style={{'flex-direction': 'column'}}>
     <div>
      <label className='card-label'>وضعیت مسکن</label>
      <select value={homeStatus} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
      </select> 
      <ShowCardPrice value='مبلغ رهن: ' onChange={(e)=>setRent(e.target.value)} />
      {<br />}
      {<br />}
      <ShowCardPrice value='مبلغ اجاره ماهیانه: ' onChange={(e)=>setRentMounth(e.target.value)} />
      {/* <input  className='input-form' type={input} value={(e)=>setRent(e.target.value)} placeholder='مبلغ رهن به ریال' ></input>
      <input  className='input-form' type={input} value={(e)=>setRentMounth(e.target.value)} placeholder='مبلغ اجاره ماهیانه به ریال' ></input> */}
     </div> 
     <ShowTextarea value='آیا خانواده تحت پوشش بیمه هستند؟درصورت مثبت بودن نام ونوع بیه را بنویسید' />
     <ShowTextarea value=' وضعیت ظاهری منزل:' />
     <ShowTextarea value=' وضعیت ظاهری و اعتیاد نیازمند و اعضای خانواده از نظر معرف:' />
     <ShowTextarea value='میزان و نوع کمک درخواستی:' />
    </div>
  )
}
