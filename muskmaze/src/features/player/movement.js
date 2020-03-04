import store from '../../config/store'
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants'


export default function handleMovement(player){

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position // gives redux stoe to grab state
       switch(direction) {
           case 'WEST':
             return [ oldPos[0]-SPRITE_SIZE, oldPos[1]]
            case 'EAST':
             return [ oldPos[0]+SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
             return [ oldPos[0], oldPos[1]-SPRITE_SIZE]
            case 'SOUTH':
             return [ oldPos[0], oldPos[1]+SPRITE_SIZE]
       }
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH-SPRITE_SIZE) &&
               (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT-SPRITE_SIZE) //youre on map
                ? newPos : oldPos
    }

    function disptachMove(direction) {
        const oldPos = store.getState().player.position
         
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: observeBoundaries(oldPos, getNewPosition(direction)) //updates store and player position and gives back new position
            }
        })
    }

 function handleKeyDown(e){
     e.preventDefault() //prevents scroll action

     switch(e.keyCode) {
        case 37:
         return disptachMove('WEST')

        case 38:
         return disptachMove('NORTH')

        case 39:
          return  disptachMove('EAST')

        case 40:
          return disptachMove("SOUTH")
        default:
          console.log(e.keyCode)
 }
 }

window.addEventListener('keydown', (e)=>{
    handleKeyDown(e)
})

    return player     //takes component does stuff and returns component so higher order
}