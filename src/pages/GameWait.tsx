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

type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

export default function Home() {
  // const [selected, setSelected] = useState({
  //   value1: '',
  //   value2: '',
  //   id1: '',
  //   id2: ''
  // })
  // const [canSelect, setCanSelect] = useState<boolean>(false)

  // const paired = []
  // const pairedAux = paired

  // const delay = (amount = 4000) => new Promise(resolve => setTimeout(resolve, amount))
  // const delayClear = (amount = 3000) => new Promise(resolve => setTimeout(resolve, amount))

  // function verifyPairSelected(): void {
  //   if (selected.value1 !== '' && selected.value2 !== '' && !canSelect) {
  //     if (selected.value1 === selected.value2) {
  //       setCanSelect(true)
  //       handleCanSelect()
  //     } else if (selected.value1 !== selected.value2) {
  //       setCanSelect(true)
  //       handleCanSelect()
  //     }
  //   }
  // }

  // async function clear() {
  //   await delayClear()
  //   setSelected({
  //     value1: '',
  //     value2: '',
  //     id1: '',
  //     id2: ''
  //   })
  // }

  // async function handleCanSelect() {
  //   clear()
  //   await delay()

  //   setCanSelect(false)
  // }

  // function handleSelected(): void {
  //   verifyPairSelected()
  // }

  // useEffect((): void => {
  //   handleSelected()
  //   console.log(paired)
  // }, [selected])

  const cardsVector: string[] = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8'
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
    // backImage: carBack,
    frontImage: card,
    clickable: true,
    // matchingCardId:
    //   i < card.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));

  const timeout = 1000;
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
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
          {/* <Card title='1' value='1' hover={selected.id1==='11'? true : false} onClick={value =>
            {
              if (!canSelect)
                if (selected.value1==='')
                  setSelected({...selected, value1: value, id1: value+'1'})

                else if (selected!==='' && )
            }
          }/>
          <Card title='1' value='1' hover={selected.id2==='12'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value2: value, id2: value+'2'})
          }}/>

          <Card title='2' value='2' hover={selected.id1==='21'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value1: value, id1: value+'1'})
          }}/>
          <Card title='2' value='2' hover={selected.id2==='22'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value2: value, id2: value+'2'})
          }}/>

          <Card title='3' value='3' hover={selected.id1==='31'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value1: value, id1: value+'1'})
          }}/>
          <Card title='3' value='3' hover={selected.id2==='32'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value2: value, id2: value+'2'})
          }}/>

          <Card title='4' value='4' hover={selected.id1==='41'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value1: value, id1: value+'1'})
          }}/>
          <Card title='4' value='4' hover={selected.id2==='42'? true : false} onClick={value => {
            if (!canSelect)
              setSelected({...selected, value2: value, id2: value+'2'})
          }}/> */}
              <Container>
                <LogoContainer>
                  <Logo alt="logo" />
                  <h1>Lucas Saliba</h1>
                  {gameWon &&
                    <ContainerButton>
                      {/* <img alt="yoda" /> */}
                      <Button type="submit" onClick={refreshPage}>
                        Jogar de Novo
                      </Button>
                    </ContainerButton>}
                </LogoContainer>
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
