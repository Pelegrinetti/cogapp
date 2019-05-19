import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const SelectionArea = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})``;

export const Profile = styled.TouchableOpacity`
  height: 100%;
  width: ${Dimensions.get('screen').width * 0.16}px;
  justify-content: center;
  align-items: center;
`;

export const ProfileName = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
  font-family: 'BalooBhai';
`;
