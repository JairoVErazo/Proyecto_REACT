import React, { useState, useEffect } from "react";
import Character from "./Character.jsx";
import PropTypes from "prop-types";

function NavPage({ page, setPage }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        onClick={() => {
          page - 1 === 0 ? setPage(1) : setPage(page - 1);
        }}
        className="btn btn-primary btn-sm"
      >
        Pagina {page - 1 === 0 ? 1 : page - 1}
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        className="btn btn-primary btn-sm"
      >
        Pagina {page + 1}
      </button>
    </div>
  );
}

NavPage.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=" + page
      );
      const data = await response.json();

      
      const filteredCharacters = data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setLoading(false);
      setCharacters(filteredCharacters);
    }
    fetchData();
  }, [page, searchTerm]);

  return (
    <div className="container">
  <div className="text-center mb-4"> 
    <input
      type="text"
      placeholder="Buscar personajes"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <NavPage page={page} setPage={setPage} />
  {loading ? (
    <h1>Cargando...</h1>
  ) : (
    <div className="row">
      {characters.map((character) => {
        return (
          <div className="col-md-3" key={character.id}>
            <Character character={character} />
          </div>
        );
      })}
    </div>
  )}
</div>
  );
}

export default CharacterList;
