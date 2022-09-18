import React from 'react'

export default function NeedyInformation() {
  return (
    <div className='card-form'>
      <div>
        <table>
          <tr>
          <td><label >نام و نام خانوادگی نیازمند:</label></td>
          <td><input type='text' className='input-form'></input></td>
          </tr>
          <tr>
            <td><label>:سن</label></td>
            <td><input type='number' className='input-form'></input></td>
          </tr>
          <tr>
          <td><label >معرف:</label></td>
          <td><input type='text' className='input-form'></input></td>
          </tr>
          <tr>
            <td><label>شماره همراه معرف</label></td>
            <td><input type='text' pattern='[0][9][0-9]{9}'  title='wrong' className='input-form'></input></td>
          </tr>
        </table>
      </div>
      <div  >
        <table >
        <tr>
          <td><label>شماره همراه نیازمند</label></td>
          <td><input type='text'  pattern='[0][9][0-9]{9}' className='input-form'></input></td>
        </tr>
        <tr>
          <td><label>شماره ثابت نیازمند</label></td>
          <td><input type='text'   className='input-form'></input></td>
        </tr>
        <tr>
        <td><label >آدرس نیازمند:</label></td>
        <td><textarea rows='3' className='textarea-form'></textarea></td>
        </tr>
        </table>
      </div>
    </div>
  )
}
