import React,{useState} from 'react'

export default function Researchers() { 
// for editing data
const[addRows,setAddRows]=useState([])
const [addPerson, setAddPerson] = useState({
  id:0,
  fullName: "",
  date: ""
});
function AddRowsTable(e){
 e.preventDefault();
 if(addRows){
  setAddRows(s=>[...s,setAddRows])
 }
}
const Change = ( name,e) => {
  console.log('name '+name+'value: '+e.target.value);
  let newRow= {}
 if(name==='fullName'){
  setAddPerson({...newRow,  fullName: e.targetvalue });
  console.log('TOUCH FULLNAME');
  }
 if(name==='date'){
  setAddPerson({  date: e.targetvalue  });
  console.log('TOUCH DATE');

 }
  console.log(addPerson);
};

  return (
    <div className="card-form-table"> 

        <table>
         <thead>
           <tr>
             <th >نام</th>
             <th>تاریخ</th> 
           </tr>
         </thead>
          <tbody> 
            {addRows.map((data)=>{
            return(
              <tr> 
              <td><input type='text' className='table-input' onChange={(e)=>Change('fullName',e)} ></input></td>
              <td><input type='text' className='table-input' onChange={(e)=>Change('date',e)} ></input></td>
            </tr> 
            )
            })}      
     
      
          </tbody>
       </table>   
    </div>
   
  )
}

 
// const Add = (e) => {
//   e.preventDefault();
//   setTableData([...tableData, { ...newData, id: Math.random() }]); // for giving the new data some random id
//   setNewData({
//     // for enptying the form
//     fullName: "",
//     userName: "",
//     address: "",
//     phoneNumber: "",
//     email: "",
//     website: "",
//     companyName: "",
//   });
// };

