import cookie from 'js-cookie'
import { TOKEN_NAME } from './Variables'
import { Datepicker } from '@ijavad805/react-datepicker';
import moment from 'moment'; 

export function setToken (value) {
  cookie.set(TOKEN_NAME, value)
}

export function getToken () {
  return cookie.get(TOKEN_NAME)
}

export function removeToken () {
  cookie.remove(TOKEN_NAME)
}
export const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      {label}
      <input type="checkbox" checked={value} onChange={onChange} />
    </label>
  );
};
export const ShowForm = ({ context }) => {
   return (
    <div>
      <label className='card-label'>{context}</label>
      <textarea rows='3' className='textarea-card' ></textarea>
    </div>
   );
};
export const ShowCardPrice = ({ value,onChange }) => {
   return (
    <div>
    <label className='card-label'>{value}</label>
    <input type='text' className='card-input' onChange={onChange}></input><label className='card-label'>ریال</label>
   </div>
   );
};

export const ShowCard = ({ value,onChange }) => {
   return (
    <div>
    <label className='card-label'>{value}</label>
    <input type='text' className='card-input' onChange={onChange}></input>
   </div>
   );
};

export const ShowCardInTable = ({ value,onChange }) => {
   return (
    <tr>
    {/* <input type='text' className='card-input' onChange={onChange}></input> */}
    <td><label className='card-label'>{value}</label></td>
    <td><input type='text' className='input-form' onChange={onChange}></input></td>
    </tr>
   );
};

export const ShowTextarea = ({ value ,onChange }) => {
   return (
    <div>
    <label className='card-label'>{value}</label>
    <textarea rows='3' className='textarea-card' onChange={onChange} ></textarea>
   </div>
   );
};
export function PersianDatePicker() {
  return (
    <Datepicker footer={(moment, setValue) => {
        return (
           <>
             <div
              onClick={() => {
                  if (setValue) setValue(moment());
                }}>
                امروز
             </div>
            </>
        )
    }}
    closeWhenSelectADay={true} // boolean
    dayEffects={[
      {
        day: "2022-09-12",
        color: "red",
        dotColor: "red",
        title: "تاریخ"
      }
    ]} 
    disabled={false} // disable input
    disabledDate={(day) => day === moment()} // today should be disabled
    format={"YYYY-MM-DD"}
    input={<input className='input-form' placeholder='تاریخ را انتخاب کنید'/>} // whatever you want
    onOpen={() => {
      console.log("datepicker is open");
    }} 
    lang={"fa"} // en and fa
    loading={false} // show loading in datepicker if is open
    modeTheme={"light"} // dark and light
    theme={"red"} // blue , orange , red , green , yellow
    // defaultValue={moment()}
    adjustPosition={"auto"} // auto, right-top, left-top, right-bottom, left-bottom, modal
    onChange={(val: any) => {
      console.log(val.format());
    }} />
  );
}