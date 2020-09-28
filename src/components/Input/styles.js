import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 50px;
  background: #ffffff;
  border-color: #dcdcdc;
  border-width: 1px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 20px;
  color: 'rgba(0,0,0,0.6)';
`;
