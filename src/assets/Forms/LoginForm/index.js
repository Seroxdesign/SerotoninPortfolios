import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../lib/firebase'
import React, { useState } from 'react'
import styles from './styles.module.css'

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(( userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      alert(error.message)
      console.error(error)
    }); 
    console.log(email.value);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.card}>
          <div className={styles.form_collection}>
            <label className={styles.form_label}>
              Email
            </label>
            <input type='email' name='email' onChange={(event) => handleChangeEmail(event)} className={styles.form_input} />
          </div>

          <div className={styles.form_collection}>
            <label className={styles.form_label}>
              password
            </label>
            <input type='password' name='password' onChange={(event) => handleChangePassword(event)} className={styles.form_input}/>
          </div>

          <div className={styles.pw_recover}>
            <h3>Forgot a password?</h3>
            <a>
              <h3>Remember?</h3>
            </a>
          </div>
          <button className={styles.form_submit} disabled={email ==="" && password ===""}>Log In</button>
        </div>
      </form>
      <br></br>
    </div>
  )
}