import React from "react";

/* METTRE LA VALEUR DANS LE RANGE : */

const Sidebar = () => {
  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: "sticky", top: 0 }}>
        <label className="fw-bold mb-2" htmlFor="sort">
          Afficher des polices
        </label>
        <select id="sort" className="form-select mb-4">
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">
            Tapez votre texte
          </label>
          <textarea id="text" className="form-control">
            Portez ce vieux whisky au juge blond qui fume !? 0123456789
          </textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">
          La taille de police
        </label>
        <input id="range" type="range" className="form-range" min="8" max="48" step="1" value={"0"}></input>

        <label htmlFor="customRange3" className="form-label fw-bold text-danger mb-3">
          Range pour test
        </label>
        <input
          id="customRange3"
          type="range"
          className="form-range form-range-track-bg: gray-300"
          min="0"
          max="5"
          step="0.5"
        ></input>
      </div>
    </div>
  );
};

export default Sidebar;
