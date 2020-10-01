import React, { useEffect, useRef, useState } from 'react';

import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  LogoApp,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  SignLinkTextBold,
  ContainerForm,
} from './styles';
import BottomSheet from '~/components/BottomSheet';
import logo from '~/assets/image/logo.png';
import { executeQuery } from '~/services/dbUtil';
import { createTableProfile } from '~/sql/profile';
import { signInRequest } from '~/store/modules/auth/actions';
import { createTableUsers } from '~/sql/users';

export default function Login() {
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const [openOptions, setOpenOptions] = useState(false);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    executeQuery(createTableProfile());
    executeQuery(createTableUsers());
  }, []);

  async function handleSubmit() {
    if (!loading) {
      dispatch(signInRequest(email, password));
    }
  }

  function abreMenu() {
    setOpenOptions(!openOptions);
  }

  function teste() {
    Alert.alert('Atenção', 'Funcionou');
  }

  return (
    <Container>
      <LogoApp source={logo} />
      <ContainerForm>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => abreMenu()}>
          <SignLinkText>Precisa de ajuda?</SignLinkText>
          <SignLinkTextBold>Clique aqui</SignLinkTextBold>
        </SignLink>
      </ContainerForm>

      {/* BOTTOM SHEET */}
      <BottomSheet
        options={[
          {
            id: 0,
            title: 'Recuperar senha',
            icon: 'lock-outline',
            onClick: teste,
          },
          {
            id: 1,
            title: 'Não consigo acessar',
            icon: 'alert-circle-outline',
            onClick: teste,
          },
          {
            id: 2,
            title: 'Solicitar acesso',
            icon: 'person-add-outline',
            onClick: teste,
          },
        ]}
        activeMenu={openOptions}
        abreMenu={abreMenu}
      />
    </Container>
  );
}
