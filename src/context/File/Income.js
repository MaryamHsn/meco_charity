import React,{useEffect, useState} from 'react';
import { ShowCardPrice, ShowTextarea } from '../Utils';

export default function Income() {
  const [jobStatus,setJobStatus] = useState('withoutJob')
  const [job ,setJob ] = useState('')
  const [input,setInput] = useState('hidden') 
  const [totalIncome,setTotalIncome]=useState(0)
  const [pureIncome,setPureIncome]=useState(0)
  const [subsidy,setSubsidy]=useState(0)
  const [charity,setCharity]=useState(0)
  const options=[
    {label:'شاغل' , value:'haveJob'},
    {label:'بیکار' , value:'withoutJob'},
    {label:'از کار افتاده' , value:'notAble'},
    {label:'بازنشسته' , value:'retired'}
  ]
const calcTotalIncome =()=>{
  setTotalIncome(pureIncome+charity+subsidy) 
}

  const handleChange = (event) => {
    // event.preventDefault()
    setJobStatus(event.target.value);
    if(event.target.value === 'haveJob'){ 
      setInput('text') 
      
    }
    else{
      setInput('hidden')
    }
  };
  const calcPureIncome=(event) =>{ 
    let temp= parseInt(event.target.value); 
    setPureIncome(temp); 
    calcTotalIncome();
  } 
  const calcSubsidy=(event) =>{ 
    let temp= parseInt(event.target.value); 
    setSubsidy(temp); 
    calcTotalIncome();
  } 
  const calcCharity=(event) =>{ 
    let temp= parseInt(event.target.value); 
    setCharity(temp); 
    calcTotalIncome();
  }
  useEffect=(()=>{ 
    // console.log("before/ pureIncome :",pureIncome,"charity:  "+charity+" subsidy:  "+subsidy)
    setTotalIncome(()=>{ 
    // console.log("after/ pureIncome :",pureIncome,"charity:  "+charity+" subsidy:  "+subsidy)
      
      return totalIncome=pureIncome+charity+subsidy
    })
    return()=>{
      setTotalIncome(()=>totalIncome=pureIncome+charity+subsidy)
    }
  },[pureIncome,charity,subsidy])

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('UseEffect', count)
  //   setInterval(() => {
  //     console.log('setInterval', count)
  //     setCount(s => s + 1)
  //     /////
  //       // setCount(count => {
  //       //   console.log('Set Count:', count)
  //       //   return count + 1
  //       // })
  //   }, 10000)
  // }, [])
  return (
    <div className='card-form' style={{'flex-direction': 'column'}}>
      <div>
      <label className='card-label'>وضعیت اشتغال</label>
      <select value={jobStatus} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <input type={input} value={(e)=>setJob(e.target.value)} placeholder='شغل خود را بنویسید' ></input>
     </div> 
     <ShowCardPrice value='مجموع درآمد ماهیانه خانوار:' onChange={totalIncome} /> 
     <ShowCardPrice value='مبلغ حقوق ماهیانه:' onChange={calcPureIncome} /> 
     <ShowCardPrice value='یارانه:' onChange={calcSubsidy} /> 
     <ShowCardPrice value='کمکهای نقدی دوستان وآشنایان و خویشاوندان:' onChange={calcCharity} /> 
     <ShowTextarea value='آیا در حال حاضر از دوستان وآشنایان کمک نقدی دریافت می نمایید؟ مقدار و نوع آن را بنویسید' />
     <ShowTextarea value='آیا تحت پوشش بهزیستی، کمیته امداد یا سایر موسسات خیریه هستید؟مقدار و نوع کمک درافتی های ماهانه را به صورت دقیق بنویسید' />
    
    </div>
  )
}