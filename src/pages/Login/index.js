import React, { useState, useEffect } from 'react';

import { NavigationEvents } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import getRealm from '~/services/realm';

import {
  Container, Card, Button, Title, TitleContainer,
} from './style';

import Profiles from '~/components/Profiles';

Login.navigationOptions = {
  title: 'Selecione o usuário',
};

function Login({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleSetUsers();
  }, []);

  function handleRegister() {
    navigation.navigate('RegisterUser');
  }

  async function handleSetUsers() {
    const realm = await getRealm();

    const usersResult = realm.objects('User');

    if (Object.keys(usersResult).length) {
      setUsers(usersResult);
    }
  }

  return (
    <>
      <NavigationEvents onWillFocus={handleSetUsers} />
      <Container>
        <Card>
          {users ? (
            <Profiles users={users} />
          ) : (
            <TitleContainer>
              <Title>Não há usuários cadastrados</Title>
            </TitleContainer>
          )}
          <Button onPress={handleRegister}>
            <Icon name="plus-circle" size={40} color="#1dd1a1" />
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default Login;
