import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #feca57;
`;

export const Card = styled.View`
  flex: 1;
  background-color: #fff;
  margin: 0 10px 10px;
  elevation: 4;
  border-radius: 5px;
`;

export const CardBody = styled.View`
  margin: 5px;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-size: 30px;
  padding: 20px;
  width: 100%;
  height: 50%;
  elevation: 1;
`;

export const Button = styled.TouchableOpacity`
  width: ${Dimensions.get('screen').width * 0.15}px;
  height: ${Dimensions.get('screen').width * 0.15}px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #1dd1a1;
  border-radius: 100px;
`;
