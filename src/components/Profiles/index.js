import React, { useState } from 'react';

import { Dimensions, Alert } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { withNavigation } from 'react-navigation';

import { SelectionArea, Profile, ProfileName } from './styles';

import * as UserActions from '~/store/actions/user';

import Tts from '~/services/text-to-speech';
import getRealm from '~/services/realm';

function Profiles({
  users, setUser, navigation, speaking,
}) {
  const [reflash, setReflash] = useState(false);

  async function handleSelectUser(user) {
    if (speaking) {
      await Tts.speak(user.name);
    }
    setUser(user);

    navigation.navigate('Main');
  }

  function handleLongPress(id) {
    Alert.alert('Deletar usuário', 'Deseja realmente deletar o usuário?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Deletar',
        onPress: async () => {
          const realm = await getRealm();

          const user = realm.objects('User').filtered(`id = '${id}'`);

          realm.write(() => {
            realm.delete(user);

            Alert.alert('Usuário deletado!');
            setReflash(!reflash);
          });
        },
      },
    ],
    { cancelable: false });
  }

  return (
    <SelectionArea>
      {
        users
          && users.map(user => (
            <Profile
              key={user.id}
              onLongPress={() => handleLongPress(user.id)}
              onPress={() => {
                handleSelectUser(user);
              }}
            >
              <Icon name="user" size={Dimensions.get('screen').width * 0.15} color="#feca57" />
              <ProfileName numberOfLines={1}>{user.name}</ProfileName>
            </Profile>
          ))}
    </SelectionArea>
  );
}

const mapStateToProps = state => ({ speaking: state.speaking });

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(UserActions.setUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Profiles));
