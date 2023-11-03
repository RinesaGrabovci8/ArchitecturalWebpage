const Reducer = (state, action) => {
    switch (action.type) {
      case 'TOKEN':
        return {
          ...state,
          token: action.payload.token,
        };
      case 'LANG':
        return {
          ...state,
          lang: action.payload.lang,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  