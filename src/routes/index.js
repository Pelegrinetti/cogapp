import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import {
  Container, Content, SideContent, TitleContent, Title, IconContainer,
} from './style';

import Login from '~/pages/Login';
import RegisterUser from '~/pages/RegisterUser';
import Main from '~/pages/Main';
import VirtualKeyboard from '~/pages/VirtualKeyboard';
import Settings from '~/pages/Settings';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Main,
      RegisterUser,
      VirtualKeyboard,
      Settings,
    },
    {
      defaultNavigationOptions: {
        header: props => (
          <Container>
            <Content>
              {props.index > 0 && (
                <SideContent
                  onPress={() => {
                    props.navigation.pop();
                  }}
                >
                  <IconContainer>
                    <Icon name="chevron-left" size={30} color="#000" />
                  </IconContainer>
                </SideContent>
              )}
              <TitleContent>
                <Title>{props.scene.descriptor.options.title}</Title>
              </TitleContent>
              {props.index > 0 && <SideContent />}
            </Content>
          </Container>
        ),
      },
    },
  ),
);

export default Routes;
