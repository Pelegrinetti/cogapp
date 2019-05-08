import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container, Grid, GridBody, Button, GridRow, ButtonText,
} from './styles';

import Tts from '~/services/text-to-speech';

Main.navigationOptions = {
  title: 'Seja bem-vindo',
};

function Main({ user, speaking, navigation }) {
  useEffect(() => {
    navigation.setParams({
      username: user.name,
    });
  }, []);

  async function handleChildrenArea(text) {
    if (speaking) {
      await Tts.speak(text);
    }
  }

  async function handleReport(text) {
    if (speaking) {
      await Tts.speak(text);
    }
  }

  async function handleVirtualKeyboard(text) {
    if (speaking) {
      Tts.stop();
      await Tts.speak(text);
    }
    navigation.navigate('VirtualKeyboard');
  }

  async function handleConfig(text) {
    if (speaking) {
      await Tts.speak(text);
    }

    navigation.navigate('Settings');
  }

  return (
    <Container>
      <Grid>
        <GridBody>
          <GridRow>
            <Button
              onPress={() => {
                handleChildrenArea('Área da criança');
              }}
            >
              <Icon name="child" size={70} color="#000" />
              <ButtonText>Área da Criança</ButtonText>
            </Button>
            <Button
              onPress={() => {
                handleReport('Relatórios');
              }}
            >
              <Icon name="clipboard" size={70} color="#000" />
              <ButtonText>Relatórios</ButtonText>
            </Button>
          </GridRow>
          <GridRow>
            <Button
              onPress={() => {
                handleVirtualKeyboard('Teclado Virtual');
              }}
            >
              <Icon name="keyboard" size={70} color="#000" />
              <ButtonText>Teclado Virtual</ButtonText>
            </Button>
            <Button
              onPress={() => {
                handleConfig('Configurações');
              }}
            >
              <Icon name="cog" size={70} color="#000" />
              <ButtonText>Configurações</ButtonText>
            </Button>
          </GridRow>
        </GridBody>
      </Grid>
    </Container>
  );
}

export default connect(state => ({
  user: state.user,
  speaking: state.speaking,
}))(withNavigation(Main));
