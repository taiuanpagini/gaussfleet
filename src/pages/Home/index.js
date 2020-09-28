import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Description } from './styles';

export default function Ajuda({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => navigation.goBack()}>
      //     <Icon name="chevron-left" size={30} color="#000" />
      //   </TouchableOpacity>
      // ),
      headerLeft: null,
    });
  }, [navigation]);

  return (
    <Container>
      <Title>Precisa de ajuda?</Title>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe incidunt
        ipsum eos minima dolor consequuntur itaque assumenda cum nobis impedit,
        laborum commodi enim voluptas, eligendi aliquid velit, non eveniet
        doloribus.
      </Description>
    </Container>
  );
}
