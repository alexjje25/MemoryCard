import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Card from '../components/card/Card'

import {
  GameWaitView,
  Container,
  LogoContainer,
  CardsContainer,
  Logo,
  ContainerButton,

} from '../styles/layouts/GameWait/GameWaitView'
import { shuffleArray } from '../utils/shuffle';
import { cardsVector, createBoard } from '../utils/board';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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
  width: 100,
  border: 'none',
  p: 7,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      }else{
        setGameWon(false);
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


  //verificar se todas as cartas foram encontras

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

   <Button onClick={handleOpen}>Open modal</Button>
      <Modal BackdropProps={{ style: { backgroundColor: "hsla(160,90%,220%,0.7)"} }}
        open={gameWon}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <p>{gameWon}</p>
        <h1 style={{color:'#001990', fontSize:'35px', fontWeight: '800', marginLeft:'-50px', }}>PARABÉNS!</h1>
        <p style={{color:'#001990', fontSize:'15px', fontWeight: '800', marginLeft:'-50px', whiteSpace: 'nowrap', marginTop:'-20px' }}>VOCE É UM ESPECIALISTA</p>
        <Image src='/assets/imgs/logo2.png' width={600} height={350} />
        </Box>
      </Modal>

        <div className='ContainerFooter'>
          <Image src='/assets/imgs/footer.png' width={200} height={61} className='footer' />

      </div>
      </section>

    </GameWaitView>
  )
}
