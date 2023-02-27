export const initialState = {
  user: null,
  playlists: [],
  playing: null,
  item: null,
  //remove after debuging
  token: 'BQCwdJQXR5P1J9NmdQ26dSRxpUX0hi8XCKMKWoyuLW6_CVyaltHbQxHk7qEiGcjU5p8SQ_W7mWaZvVkrt9GeLycmlBe5F6G8BmTdz3gJqUml6YT58tB-AgHoVozJkdKIJ5oLycch_BIrRXPaZjqua0mCFy2ThibvakRdQmljfmCHB1slE7U0hW7yr6pUQS16DRZTZumXI4-N5Z-ZUg'
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
}
export default reducer;