import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import AddTransaction from './AddTransaction';
import { Link } from 'react-router-dom';

export default function Transactions() {
  const[newTransaction,setNewTransaction] = useState('')
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
      <button className='btn' onClick={()=>setNewTransaction(!newTransaction)}>
          {newTransaction? <span>- افزودن تراکنش</span> : <span> + افزودن تراکنش</span>}
      </button>
      <div>
          {newTransaction && <AddTransaction />}
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
                  <td><Link to={`/Transaction/${file.id}`} >{file.name}</Link></td>
                  <td>{file.id}</td>
                  <td>{file.username}</td> 
              </tr>
              ))}
          </tbody>
      </table>

   </div>
)
}

