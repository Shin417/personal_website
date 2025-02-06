import React from "react"
import Card from './Card'
import binaryImg from '../assets/binary-convertor.png'
import reversiImg from '../assets/reversi-img.png'

export default function Project() {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="card-container">
        <Card img={binaryImg} title="Binary Convertor" description="C++ TinkerCad" source="https://github.com/Shin417/Binary-Converter"/>
        <Card img={reversiImg} title="Reversi" description="PHP" source="https://github.com/Shin417/Reversi-Othello"/>
        <Card img={binaryImg} title="Binary Convertor" description="C++ TinkerCad" source="https://github.com/Shin417/Binary-Converter"/>
        <Card img={binaryImg} title="Binary Convertor" description="C++ TinkerCad" source="https://github.com/Shin417/Binary-Converter"/>
        <Card img={binaryImg} title="Binary Convertor" description="C++ TinkerCad" source="https://github.com/Shin417/Binary-Converter"/>
        <Card img={binaryImg} title="Binary Convertor" description="C++ TinkerCad" source="https://github.com/Shin417/Binary-Converter"/>
      </div>
    </div>
  );
}
