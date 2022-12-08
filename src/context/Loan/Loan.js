import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function Loan() {
    // const [file,setFile]= useState({});
    const [files,setFiles]= useState([
        // { id: 1, name: 'Fateme Babaie' },
        // { id: 2, name: 'Sanaz Zareie' },
        // { id: 3, name: 'Maryam Khoshroo' }
    ]);
    const {id} = useParams();
    useEffect(()=>{ 
    //  axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(response=>setFile(response.data))
     axios(`https://jsonplaceholder.typicode.com/users`).then(response=>setFiles(response.data))
    },[])
  return (
    <div className='box'>   
    {/* send parameter via link */}
        {/* <h2>نام و نام خانوادگی :{file.name}</h2>
        <h2>شماره پرونده :{file.name}</h2> */}
        <table>
          <thead>
              <th>نوع کمک</th>
              <th>مبلغ</th>
              <th>مدت ماه</th> 
              <th>شرح صورت جلسه</th> 
              <th>تاریخ شروع پرداخت</th> 
              <th>تاریخ صورت جلسه</th>
              <th>تاریخ پرداخت</th> 
              <th>توضیحات</th> 
              <th>شماره کارت </th> 
          </thead>
          <tbody>
              {files.map(file=>(
              <tr key={file.id}>
                  <td>{file.name}</td>
                  <td>{file.id}</td>
                  <td>{file.username}</td> 
                  <td>{file.username}</td> 
                  <td>{file.username}</td> 
                  <td>{file.username}</td> 
                  <td>{file.username}</td> 
                  <td>{file.username}</td> 
                  <td>{file.username}</td> 
              </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}
