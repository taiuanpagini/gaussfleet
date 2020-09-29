import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ButtonOption } from './styles';

export default function ButtonsRight({ viewInputSearch, abreMenu }) {
  return (
    <Container>
      {viewInputSearch && (
        <ButtonOption onPress={() => viewInputSearch()}>
          <Icon name="filter-alt" size={20} color="#000" />
        </ButtonOption>
      )}
      <ButtonOption onPress={() => abreMenu()}>
        <Icon name="more-vert" size={20} color="#000" />
      </ButtonOption>
    </Container>
  );
}
