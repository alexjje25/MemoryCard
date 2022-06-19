import React from 'react'
import {HomeView} from '../styles/layouts/Home/HomeView'
import Image from 'next/image'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {

  return (
      <HomeView>
        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>Por favor informe seu CPF</p>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        <button className='btn'>COMEÇAR</button>
        </div>
      </HomeView>
    )
}
