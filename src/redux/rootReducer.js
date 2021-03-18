const initialState = {
  interface: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INTERFACE": {
      const newState = { ...state };
      newState["interface"] = action.payload;
      return newState;
    }
    case "SETWALLET": {
      const newState = { ...state };
      newState["walletAddress"] = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default rootReducer;
