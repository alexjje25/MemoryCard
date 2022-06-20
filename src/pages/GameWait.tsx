import React, { useEffect, useState } from 'react'
import Image from 'next/image'

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

import Card from '../components/card/Card'

import {
  GameWaitView,
  Container,
  LogoContainer,
  CardsContainer,
  Logo,
  ContainerButton,
  Button
} from '../styles/layouts/GameWait/GameWaitView'

type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

export default function Home() {
  const cardsVector: any = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  const shuffleArray = (arr: any[]): any[] => {
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  };

  const createBoard = (): any =>
  //Need 2 of each card
  [...cardsVector, ...cardsVector].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: '/assets/cardFront.png',
    frontImage: `/assets/imgs/img${i+1}.png`,
    clickable: true,
    matchingCardId:
      i < card.length ? `card${i + cardsVector.length}` : `card${i - cardsVector.length}`
  }));

  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
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

    //Checar se a carta corresponde ao seu par
    if (
      clickedCard.matchingCardId === currentClickedCard.id ||
      clickedCard.id === currentClickedCard.matchingCardId
    ) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(
          card =>
            card.id === clickedCard.id || card.id === currentClickedCard.id
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
      <Image src='/assets/fundoGame.png' layout="fill" className='image' />
      <section>
        <Container>
            <Logo alt="logo" />
            {gameWon &&
              <div>voce ganhou</div>
            }
          <CardsContainer>
            {cards.map(card =>
              <Card key={card.id} callback={handleCardClick} card={card} />
            )}
          </CardsContainer>
        </Container>
      </section>
    </GameWaitView>
  )
}
