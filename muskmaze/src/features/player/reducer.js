//map state to props and dispatch to props
//whatever state is in reducer gets mapped to props in component
const initialState = {
  position: [0,0],      //character lives in 2d world x and y axis
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
      default:
      return state //whatever is in store gets returned
  }  
}

export default playerReducer