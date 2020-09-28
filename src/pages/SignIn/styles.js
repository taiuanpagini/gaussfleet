import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const LogoApp = styled.Image`
  width: 250px;
  height: 250px;
  margin-top: 70px;
  align-self: center;
  resize-mode: contain;
`;

export const ContainerForm = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
  background: #006bff;
`;

export const SignLink = styled.TouchableOpacity`
  margin-bottom: 50px;
  flex-direction: row;
  align-items: center;
`;

export const SignLinkText = styled.Text`
  color: #000;
  font-size: 14px;
`;

export const SignLinkTextBold = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Title = styled.Text`
  width: 100%;
  color: #333;
  font-size: 35px;
  text-align: left;
  margin-bottom: 20px;
  font-weight: bold;
`;
