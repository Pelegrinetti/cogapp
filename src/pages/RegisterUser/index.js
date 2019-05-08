import React, { useState } from 'react';

import Realm from 'realm';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import uuid from 'uuid/v4';

import {
  Container,
  Card,
  CardBody,
  TextInput,
  Button,
  Popup,
  PopupContent,
  PopupText,
} from './style';

import UserSchema from '~/services/models/User';

RegisterUser.navigationOptions = {
  title: 'Informe o nome do usuário:',
};

export default function RegisterUser(props) {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [visibleEmptyName, setVisibleEmptyName] = useState(false);

  function handleSetName(username) {
    setName(username);
  }
  function handleSaveUser() {
    if (name) {
      Realm
        .open({ path: 'cogcom.realm', schema: [UserSchema] })
        .then((realm) => {
          realm.write(async () => {
            await realm.create('User', { id: uuid(), name });
          });
        });
      handleSetVisible();
    } else {
      handleSetVisibleEmptyName();
    }
  }

  function handleSetVisible() {
    setVisible(true);
  }

  function handleSetVisibleEmptyName() {
    setVisibleEmptyName(true);
  }

  return (
    <Container>
      <Card>
        <CardBody>
          <Popup animationType="slide" visible={visible}>
            <PopupContent>
              <Icon name="check-circle" size={100} color="#1dd1a1" />
              <PopupText>Usuário cadastrado com sucesso!</PopupText>
              <Button
                onPress={() => {
                  props.navigation.pop();
                }}
              >
                <Icon name="thumbs-up" size={24} color="#FFF" />
              </Button>
            </PopupContent>
          </Popup>
          <Popup animationType="slide" visible={visibleEmptyName}>
            <PopupContent>
              <Icon name="exclamation-circle" size={100} color="#ee5253" />
              <PopupText>Nome inválido!</PopupText>
              <Button
                onPress={() => {
                  setVisibleEmptyName(false);
                }}
              >
                <Icon name="thumbs-up" size={24} color="#FFF" />
              </Button>
            </PopupContent>
          </Popup>
          <TextInput
            onChangeText={handleSetName}
            placeholder="Clique aqui e informe o nome:"
          />
          <Button onPress={handleSaveUser}>
            <Icon name="save" size={40} color="#fff" />
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}
