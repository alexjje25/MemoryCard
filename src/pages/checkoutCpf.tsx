import React from 'react'
import {CpfView} from '../styles/layouts/CPF/cpfView'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
      <CpfView>
        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>POR FAVOR, INFORME SEU CPF</p>
        <TextField sx={{background:'#e8e3e3', border: 'none', width:'50%' }} id="outlined-basic"  variant="outlined" />

        <button onClick={() => router.push('/GameWait')} className='btn'>COMEÇAR</button>
        </div>
      </CpfView>
    )
}
