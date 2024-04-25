// components/CharacterFilters.js
import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { Input, Select } from 'antd';
// import 'antd/dist/antd.css';

const { Option } = Select;

function CharacterFilters() {
  const { filter, setFilter, fetchCharacters } = useContext(CharacterContext);

  const handleChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
    fetchCharacters();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-4">
      <Input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filter.name}
        onChange={(e) => handleChange('name', e.target.value)}
        className="px-4 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
      />
      <Select
        value={filter.status}
        onChange={(value) => handleChange('status', value)}
        className="mb-2 md:mb-0 md:mr-2"
        style={{ minWidth: '150px' }}
        placeholder="Select Status"
      >
        <Option value="">All Status</Option>
        <Option value="alive">Alive</Option>
        <Option value="dead">Dead</Option>
        <Option value="unknown">Unknown</Option>
      </Select>
      <Select
        value={filter.gender}
        onChange={(value) => handleChange('gender', value)}
        style={{ minWidth: '150px' }}
        placeholder="Select Gender"
      >
        <Option value="">All Genders</Option>
        <Option value="female">Female</Option>
        <Option value="male">Male</Option>
        <Option value="genderless">Genderless</Option>
        <Option value="unknown">Unknown</Option>
      </Select>
    </div>
  );
}

export default CharacterFilters;
