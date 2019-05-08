import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #feca57;
  flex-direction: row;
`;

export const Grid = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 5px 10px;
  justify-content: center;
  align-items: center;
`;

export const GridBody = styled.View`
  flex: 1;
`;

export const GridRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  width: 49.5%;
  height: 97%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  elevation: 1;
`;

export const ButtonText = styled.Text`
  font-family: 'BalooBhai';
  font-size: 16px;
  color: #000;
`;
