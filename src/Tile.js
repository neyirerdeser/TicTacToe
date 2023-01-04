import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Tile(props) {
  const [piece, setPiece] = useState(props.piece);

  const handleClick = () => {
    let turn = props.onTurn(props.index);
    if (turn) setPiece(turn);
  };

  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: "4px solid cadetblue",
        background: "darkcyan",
        margin: 0,
        padding: 0,
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "100px",
        color: 'whitesmoke',
        fontSize: '4em',
        fontWeight: 'bold',
        // textShadow: '2px 2px azure'
      }}
      onClick={handleClick}
    >
      {piece}
    </div>
  );
}

Tile.propTypes = {
  index: PropTypes.number.isRequired,
  onTurn: PropTypes.func.isRequired,
  piece: PropTypes.string,
};
