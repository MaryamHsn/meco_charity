import cookie from 'js-cookie'
import { TOKEN_NAME } from './Variables'

// camelCaseNaming
// snake_case_naming
// kebab-case-naming
// PascalCaseNaming
// UPPER_CASE_NAMING

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