import React, { useState } from 'react'
import {CpfView} from '../styles/layouts/CPF/cpfView'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router'

import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAynsVJ_okW1t0gVVSt7yL-s_XSv3JyPI",
  authDomain: "memory-card-db.firebaseapp.com",
  databaseURL: "https://memory-card-db-default-rtdb.firebaseio.com",
  projectId: "memory-card-db",
  storageBucket: "memory-card-db.appspot.com",
  messagingSenderId: "347132158390",
  appId: "1:347132158390:web:9284137812093169e36117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Home() {
  const router = useRouter()

  const db = getDatabase(app);

  const [cpf, setCpf] = useState('')

  function writeUserData(cpf) {
    set(ref(db, cpf), {
      cpf
    });
    console.log(db)
  }

  return (
      <CpfView>
        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>POR FAVOR, INFORME SEU CPF</p>
        <TextField sx={{background:'#e8e3e3', border: 'none', width:'50%' }} id="outlined-basic" onChange={value => setCpf(value.target.value)} variant="outlined" />
        <ul>
          {
            // db.data.map((value, index) => {
            //   return <li key={index}>{value}</li>
            // })
          }
        </ul>
        <button onClick={() => {
          // router.push('/GameWait')
          writeUserData(cpf)
        }} className='btn'>COMEÇAR</button>
        </div>
      </CpfView>
    )
}
