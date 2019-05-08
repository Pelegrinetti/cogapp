import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import {
  Container, Option, OptionText, OptionSwitch, ScrollView, Card, CardBody,
} from './styles';

import * as SpeakingActions from '~/store/actions/speaking';

Settings.navigationOptions = {
  title: 'Configurações',
};

function Settings({ speaking, setSpeaking }) {
  const [speakingOpt, setSpeakingOpt] = useState();

  useEffect(() => {
    setSpeakingOpt(speaking);
  }, []);

  function handleSetSpeaking() {
    setSpeakingOpt(!speakingOpt);
    setSpeaking(!speaking);
  }

  return (
    <Container>
      <Card>
        <CardBody>
          <ScrollView>
            <Option>
              <OptionText>
                {speakingOpt ? 'Destivar assistente de voz' : 'Ativar assistente de voz'}
              </OptionText>
              <OptionSwitch value={speakingOpt} onValueChange={handleSetSpeaking} />
            </Option>
          </ScrollView>
        </CardBody>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  speaking: state.speaking,
});

const mapDispatchToProps = dispatch => ({
  setSpeaking: opt => dispatch(SpeakingActions.setSpeaking(opt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
