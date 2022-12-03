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
      case "searchCheckpoint":
        return { ...state, search: action.payload, error: false };
  
      case "postingCheckpoint":
        return { ...state, isLoading: true };
  
      case "postCheckpoint":
        return {
          ...state,
          isLoading: false,
          checkpoint: action.payload,
          error: false,
        };
  
      case "errorPostCheckpoint":
        return { ...state, isLoading: false, checkpoints: [], error: action.payload };
  
      case "puttingCheckpoint":
        return { ...state, isLoading: true };
  
      case "putCheckpoint":
        return {
          ...state,
          isLoading: false,
          checkpoint: action.payload,
          error: false,
        };
  
      case "errorPutCheckpoint":
        return { ...state, isLoading: false, checkpoints: [], error: action.payload };
  
      case "deletingCheckpoint":
        return { ...state, isLoading: true };
  
      case "deleteCheckpoint":
        return {
          ...state,
          isLoading: false,
          checkpoints: [...action.payload],
          error: false,
        };
  
      case "errorDeleteCheckpoint":
        return { ...state, isLoading: false, checkpoints: [], error: action.payload };


    default:
      return state;
  }
};

export default checkpointReducer;
