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
      case "searchCheckpoints":
        return { ...state, search: action.payload, error: false };
  
      case "postingCheckpoints":
        return { ...state, isLoading: true };
  
      case "postCheckpoints":
        return {
          ...state,
          isLoading: false,
          checkpoints: action.payload,
          error: false,
        };
  
      case "errorPostCheckpoints":
        return { ...state, isLoading: false, checkpoints: [], error: action.payload };
  
      case "puttingCheckpoints":
        return { ...state, isLoading: true };
  
      case "putCheckoints":
        return {
          ...state,
          isLoading: false,
          checkpoints: action.payload,
          error: false,
        };
  
      case "errorputCheckpoints":
        return { ...state, isLoading: false, checkpoints: [], error: action.payload };
  
      case "deletingCheckpoints":
        return { ...state, isLoading: true };
  
      case "deleteCheckpoints":
        return {
          ...state,
          isLoading: false,
          checkpoints: action.payload,
          error: false,
        };
  
      case "errorDeleteCheckpoints":
        return { ...state, isLoading: false, checkpoints: [], error: action.payload };


    default:
      return state;
  }
};

export default checkpointReducer;
