const initialState = {
  interface: null,
  walletAddress: null,
  totalMinted: 0,
  userTokens: [],
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
    case "TOTALMINTED": {
      const newState = { ...state };
      newState["totalMinted"] = action.payload;
      return newState;
    }
    case "USERTOKENS": {
      const newState = { ...state };
      newState["userTokens"] = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default rootReducer;
