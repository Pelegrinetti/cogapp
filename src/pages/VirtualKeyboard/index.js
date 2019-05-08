import React, { useState } from 'react';

import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container, Card, CardBody, TextInput, Button,
} from './styles';

import Tts from '~/services/text-to-speech';

VirtualKeyboard.navigationOptions = {
  title: 'Insira o que deseja falar:',
};

export default function VirtualKeyboard() {
  const [text, setText] = useState('');

  function handleSetText(assignedText) {
    if (assignedText === '') return;

    setText(assignedText);
  }

  async function handleSpeakText() {
    if (text !== '') {
      // Tts.stop();
      await Tts.speak(text);
    }
  }

  return (
    <Container>
      <Card>
        <CardBody>
          <TextInput placeholder="Escreva o texto aqui" onChangeText={handleSetText} />
          <Button onPress={handleSpeakText}>
            <Icon name="volume-up" size={Dimensions.get('screen').width * 0.05} color="#fff" />
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}
