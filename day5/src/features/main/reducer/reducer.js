const initialState = {
  list: [],
  isLoading: false,
};

const MainReducer = (state = initialState, action) => {
  console.log(action, 'ini main');
  return state;
};
export default MainReducer;
