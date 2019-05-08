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
  width: 100%;
  height: ${Dimensions.get('screen').height * 0.47}px;
  font-size: 30px;
  text-align: center;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin: 5px;
  height: 50px;
  width: 70px;
  background-color: #1dd1a1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Popup = styled.Modal`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
`;

export const PopupContent = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const PopupText = styled.Text`
  margin: 20px;
  font-size: 20px;
  color: #000;
  font-family: 'BalooBhai';
`;
