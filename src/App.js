import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar-component";
import PokemonList from "./components/PokemonList";
import EditPokemonWrapper from "./components/EditPokemonWrapper"; // <-- importa o wrapper
import CreatePokemon from "./components/CreatePokemon";
import CreateTipo from "./components/CreateTipo";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<PokemonList />} />
          <Route path="/edit/:id" element={<EditPokemonWrapper />} /> {/* usa o wrapper */}
          <Route path="/create" element={<CreatePokemon />} />
          <Route path="/tipo" element={<CreateTipo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
