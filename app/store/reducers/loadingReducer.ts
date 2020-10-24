const initialState = {
  isLoading: false,
};

interface actionTypes {
type:String,
payload:any
}
export const loadingReducer = (state=initialState,actions:actionTypes)=>{

  switch (actions.type) {
    case "LOADING":
      return {isLoginLoading:actions.payload}
    default:
      return state;
  }
};
