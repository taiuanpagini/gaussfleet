import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 0 13px;
`;

export const FormInput = styled(Input)`
  margin-top: 20px;
`;

export const ListUsers = styled.FlatList`
  margin-top: 20px;
`;

export const ContainerIndicator = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 0 10px;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
  border: 1px solid #ececec;
`;

export const DataUser = styled.View`
  flex-direction: column;
`;

export const Nome = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Email = styled.Text``;

export const EmptyUser = styled.Text`
  text-align: center;
`;
