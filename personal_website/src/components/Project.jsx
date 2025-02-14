import React from "react"
import Card from './Card'
import binaryImg from '../assets/binary-convertor.png'
import reversiImg from '../assets/reversi-img.png'
import reversiAppImg from '../assets/reversi_web_app.png'
import todoImg from '../assets/todo-img.png'
import vaultImg from '../assets/vault.jpg'

export default function Project() {
  return (
    <div className="project-container" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        <Card img={binaryImg} title="Binary Convertor" description="C++, TinkerCad" source="https://github.com/Shin417/Binary-Converter"/>
        <Card img={reversiImg} title="Reversi Ver.1" description="PHP" source="https://github.com/Shin417/Reversi-Othello"/>
        <Card img={reversiAppImg} title="Reversi Web App" description="React Vite, Python Flask" source="https://github.com/Shin417/Reversi_App_Python"/>
        <Card img={todoImg} title="To Do List" description="Java" source="https://github.com/Shin417/ToDoApp"/>
        <Card img={vaultImg} title="Password Vault" description="Python, OpenPyXl" source="https://github.com/Shin417/Password-Vault"/>
      </div>
    </div>
  );
}
