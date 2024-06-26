import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { logIn, logOut, toggleModerator } from "@/redux/feature/auth-slice";

const LogIn: () => JSX.Element = () => {
  const { isAuth, uid, isModerator } = useAppSelector( state => state.authReducer.value )

  const dispatch = useDispatch<AppDispatch>()
  const [ username, setUsername ] = useState<string>( '' );

  const onClickLogin = () => {
	dispatch( logIn(
	  username,
	) )
  };

  const onClickToggle = () => {
	dispatch( toggleModerator() )
  };

  const onClickLogOut = () => {
	dispatch( logOut() )
  };
  // console.log(isModerator)
  return ( <div>

	<h1>Login</h1>
	<br/>
	<input type="text"
		   name="username"
		   id="username"
		   className={ 'text-black' }
		   onChange={ event => setUsername( event.target.value ) }/>
	<br/>
	<button onClick={ onClickLogin }>Log In</button>
	<br/>
	<button onClick={ onClickLogOut }>Log Out</button>
	<br/>
	{ isAuth && <button onClick={ onClickToggle }>Toggle Moderator Status : { isModerator.toString() }</button> }
  </div> )
}
export default LogIn;