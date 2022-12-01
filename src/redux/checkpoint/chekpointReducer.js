const INITIAL_STATE = {
  checkpoints: [],
  checkpoint: {},
  isLoading: false,
  error: false,
};

const checkpointReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingCheckpoints":
      return { ...state, isLoading: true };
    case "getCheckpoints":
      return { ...state, isLoading: false, checkpoints: action.payload };
    case "errorCheckpoints":
      return {
        ...state,
        isLoading: false,
        checkpoints: [],
        error: action.payload,
      };
    case "gettingCheckpoint":
      return { ...state, isLoading: true };
    case "getCheckpoint":
      return { ...state, isLoading: false, checkpoint: action.payload };
    case "errorCheckpoint":
      return {
        ...state,
        isLoading: false,
        checkpoint: {},
        error: action.payload,
      };


    default:
      return state;
  }
};

export default checkpointReducer;
