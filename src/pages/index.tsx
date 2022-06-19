import React from 'react'
import {HomeView} from '../styles/layouts/Home/HomeView'
import Image from 'next/image'

export default function Home() {

  return (
      <HomeView>
        <Image src='/assets/FUNDO.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>teste</p>
        <Image src='/assets/logo.png' width={809} height={200} className='logo' />
        <button className='btn'>JOGO DA MEMÓRIA</button>
        </div>
      </HomeView>
    )
}
