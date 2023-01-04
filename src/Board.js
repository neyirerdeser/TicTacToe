import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Winner from "./Winner";

export default function Board(props) {
  const initial = {
    turn: "X",
    layout: Array(9).fill(null),
    winner: null,
  };
  const [turn, setTurn] = useState(initial.turn);
  const [layout, setLayout] = useState(initial.layout);
  const [winner, setWinner] = useState(initial.winner);

  useEffect(() => {
    const isNull = (element) => element === null;
    let won = checkWinner();
    if (won) setWinner(won);
    else if (!layout.some(isNull)) setWinner("Tie");
  }, [layout]);

  const checkWinner = () => {
    let hor = checkHorizontalWinner();
    let ver = checkVerticalWinner();
    let dia = checkDiagonalWinner();
    return hor || ver || dia;
  };

  const checkHorizontalWinner = () => {
    // console.log('horizontal');
    // 0 1 2 // 3 4 5 // 6 7 8
    for (let i = 0; i < 7; i += 3) {
      let player = layout[i];
      if (player && layout[i + 1] === player && layout[i + 2] === player) return player;
    }
  };
  const checkVerticalWinner = () => {
    // console.log('vertical');
    // 0 3 6 // 1 4 7 // 2 5 8
    for (let i = 0; i < 3; i++) {
      let player = layout[i];
      if (player && layout[i + 3] === player && layout[i + 6] === player) return player;
    }
  };
  const checkDiagonalWinner = () => {
    // 0 4 8 // 2 4 6
    let player = layout[4];
    if (player && layout[0] === player && layout[8] === player) return player;
    if (player && layout[2] === player && layout[6] === player) return player;
    // return null;
  };

  const handleTurn = (index) => {
    let prevTurn = turn;
    if (!layout[index]) {
      setTurn(turn === "X" ? "O" : "X");
      setLayout(getNextLayout(index, prevTurn));
      return prevTurn;
    }
  };

  const getNextLayout = (i, turn) => {
    const nextLayout = layout.map((tile, index) => {
      if (index != i) return tile;
      else return turn;
    });
    return nextLayout;
  };

  const reset = () => {
    setTurn(initial.turn);
    setLayout(initial.layout);
    setWinner(initial.winner);
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "100px 100px 100px",
    gridTemplateRows: '100px 100px 100px',
    padding: "10px",
  };

  let indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  if (!winner) {
    return (
      <div style={gridStyle}>
        {indices.map((ind) => {
          return (
            <div key={ind}>
              <Tile index={ind} onTurn={handleTurn} piece={layout[ind]} />
            </div>
          );
        })}
      </div>
    );
  } else return <Winner player={winner} handleClick={reset} />;
}
