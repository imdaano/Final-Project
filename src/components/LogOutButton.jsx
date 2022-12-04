import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/auth/auth.functions';
import ReusableButton from './Button';
import './styles/LogOutButton.scss';

// Pasar la función Log Out de auth.functions

const LogOutButton = () => {
  const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		logOutUser(navigate, dispatch);
	};

  return (
    <div className='logout'>
    <h2>Are you sure?</h2>
    <ReusableButton text="Yes" click={logOut}/>
    </div>
  )
}

export default LogOutButton