import React, { Component } from 'react'
import {Link}  from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      < >
        <ul className='sidebar'>
        <Link to="/File"><li >پرونده ها</li></Link>
        <Link to="/Content"><li > ها</li></Link>
        <Link to="/Footer"> <li>آمار کلی پرونده ها</li></Link>
        <Link to=""> <li>شرکت کنندگان</li></Link>
        <Link to="">  <li>وام قرض الحسنه</li></Link>
        <Link to=""> <li>پرداختی های مصوب</li></Link>
        <Link to="">  <li>عملیات بانک</li> </Link>
        </ul>
      </>
    )
  }
}
