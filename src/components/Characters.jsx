// components/Characters.js
import React from 'react';
import CharacterList from './CharacterList';
import CharacterFilters from './CharacterFilters';
import { Typography } from 'antd';

const { Title } = Typography;

function Characters() {
  return (
    <div className=" mx-auto py-4">
      <Title level={2} className="text-center mb-4">
      Rick and Morty Characters
    </Title>
      <CharacterFilters />
      <CharacterList />
    </div>
  );
}

export default Characters;
