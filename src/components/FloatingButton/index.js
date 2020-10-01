import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ButtonOption } from './styles';

export default function FloatingButton() {
  return (
    <ButtonOption onPress={() => {}}>
      <Icon name="add" size={25} color="#ffffff" />
    </ButtonOption>
  );
}
