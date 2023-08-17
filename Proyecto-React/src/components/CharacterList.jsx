import React, { useState, useEffect } from "react";
import Character from "./Character.jsx";
import PropTypes from "prop-types";
import '../assets/css/Series.css';
function NavPage({ page, setPage }) {
  return (
    <div className=" numerador mb-3">
      <button
        onClick={() => {
          page - 1 === 0 ? setPage(1) : setPage(page - 1);
        }}
        className="numerador-pagina"
      >
      <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-arrow-badge-left-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" stroke-width="0" fill="currentColor"></path>
</svg>Pagina {page - 1 === 0 ? 1 : page - 1}
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        className="numerador-pagina"
      >
        Pagina {page + 1}<svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor"></path>
</svg>
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
  <div className="text-center"> 
    <input
    className=" form-control search-per mt-5 mb-3 py-3 fs-5"
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
          <div className="col-md-3 my-2" key={character.id}>
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
