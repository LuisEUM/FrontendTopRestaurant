import React, { useContext } from 'react'
import './InfoAccount.css'
import { AuthContext } from "../../../contexts/AuthContext";

function InfoAccount() {

  const { user } = useContext(AuthContext);
  
  if (!user) {
    return null;
  }


  return (
    <div className='container-fluid '>
    <div className="d-flex row justify-content-center bg-info py-4 rounded-bottom info-shadow">
      <h1 className='text-center text-white fs-2 col-10 '>Info Account</h1>
      <div className='col-4 p-0 me-2 d-flex justify-content-center align-items-end flex-column'>
        <img src={user.image} alt='Top Top Square Logo' className='circle-image-profile' />
      </div> 
      <p className='col-10 px-2 text-center m-0 fs-6 d-flex  justify-content-center align-items-center text-white '><strong className='fw-bold'>Username: &nbsp; </strong>{user.username}</p>
      <p className='col-10 px-2 text-center  m-0 fs-6 d-flex  justify-content-center align-items-center text-white'><strong className='fw-bold'>E-mail: &nbsp; </strong>{user.email} </p>
    </div>
    </div>

  )
}

export default InfoAccount