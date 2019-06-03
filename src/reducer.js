export default function reducer(state, action) {
  switch (action.type) {
    case "INPUT_TERM":
      return {
        ...state,
        Term: action.payload
      };
    default:
      return state;
  }
}
