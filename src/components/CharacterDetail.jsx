import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { Card, Typography } from 'antd';

const { Text } = Typography;

function CharacterDetail() {
  const { id } = useParams();
  const { characters } = useContext(CharacterContext);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const foundCharacter = characters.find((char) => char.id === parseInt(id));
    setCharacter(foundCharacter);
  }, [characters, id]);

  return (
    <div className="container mx-auto py-4">
      {character && (
        <Card title={character.name} className="mx-auto mb-2 text-center" style={{ width: 300 }}>
          <img src={character.image} alt={character.name} className="mx-auto mb-2 rounded-full" />
          <Text strong>Status:</Text> <Text>{character.status}</Text><br />
          <Text strong>Gender:</Text> <Text>{character.gender}</Text><br />
          <Text strong>Species:</Text> <Text>{character.species}</Text><br />
          <Text strong>Origin:</Text> <Text>{character.origin.name}</Text><br />
        </Card>
      )}
    </div>
  );
}

export default CharacterDetail;
