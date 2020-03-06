import FETCH_START from '../../actions/roomActions'


const roomReducer = (state = {
    title: "",
    description: "",
    mapData: [],
    players: [],
    error_msg: "",
    currentUser: localStorage.getItem('user') ? localStorage.getItem('user') : ''
}, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem('user', action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        case "MOVE":
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                players: action.payload.players,
                error_msg: action.payload.error_msg,
            };

        case "FETCH_START":
           return {
               ...state,
               mapData: action.payload //state you want to change
               
           }
        default:
            return state
    }
}

export default roomReducer