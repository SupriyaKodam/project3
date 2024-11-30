import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const TransactionalEmail = () => {
    const [alignment, setAlignment] = useState('web');
    const [email,setEmail] = useState('');
    const [isChecked,setIsChecked] = useState(false);
    const navigate= useNavigate();
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };
     const handleTextfieldChange =()=>{
        setEmail(event.target.value);
     };
     const handleCheckboxChange=()=>{
        setIsChecked(!isChecked);
     };
  return (
    <div>
      <div className="flex flex-col items-center sm:flex-col lg:flex-row justify-center text-black mt-40">
        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton  onClick={()=>navigate('/email-marketing')} value="web">Email Marketing</ToggleButton>
      <ToggleButton onClick={()=>navigate('/websites')} value="android">Websites</ToggleButton>
      <ToggleButton onClick={()=>navigate('/transactional-email')} value="ios">Transctional Email</ToggleButton>
    </ToggleButtonGroup>
    </div>
    <div className='flex items-center justify-center mt-10 mb-5'>
        <h1 className='text-2xl mb-10'>Transactional email plans designed for developers</h1>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-center gap:3'>
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-start justify-start border-2 border-gray-300 p-10'>
           <h5 className='text-md mb-3'>Enter your estimated sends per month
           </h5>
           <form>
            <input 
               type='email'
               value={email}
               onChange={handleTextfieldChange}
               placeholder='Enter email estimate'
               className='border-2 border-gray-300 p-3 w-60'
            />
            <div className='mt-3'>
            <input
               type="checkbox"
               id="dedicated-ip"
               onChange={handleCheckboxChange}
            />
            <label className='text-sm'>Dedicated IP for $29.95</label>
            </div>
           </form>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-start justify-start border-2 p-8 w-[354px]'>
             <p>Your Plan</p>
             <p>{isChecked ? '$29.95 /month | Dedicated IP Address':'$0.00 /month | 0 blocks @ $20/block'}</p>
             <hr className='my-4 border-t-2 border-gray-300 w-full'/>
             {isChecked &&(
                <p>$29.95 <br/>Estimated Cost Per Month
                + your Mailchimp Monthly Plan
                </p>
             )}
             </div>
        </div>
    </div>
    <div className='flex flex-col border-2 border-gray-300'>
        <div>
        <h5 className='text-md'>Enter your estimated sends per month</h5>  
        </div>
        <div>
        <table>
  <thead>
    <tr>
      <th className='px-4 py-2'>Total Blocks</th>
      <th className='px-4 py-2'>Emails per<br/> Month</th>
      <th className='px-4 py-4'>Price Per<br/> Block</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='px-4 py-2'>1 to 20</td>
      <td className='px-4 py-2'>1000</td>
      <td className='px-4 py-2'>$20.00</td>
    </tr>
    <tr>
      <td className='px-4 py-2'>21 to 50</td>
      <td className='px-4 py-2'>2000</td>
      <td className='px-4 py-2'>$40.00</td>
    </tr>
    <tr>
      <td className='px-4 py-2'>51 to 100</td>
      <td className='px-4 py-2'>5000</td>
      <td className='px-4 py-2'>$75.00</td>
    </tr>
    <tr>
      <td className='px-4 py-2'>101 to 200</td>
      <td className='px-4 py-2'>10000</td>
      <td className='px-4 py-2'>$150.00</td>
    </tr>
    <tr>
      <td className='px-4 py-2'>201 to 500</td>
      <td className='px-4 py-2'>20000</td>
      <td className='px-4 py-2'>$300.00</td>
    </tr>
    <tr>
      <td className='px-4 py-2'>501 to 1000</td>
      <td className='px-4 py-2'>50000</td>
      <td className='px-4 py-2'>$500.00</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
    </div>
    </div>
  )
}

export default TransactionalEmail
