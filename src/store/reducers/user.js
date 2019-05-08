const INITAL_ASSIGN = {
  id: '',
  name: '',
};

function user(state = INITAL_ASSIGN, action) {
  switch (action.type) {
    case 'SET_USER':
      console.log(action);
      state = action.user;
      break;
    default:
      break;
  }

  return state;
}

export default user;
