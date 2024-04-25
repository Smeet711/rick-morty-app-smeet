import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography } from 'antd';

const { Text } = Typography;

function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`}>
      <Card className="mb-4" hoverable style={{ width: 300 }}>
        <img src={character.image} alt={character.name} className="mx-auto mb-2 rounded-full" />
        <Card.Meta title={character.name} />
        <Text strong>Status:</Text> <Text>{character.status}</Text><br />
        <Text strong>Gender:</Text> <Text>{character.gender}</Text>
      </Card>
    </Link>
  );
}

export default CharacterCard;
