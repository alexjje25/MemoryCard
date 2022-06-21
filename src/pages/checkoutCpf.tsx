import React from 'react'
import {CheckoutCpfView} from '../styles/layouts/CheckoutCpf/CheckoutCpfView'
import Image from 'next/image'
import TextField from '@mui/material/TextField';



export default function Home() {


  return (
      <CheckoutCpfView>
        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>Por favor informe seu CPF</p>
        <TextField sx={{width:'50%', backgroundColor: '#0000000F'}} id="outlined-basic"  variant="outlined" />

        <button className='btn'>COMEÇAR</button>


      </div>
      </CheckoutCpfView>
    )
}
