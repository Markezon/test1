import React from 'react';
import styled from 'styled-components';
import CatCard from '../catCard/CatCard';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CatList = ({ cats }) => {
  return (
    <ListWrapper>
      {cats.map((cat) => (
        <CatCard key={cat.id} url={cat.url} />
      ))}
    </ListWrapper>
  );
};

export default CatList;
