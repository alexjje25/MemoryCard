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
        {/* <TextField  sx={{background:'#e8e3e3',  width:'60%', minHeight:10}} id="outlined-basic"  variant="outlined" /> */}
        <input style={{background:'#F3F3F3' , position:'relative', border:'none', width:'57%', height:'40px',borderRadius:'4px', }}type="text" />
        <button data-aos="fade-right" onClick={() => router.push('/checkoutCpf')} className='btn'>   <p className='btntitle'>COMEÇAR</p> </button>
        </div>
      </CpfView>
    )
}
