import React from "react";
import "./App.css";
import cover from "/cover.webp";
// import React, { useState } from "react";

function Card({ img, title, text, button1, button2 }) {
  return (
    <div className="container">
      <div className="card">
        <CoverImg img={img} />
        <Details
          title={title}
          text={text}
          button1={button1}
          button2={button2}
        />
      </div>
    </div>
  );
}

function Details({ title, text, button1, button2 }) {
  return (
    <div className="details">
      <Title title={title} />
      <Text text={text} />
      <Buttons button1={button1} button2={button2} />
    </div>
  );
}

function CoverImg({ img }) {
  return (
    <div>
      <img className="img" src={img} alt="lamborghini" />
    </div>
  );
}

function Title({ title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
    </div>
  );
}

function Text({ text }) {
  return (
    <div>
      <p className="text">{text}</p>
    </div>
  );
}

function Buttons({ button1, button2 }) {
  return (
    <div className="buttons">
      <div className="button">{button1}</div>
      <div className="button">{button2}</div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Card
        img={cover}
        title="Lizard"
        text="Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world."
        button1="SHARE"
        button2="LEARN MORE"
      />
      <Card
        img={cover}
        title="Another Lizard"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec faucibus arcu. Etiam eget bibendum nunc, sit amet scelerisque quam."
        button1="LIKE"
        button2="COMMENT"
      />
    </div>
  );
}

export default App;
