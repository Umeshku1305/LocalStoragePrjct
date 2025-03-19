import React, { useState } from 'react';

//local strorage updatates work lossely
const App = () => {
  const [userStatus, setuserStatus] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'))
    const admin = JSON.parse(localStorage.getItem('admin'))

  
  if(email == admin.email && password == admin.password){
    setuserStatus('Admin')
  }else if(email == user.email && password == user.password){
    setuserStatus('User')
  }else{
    setuserStatus('Not a valid user')
  }

    setEmail('')
    setPassword('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='m-4'>
        <input 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='px-3 py-2 border-2 text-xl' type="text" placeholder='enter email' />
        <input
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }} className='px-3 py-2 border-2 text-xl' type="password" placeholder='enter password' />
        <button className='px-3 py-2 border-2 text-xl'>Click</button>
      </form>
      <h1 className={userStatus}>{userStatus}</h1>
    </div>
  );
}

export default App;
