 

// // const columns: GridColDef[] = [
// //   { field: 'id', headerName: 'ID', width: 70 },
// //   { field: 'firstName', headerName: 'First name', width: 130 },
// //   { field: 'lastName', headerName: 'Last name', width: 130 },
// //   {
// //     field: 'age',
// //     headerName: 'Age',
// //     type: 'number',
// //     width: 90,
// //   },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (params: GridValueGetterParams) =>
// //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// // ];

// // export default function DataTable() {
// //   return (
// //     <div style={{ height: 400, width: '100%' }}>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         pageSize={5}
// //         rowsPerPageOptions={[5]}
// //         checkboxSelection
// //       />
// //     </div>
// //   );
// // }
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
  const [data, setData] = useState([])
  const [item,setItem] = useState('');
  const [items,setItems] = useState([]); 
  const [rows,setRows] =useState([
    <tr>
    <td><input type='text'></input></td>
     <td><input type='text'></input></td>
     <td><input type='text'></input></td>
    <td><button onClick={()=>deleteRow}>del</button></td>
    </tr>
  ]);
  function getId () {
    return items.length ? items[items.length - 1].id + 1 : 1
  }
  const handleInput = ({name, value}) => {
    setItem({...item, [name]:value, id:getId()})
   }
    var add2=()=>{
    console.log('Please, fill empty spaces')
    alert('hi')
    // if(item.title === '' || item.text === ''){
    //  console.log('Please, fill empty spaces')
    // }else{
    //  setData({...data, item})
    // }
  }


  // function addRow (e) {
  //   e.preventDefault()
  //   // setItems(items => [...items, { name:item.name , family:item.family , id: getId() }])
  //   setItems(items => [...items, { name:item , id: getId() }])
  //   setItem([])
  // }
  // function add(){ 
  //   setRows(...rows,  <tr>
  //     <td><input type='text'></input></td>
  //      <td><input type='text'></input></td>
  //      <td><input type='text'></input></td>
  //     <td><button onClick={()=>deleteRow}>del</button></td>
  //     </tr>) 
  // }
  var deleteRow =() =>{
   alert('hi')
    // setItems(items => items.filter(item => item.id !== id))
  }
  return (
  <div>
    <input value={item.title} name='title'
        onChange={(e)=>handleInput(e.target)} />
 <input value={item.text} name='text'
        onChange={(e)=>handleInput(e.target)} />
 <button onclick={()=>add2}>
  Add new</button>

 {/* {data && 
 data.map(({title, text, id}) => <div key={id}>
                                  <h1>{title}</h1>
                                  <p>{text}</p>
                                 </div>)} */}
  {/* <button onClick={add}>Add row</button> 
  <table> 
    <tbody>
    <tr>
      <td >name</td>
      <td >famiy</td>
      <td >stat</td>
    </tr> 
               {rows}
  
   </tbody>
  </table>  */}
</div>
  )
}



