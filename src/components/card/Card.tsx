// import React, { useState } from 'react'
// import Image from 'next/image'

import { CardView, Wrapper, FrontImg, BackImg } from '../../styles/components/card/CardView'

// interface CardInterface {
//   hover: boolean,
//   title: string,
//   value: string,
//   onClick: (string) => void
// }

// export default function Card({hover, title, value, onClick}: CardInterface) {
//   return (
//     <CardView hover={hover} onClick={(): void => onClick(value)}>
//       <div className={`flip-container`}>
//         <div className="flipper">
//           <div className="front">
//             <Image src='/assets/cardfront.png' width={200} height={150} className='cards'/>
//           </div>
//           <div className="back">
//             {title}
//           </div>
//         </div>
//       </div>
//     </CardView>
//   )
// }
import React from "react";

type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </Wrapper>
  );
};

export default Card;
