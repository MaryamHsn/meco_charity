import React, { Component } from 'react'
import {Link}  from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      < >
        <ul className='sidebar'>
        <Link to="/File"><li >تشکیل پرونده </li></Link>
        <Link to="/FileInformation"><li >نمایش پرونده ها </li></Link>  
        <Link to="/Participant"> <li>شرکت کنندگان</li></Link>
        <Link to="/Loan">  <li>وام قرض الحسنه</li></Link> 
        <Link to="/Transaction">  <li>عملیات بانک</li> </Link>
        </ul>
      </>
    )
  }
}
