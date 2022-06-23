import React, {useEffect} from 'react'
import {HomeView} from '../styles/layouts/Home/HomeView'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    Aos.init({
        duration: 2000,
        once: false,
     });
}, []);

  const router = useRouter()
  return (
      <HomeView>
        <Image src='/assets/FUNDO.png' layout="fill" className='image' />
        <div className='main'>
        <p data-aos="fade-bottom" className='title'>VENHA JOGAR E TESTE SEUS CONHECIMENTOS SOBRE</p>
        <Image data-aos="fade-left" src='/assets/logo.png' width={290} height={160} className='logo' />
      <button data-aos="fade-right" onClick={() => router.push('/checkoutCpf')} className='btn'>JOGO DA MEMÓRIA</button>
        {/* <Image src='/assets/imgs/BOTÃO.png' width={300} height={80}  /> */}
        </div>
      </HomeView>
    )
}
