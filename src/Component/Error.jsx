import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';

const Error = () => {
    const history=useNavigate();
    history('/')
  return (
    <>
    <div className='flex justify-center items-center text-red-900 text-9xl'>404
    </div>
    <NavLink to='/'><span className='text-red-400 flex justify-center'>Go back</span></NavLink>
    </>
  )
}

export default Error