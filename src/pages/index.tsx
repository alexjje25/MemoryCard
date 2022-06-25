import React, {useEffect, useRef, useState} from 'react'
import {HomeView} from '../styles/layouts/Home/HomeView'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Aos from 'aos';
import 'aos/dist/aos.css';
import  Lottie  from  'react-lottie-player'
// Alternativamente:
// importa Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import type { LottiePlayer } from 'lottie-web';


export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: '/click.json',
      });

      return () => animation.destroy();
    }
  }, [lottie]);


  useEffect(() => {
    Aos.init({
        duration: 2000,
        once: false,
     });
}, []);

  const router = useRouter()
  return (
      <HomeView>
       <div className='lomotif' ref={ref} />

        <Image src='/assets/FUNDO.png' layout="fill" className='image' />
        <div className='main'>
        <p data-aos="fade-bottom" className='title'>VENHA JOGAR <br />E TESTE SEUS <br /> CONHECIMENTOS <br /> SOBRE </p>
        <Image data-aos="fade-left" style={{marginTop:'0px'}}src='/assets/logo.png' width={200} height={80} /> <br/>
    <button data-aos="fade-right" onClick={() => router.push('/checkoutCpf')} className='btn'>   <p className='btntitle'>JOGO DA MEMÓRIA</p> </button>



        </div>


      </HomeView>
    )
}
