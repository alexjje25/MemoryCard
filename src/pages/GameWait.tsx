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
  Button
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

export default function Home() {

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

      </div>
      </section>

    </GameWaitView>
  )
}
