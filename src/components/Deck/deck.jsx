import React from 'react';
import Card from '../Card/card.jsx';

const Deck = (props) => {
  return (
    <>
      <section className="deck">
        <header><h2>{props.deckData.title}</h2></header>
        {props.deckData.records.map((card, i) => (
          <Card key={i} cardData={card} />
        ))}

      </section>

    </>
  );
};

export default Deck;