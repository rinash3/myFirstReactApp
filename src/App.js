import React from "react";
import cardMatch from "./components/cardMatch";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">cards List</h1>
      <cardMatch
        name={cards[0].name}
        image={cards[0].image}
      />
      <cardMatch
        name={cards[1].name}
        image={cards[1].image}
      />
      <cardMatch
        name={cards[2].name}
        image={cards[2].image}
      />
    </Wrapper>
  );
}

export default App;
