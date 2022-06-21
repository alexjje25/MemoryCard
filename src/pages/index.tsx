import React from 'react'
import {HomeView} from '../styles/layouts/Home/HomeView'
import Image from 'next/image'

export default function Home() {

  return (
      <HomeView>
        <Image src='/assets/FUNDO.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>VENHA JOGAR E TESTE SEUS CONHECIMENTOS SOBRE</p>
        <Image src='/assets/logo.png' width={290} height={160} className='logo' />
      <button className='btn'>JOGO DA MEMÓRIA</button>
        {/* <Image src='/assets/imgs/BOTÃO.png' width={300} height={80}  /> */}
        </div>
      </HomeView>
    )
}
