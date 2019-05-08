import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80px;
  background-color: #feca57;
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
  align-items: center;
  flex-direction: row;
  elevation: 4;
`;

export const SideContent = styled.TouchableOpacity`
  width: 100px;
`;

export const TitleContent = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #000;
  font-family: 'BalooBhai';
  font-size: 25px;
  font-weight: 100;
  text-align: center;
`;

export const IconContainer = styled.View`
  margin-left: 20px;
`;
