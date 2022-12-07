import React from 'react';
import { useSelector } from 'react-redux';
import './styles/MyAccount.scss';

const MyAccount = () => {

  const {user} = useSelector((state) => state.auth);
console.log(user);
  return (
    <div className='myaccount'>
      <div className="card">
          <h2>{user.username}</h2>
        <img
        //CAMBIAR EL SCHEMA DEL BACK Y EL FORM DEL REGISTER EN EL FRONT
          src="https://pm1.narvii.com/6555/7ab2398321c4c5d2657922f401decc2df1192dab_hq.jpg"
          alt="img-profile"
          width="200px"
        />
        <div className="info">
          <p>{user.name}</p>
          <h4>{user.email}</h4>
        </div>
        <div className='book'>
          <h3>My book</h3>
          {user.book && <img src={user.book.img} alt={user.book.title} />}
        </div>
      </div>
    </div>
  )
}

export default MyAccount