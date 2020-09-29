import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import BottomSheet from '~/components/BottomSheet';
import ButtonsRight from '~/components/ButtonsRight';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Title } from './styles';

export default function Fuel({ navigation }) {
  const dispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);

  const abreMenu = useCallback(
    function abreMenu() {
      setOpenOptions(!openOptions);
    },
    [openOptions]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonsRight navigation={navigation} abreMenu={abreMenu} />
      ),
    });
  }, [navigation, abreMenu]);

  function confirmLogout() {
    setOpenOptions(!openOptions);

    setTimeout(() => {
      Alert.alert(
        'Atenção',
        'Deseja realmente sair do app?',
        [
          {
            text: 'Sim',
            onPress: () => dispatch(signOut()),
          },
          {
            text: 'Não',
          },
        ],
        { cancelable: false }
      );
    }, 100);
  }

  return (
    <Container>
      <Title>Módulo disponível em breve.</Title>

      {/* BOTTOM SHEET */}
      <BottomSheet
        options={[
          {
            id: 0,
            title: 'Sair do App',
            icon: 'log-out-outline',
            onClick: confirmLogout,
          },
        ]}
        activeMenu={openOptions}
        abreMenu={abreMenu}
      />
    </Container>
  );
}
