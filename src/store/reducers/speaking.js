const INITAL_ASSIGN = true;

function speak(state = INITAL_ASSIGN, action) {
  switch (action.type) {
    case 'SET_SPEAK':
      console.log(action);
      state = action.speak;
      break;
    default:
      break;
  }

  return state;
}

export default speak;
