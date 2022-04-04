import { useState, useRef, useEffect } from 'react';
import { createNewAccount, signIn, auth} from '../lib/auth';
import { addAccountDB } from '../lib/rest';
import Router from 'next/router';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './index.module.css'
import TextField from '@mui/material/TextField';


export default function Home() {
  const [createAccount, setCreateAccount] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  // const authentication = auth;

  const signInHandler = async() => {
    if(!createAccount){
      try{
        signIn(emailRef.current.value, passwordRef.current.value)
      } catch(err) {
        console.log(err)
      }
      return
    }
    setCreateAccount(false)
  }

  const createHandler = async () => {
    if(!createAccount){
      setCreateAccount(true)
      return
    }
    createNewAccount({
      email:emailRef.current.value, 
      password:passwordRef.current.value,
      name: nameRef.current.value,
    })
    addAccountDB({
      name: nameRef.current.value,
      email: emailRef.current.value,
      uid: passwordRef.current.value
    })
    Router.replace('/home')
  }

  const inputStyles = {
    marginBottom: '1rem'
  }

  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <div className={styles.inputContainer}>
          {createAccount && <p className='text-rose-500'>Creating Account</p>}
          {createAccount && <TextField inputRef={nameRef} sx={inputStyles} id="outlined-basic" label="Name" variant="filled" />}
          <TextField inputRef={emailRef} sx={inputStyles} id="outlined-basic" label="Email" variant="filled" />
          <TextField inputRef={passwordRef} sx={inputStyles} id="outlined-basic" label="Password" variant="filled" />
        </div>
        <Stack spacing={2} direction="column">
          <Button variant="contained" onClick={signInHandler}>Sign In</Button>
          <Button variant="contained" onClick={createHandler}>Create Account</Button>
        </Stack>
      </div>
    </div>
  )
}
