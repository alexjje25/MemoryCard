import React, { useEffect, useState } from 'react'
import Image from 'next/image'
<<<<<<< HEAD
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img1.png'
import img3 from '../imgs/img1.png'
import img4 from '../imgs/img1.png'
import img5 from '../imgs/img1.png'
import img6 from '../imgs/img1.png'
import img7 from '../imgs/img1.png'
import img8 from '../imgs/img1.png'
import img9 from '../imgs/img1.png'
import img10 from '../imgs/img1.png'
import img11 from '../imgs/img1.png'
import img12 from '../imgs/img1.png'
import img13 from '../imgs/img1.png'

=======
>>>>>>> a66d31ae4b4698fa25775a8930d55fb714c14094
import Card from '../components/card/Card'

import {
  GameWaitView,
  Container,
  CardsContainer,
  ContainerButton,

} from '../styles/layouts/GameWait/GameWaitView'
import { shuffleArray } from '../utils/shuffle';
import { cardsVector, createBoard } from '../utils/board';

type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
  matchCode: string;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 170,

  border: 'none',

  p: 30,



};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const cardsVector: any = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  const [cards, setCards] = useState<CardType[]>([]);
  const timeout = 1000;
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  useEffect(
    () => {
      if (matchedPairs === cards.length / 2) {
        setGameWon(true);
      }
    },
    [matchedPairs]
  );

  useEffect( () => {
    setCards(shuffleArray(cardsVector))
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const handleCardClick = (currentClickedCard: CardType) => {
    //Virar carta
    setCards(prev =>
      prev.map(
        card =>
          card.id === currentClickedCard.id
            ? { ...card, flipped: true, clickable: false }
            : card
      )
    );
    // Se for a primeira carta virada, permanecer com ela virada
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    console.log(currentClickedCard)

    //Checar se a carta corresponde ao seu par
    if (
      clickedCard.matchCode === currentClickedCard.matchCode ||
      clickedCard.matchCode === currentClickedCard.matchCode
    ) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(
          card =>
            card.matchCode === clickedCard.matchCode || card.matchCode === currentClickedCard.matchCode
              ? { ...card, clickable: false }
              : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // Se nao for o par correto
    setTimeout(() => {
      setCards(prev =>
        prev.map(
          card =>
            card.id === clickedCard.id || card.id === currentClickedCard.id
              ? { ...card, flipped: false, clickable: true }
              : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  return (
    <GameWaitView>

      <section>

        <Container>

        <Image src='/assets/fundoGame.png' layout="fill" className='image' />
          <div className='ContainerClock'>
              <Image src='/assets/imgs/clock.svg' width={200} height={150} className='clock' />
              <p className='clockMinutes'>00:10</p>
          </div>
            {gameWon &&
              <div>voce ganhou</div>
            }
          <CardsContainer>

            {cards.map(card =>
              <Card key={card.id} callback={handleCardClick} card={card} />
            )}

          </CardsContainer>

        </Container>
        <div className='footer'>
          <Image src='/assets/imgs/footer.png' width={200} height={60} className='clock' />

{/* caso ganhe o jogo abrira esse modal  */}
          <Button onClick={handleOpen}>VENCEU</Button>
          <Modal
          BackdropProps={{ style: { backgroundColor: `hsla(0, 91%, 98%, 0.9)`} }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
        <Box sx={style}>
      <h1 style={{fontSize:'50px', color:'#001990', fontWeight: '800'}}>PARABÉNS!</h1>

      <p style={{fontSize:'19px', marginTop:'-20px', color:'#001990', whiteSpace: 'nowrap', textAlign:'center',fontWeight: '900'}}>VOCE É UM ESPECIALISTA </p>

        <Image src='/assets/logo2.png' width={170} height={80} className='logo' />


        </Box>
      </Modal>

{/* caso perca o jogo abrira esse modal */}
      <Button onClick={handleOpen}>PERDEU</Button>
          <Modal
          BackdropProps={{ style: { backgroundColor: `hsla(0, 91%, 98%, 0.9)`} }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
        <Box sx={style}>
      <h1 style={{fontSize:'50px', color:'#001990', fontWeight: '800'}}>PARABÉNS!</h1>

      <p style={{fontSize:'19px', marginTop:'-20px', color:'#001990', whiteSpace: 'nowrap', textAlign:'center',fontWeight: '900'}}>VOCE É UM ESPECIALISTA </p>

        <Image src='/assets/logo2.png' width={170} height={80} className='logo' />


        </Box>
      </Modal>

      </div>
      </section>

    </GameWaitView>
  )
}
