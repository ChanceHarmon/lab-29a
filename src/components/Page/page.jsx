import React from 'react';
import Deck from '../Deck/deck.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
    };
  }

  render() {
    console.log('Hi', this.state);
    return (
      <>
        {this.state.content.map((deck, i) => (
          <Deck key={i} deckData={deck} />
        ))}
      </>
    );
  }
}
export default Page;