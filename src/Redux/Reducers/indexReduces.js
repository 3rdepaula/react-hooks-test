const initalState = {
  token: false,
  loading: false,
};

export default function list(state = initalState, action) {
  console.log(action);

  switch (action.type) {
    case 'ADD_TOKEN':
      return {...state, token: action.token};
    case 'ADD_LOADING':
      return {...state, loading: action.loading};
    default:
      return state;
  }
}
