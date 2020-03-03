import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './walkSprite.png'



function Player(props) {
return (
    <div
    style={{
        position: 'relative',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPostion: '0 0',
        width: '65px',
        height: '70px'
    }}
    />
)
}


function mapStateToProps(state) {
    return { //want player attributes from store
     ...state.player,
    //takes it and spreads it out
    }
}

export default connect(mapStateToProps)(Player) //higher order

