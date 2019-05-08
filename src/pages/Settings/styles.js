import styled from 'styled-components/native';

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

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    width: '98%',
  },
})``;

export const Option = styled.View`
  width: 100%;
  height: 50px;
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-family: 'BalooBhai';
  font-weight: 200;
  font-size: 20px;
  color: #000;
`;

export const OptionSwitch = styled.Switch``;
