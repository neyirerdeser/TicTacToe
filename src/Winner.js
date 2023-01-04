import React from "react";
import PropTypes from "prop-types";

export default function Winner(props) {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        border: "4px solid cadetblue",
        background: "darkcyan",
        margin: 10,
        padding: 0,
        textAlign: "center",
        lineHeight: "50px",
        verticalAlign: "middle",
      }}
    >
      <p
        style={{
          color: "whitesmoke",
          fontSize: "3em",
          fontWeight: "bold",
        }}
      >
        Game Over: {props.player}
      </p>
      <button
        style={{
          background: "whitesmoke",
          color: "darkcyan",
          fontWeight: "bold",
          borderRadius: "12px",
          border: "1px solid whitesmoke",
        }}
        onClick={props.handleClick}
      >
        Play Again
      </button>
    </div>
  );
}

Winner.propTypes = {
  player: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
