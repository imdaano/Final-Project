import React from 'react';
import './styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className='myaccount'>
      <div className="card">
          <h2>Username</h2>
        <img
          src="https://pm1.narvii.com/6555/7ab2398321c4c5d2657922f401decc2df1192dab_hq.jpg"
          alt="img-profile"
          width="200px"
        />
        <div className="info">
          <p>Name</p>
          <h4>Email</h4>
        </div>
      </div>
    </div>
  )
}

export default MyAccount