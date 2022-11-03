import React,{useEffect, useState} from 'react';

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
     <div>
      <label className='card-label'>مجموع درآمد ماهیانه خانوار:</label>
      <input type='text' className='card-input' value={totalIncome} readOnly ></input><label className='card-label'>ریال</label>
     </div>
     <div>
      <label className='card-label'>مبلغ حقوق ماهیانه:</label>
      <input type='text' className='card-input' onChange={calcPureIncome}></input><label className='card-label'>ریال</label>
     </div>
     <div>
      <label className='card-label'>یارانه:</label>
      <input type='text' className='card-input' onChange={calcSubsidy}></input><label className='card-label'>ریال</label>
     </div>
     <div>
      <label className='card-label'>کمکهای نقدی دوستان وآشنایان و خویشاوندان:</label>
      <input type='text' className='card-input' onChange={calcCharity}></input><label className='card-label'>ریال</label>
     </div>
    
     <div>
      <label className='card-label'>آیا در حال حاضر از دوستان وآشنایان کمک نقدی دریافت می نمایید؟ مقدار و نوع آن را بنویسید</label>
      <textarea rows='3' className='textarea-card' ></textarea>
     </div>
     <div>
      <label className='card-label'>آیا تحت پوشش بهزیستی، کمیته امداد یا سایر موسسات خیریه هستید؟مقدار و نوع کمک درافتی های ماهانه را به صورت دقیق بنویسید</label>
      <textarea rows='3' className='textarea-card' ></textarea>
     </div>
    
    </div>
  )
}