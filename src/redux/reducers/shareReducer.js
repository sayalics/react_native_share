import Constants from "../constants";

const initialState = {
  shareData: [],
  shareerror: null,
  isLoading: false,
};

const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SHARE_SUCCESS:
      console.log(
        "shareReducer payload: share SUCCESS"
      );
      return {
        ...state,
        shareData: action.payload,
        shareerror: null,
        isLoading: false,
      };
    case Constants.SHARE_FAILED:
      console.log(
        "shareReducer payload: share FAILED"
      );
      return {
        ...state,
        shareData: [],
        shareerror: action.payload,
        isLoading: false,
      };
    case Constants.SHARE_PENDING:
      console.log(
        "shareReducer payload: share PENDING"
      );
      return {
        ...state,
        shareData: [],
        shareerror: null,
        isLoading: true,
      };
    case Constants.RESET_STORE:
      console.log("shareReducer payload: RESET_STORE");
      return {
        ...state,
        shareData: [],
        shareerror: null,
      };

    default:
      return state;
  }
};

export default shareReducer;
