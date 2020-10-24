const initialState = {
    images:[],
  };
  
  interface actionTypes {
  type:String,
  payload:any
  }
  export const imageReducer = (state=initialState,actions:actionTypes)=>{
  
    switch (actions.type) {
      case "ADD_IMAGE":
        return {images:[...state.images,actions.payload]}
        case "REMOVE_IMAGE":
          let arr=[...state.images]
          arr.splice(actions.payload,1)
        return {images:arr}
      default:
        return state;
    }
  };
  