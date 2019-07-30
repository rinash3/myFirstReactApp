import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import cards from "./cards.json";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    clickedArray: [],
    message: "",
    score: 0,
    topscore: 0,
  };

  clickCard = id => {
    // Arrange the cards randomly
    const shuffledArray = this.shuffleArray(cards);
    this.setState({ cards: shuffledArray });
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "You guessed incorrectly!!! Game Over ☹️ Click an image to start again!", shakeit: "true" });
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "You guessed correctly!",

      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }

  }
  shuffleArray = (cardsArray) => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    return cardsArray;
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div>
        <nav class="navbar">
          <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
        </nav>
        <header class="header">
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          <p className="message"><strong>{this.state.message}</strong></p>
        </header>
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              clickCard={this.clickCard}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div >
    );
  }
}

export default App;