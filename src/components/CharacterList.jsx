// components/CharacterList.js
import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const { characters } = useContext(CharacterContext);

  console.log('Filtered Characters:', characters);


  if (characters === undefined) {
    return (
      <div className="text-center">
        <p className="text-xl font-semibold">No characters found</p>
      </div>
    );
  }



  return (
    <div className="grid m-[10px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
