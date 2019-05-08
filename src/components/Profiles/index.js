import React from 'react';

import { Dimensions } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { withNavigation } from 'react-navigation';

import { SelectionArea, Profile, ProfileName } from './styles';

import * as UserActions from '~/store/actions/user';

import Tts from '~/services/text-to-speech';

function Profiles({
  users, setUser, navigation, speaking,
}) {
  async function handleSelectUser(user) {
    if (speaking) {
      await Tts.speak(user.name);
    }
    setUser(user);

    navigation.navigate('Main');
  }

  return (
    <SelectionArea>
      {users.map(user => (
        <Profile
          key={user.id}
          onPress={() => {
            handleSelectUser(user);
          }}
        >
          <Icon
            name="user-circle"
            size={Dimensions.get('screen').width * 0.15}
            color="#feca57"
          />
          <ProfileName>{user.name}</ProfileName>
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
