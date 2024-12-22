"use client"
import Image from "next/image";
import Cell from "./components/cells";
import { useEffect, useState } from "react";


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

export default function Home() {

  const [cells, setcells] = useState(["","","","","","","","",""])
  const [turn, setturn] = useState("cross")
  const [winningmessage, setwinningmessage] = useState("")
  
  useEffect(() => {
    winningCombos.forEach((line) => {
      const crosswins = line.every((i) => cells[i] === "cross")
      const circlewins = line.every((i) => cells[i] === "circle")
      
      console.log(crosswins)

      if(crosswins){
        setwinningmessage("Cross Wins!")
      }
      else if(circlewins){
        setwinningmessage("Circle Wins!")
      }
    })

  }, [cells, winningmessage])

  useEffect(() => {
    if(!winningmessage && cells.every(cell => cell !== '')){
      setwinningmessage("Draw!")
    }
  })

  return (
    <div className="container">
      <div className="board">
        {cells.map((cell, index) => (
          <Cell 
          key={index}
          id={index}
          cells={cells}
          setcells={setcells}
          turn={turn}
          setturn={setturn}
          cell={cell}
          winningmessage={winningmessage}
          />
        ))}
      </div>
      <div>
        {winningmessage?  winningmessage : `it is ${turn}’s turn...`}
      </div>
    </div>
  );
}
