import React from 'react';
import { useParams } from 'react-router-dom';
import { EditPokemon } from './EditPokemon';

export default function EditPokemonWrapper(props) {
  const params = useParams();
  return <EditPokemon {...props} match={{ params }} />;
}
