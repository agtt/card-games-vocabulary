import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import CSSModules from 'react-css-modules'
import styles from '../css/ScoreBoard.css'

const ScoreBoard = ({progress, accuracy}) => (
	<div styleName='scoreBoard'>
		
		<h1>Progress:</h1><h1>{progress}/6</h1>
		<h1>Accuracy:</h1><h1>{accuracy}%</h1>
		
	</div>
)

ScoreBoard.propTypes = {
	progress:PropTypes.number.isRequired,
	accuracy:PropTypes.number.isRequired
}

/*container*/
const mapStateToProps = state => {
	const{ cardsAndBoradState } = state
	let fomatFloat = Math.round((parseInt(cardsAndBoradState.progress)/parseInt(cardsAndBoradState.frequency))*100)
	let accuracy = parseInt(cardsAndBoradState.frequency)===0?0:fomatFloat
	return{
		progress:cardsAndBoradState.progress/2,
		accuracy:accuracy
	}
	
}


export default connect(mapStateToProps)(CSSModules(ScoreBoard,styles))



