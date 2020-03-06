import axios from 'axios';
export const FETCH_START = 'FETCH_START'

export const move = (data) => {
    return {
        type: "MOVE",
        payload: data
    }
}


export const getMapData = _=> dispatch => {
    dispatch({type: FETCH_START})
axios.get('https://muskmaze.herokuapp.com/api/adv/maps/')
.then(res => {
    console.log(res.data)
    let mapData;
    if(res.data){
        mapData = res.data //if there is response set to this
    }
})
}
