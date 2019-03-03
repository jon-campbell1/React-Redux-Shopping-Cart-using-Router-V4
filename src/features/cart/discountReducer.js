const discountReducer = (state = 1, action) => {
  switch(action.type) {
    case 'APPLY_DISCOUNT':
    if(action.payload == "Jonathan") {
      return .5;
    } else {
      return 1;
    }
    default:
      return state;
  }
}

export default discountReducer;
