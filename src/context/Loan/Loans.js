import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AddLoan from './AddLoan';

export default function Loans() {
  const[newLoan,setNewLoan] = useState('')
  const [files,setFiles]= useState([
      // { id: 1, name: 'Fateme Babaie' },
      // { id: 2, name: 'Sanaz Zareie' },
      // { id: 3, name: 'Maryam Khoshroo' }
  ]);
  useEffect(()=>{
      axios('https://jsonplaceholder.typicode.com/users').then(response=>setFiles(response.data))
  },[])
  return (
    <div className='box'>
      <div className='card'>
      <button className='btn' onClick={()=>setNewLoan(!newLoan)}>
          {newLoan? <span>- افزودن  </span> : <span> + افزودن </span>}
      </button>
      <div>
          {newLoan && <AddLoan />}
      </div>
      </div>

      <table>
          <thead>
              <th>نام و نام خانوادگی </th>
              <th>شماره پرونده </th>
              <th>نوع قرارداد </th> 
          </thead>
          <tbody>
              {files.map(file=>(
              <tr key={file.id}>
                  <td><Link to={`/Loan/${file.id}`} >{file.name}</Link></td>
                  <td>{file.id}</td>
                  <td>{file.username}</td> 
              </tr>
              ))}
          </tbody>
      </table>

   </div>
)
}

