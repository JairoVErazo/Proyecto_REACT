import React from "react";
import PropTypes from "prop-types";

function Character({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          Status: {character.status} <br />
          Species: {character.species} <br />
          Gender: {character.gender}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Location: {character.location.name}</li>
        <li className="list-group-item">Origin: {character.origin.name}</li>
      </ul>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
