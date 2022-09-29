 
//  import React, { Component } from 'react'
 
//  export default class LifeSituatation extends Component {
//   state={
//     rows:[]
//   }
  
//    render() {
//      var addRow =() =>{
//       // alert('hello'); 
//       var nextState = this.state;
//       nextState.rows.push('placeholder');
//       this.setState(nextState);
//     }
//     var deleteRow =() =>{
//       // alert('hello'); 
//       var nextState = this.state;
//       nextState.rows.filter('placeholder');
//       this.setState(nextState);
//     }
//     return (
//       <div>
//       <button onClick={addRow}>Add row</button> 
      
//       <table> 
//        <tbody>
//         <tr>
//             <td >Navn</td>
//             <td >Beskrivelse</td>
//             <td ></td>
//         </tr> 
       
//           {this.state.rows.map(row => <tr>
//             <td><input type='text'></input></td>
//             <td><input type='text'></input></td>
//             <td><input type='text'></input></td>
//             <td><button onClick={deleteRow}>del</button></td>
//           </tr>)}
//       </tbody>
//     </table> 
//     </div>
//      )
//    }
//  }
 
  
 
 
import React, { useState }  from 'react'

export default function LifeSituatation(){
   //use of hook for couting
   const [noOfRows, setNoOfRows] = useState(1);
   const [todos, setTodos] = useState([])
   const [todo, setTodo] = useState({})
   const options = [
    { label: 'دارد', value: 'have' },
    { label: 'ندارد', value: 'haneNot' },
    { label: 'فوت شده', value: 'died' },
    { label: 'مطلقه', value: 'widow' },
    { label: 'از کار افتاده', value: 'handicap' },
    { label: 'مريض', value: 'sick' },
    { label: 'زنداني', value: 'prisoner' },
    { label: 'ترک خانواده', value: 'leave' },
  ];

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

   function getId () {
     return todos.length ? todos[todos.length - 1].id + 1 : 1
   }
 
   function addTodo (e) {
     e.preventDefault()
     setTodos(todos => [...todos, { title: todo, id: getId() }])
     setTodo('')
   }
   function Send(e){
    e.preventDefault()
    alert('hi')
    
   }
 function Add(){ 
  setNoOfRows(noOfRows + 1)
  console.log('todo:  '+todo) 
 }
 function Remove(){ 
  setNoOfRows(noOfRows - 1) 
 }
   return (
     <div className="card-form-table"> 
     <div>
      <label>وضعیت همسر</label>
      <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
     </div>
       <table>
         <thead>
           <tr>
             <th >نام</th>
             <th >نام خانوادگی</th>
             <th >نسبت</th>
             <th >سن</th>
             <th  >تحصيلات</th>
             <th >شغل</th>
             <th >وضعیت تاهل</th>
             <th >وضعیت جسمي و روحي</th>
             <th>توضيحات</th> 
           </tr>
         </thead>
         <tbody>
         {/* {[...Array(noOfRows)].map((elementInArray, index) => { */}
         {[...Array(noOfRows)].map(todo => {
          
               return (
                 <tr  > 
                 <td><input type='text' className='table-input' onChange={(e)=>setTodo(todo.fName=e.target.value)} ></input></td>
                 <td><input type='text' className='table-input' ></input></td>
                 <td><input type='text' className='table-input'></input></td>
                 <td><input type='text' className='table-input'></input></td>
                 <td><input type='text' className='table-input'></input></td>
                 <td><input type='text' className='table-input'></input></td>
                 <td><input type='text' className='table-input'></input></td>
                 <td><input type='text' className='table-input' style={{width:'100px'}}></input></td>
                 <td><input type='text' className='table-input' style={{width:'100px'}}></input></td>
 
               </tr>
                 );
             })}
 
             
             </tbody>
             </table>
             <button type="button" className="btn-add-row"  onClick={Add}>اضافه</button>
             <button type="button" className="btn-del-row" onClick={Remove}>حذف</button>
             <button type="button" className="btn-submit" onClick={Send}>ارسال</button>

        </div>
   );
 }