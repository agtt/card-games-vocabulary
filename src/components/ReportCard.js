import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { allWords } from '../../config/randomWords'

import CSSModules from 'react-css-modules'
import styles from '../css/ReportCard.css'

const ReportCard = ({accuracy, wrong, wrongWordsIsEmpty}) => (
	<div styleName='reportCard'>
		
		<div>
			<h1>Accuracy</h1>
			<div styleName='accuracy'>
				<h1 >{accuracy}%</h1>
			</div>
		</div>
		<div>
			<h1>WrongWords</h1>
			<div styleName='wrongWords'>
			{	wrongWordsIsEmpty===true?<h1>EXCELLENT!!!</h1>:
				wrong.map((value,index)=>
				<div key={index} styleName='detail'>
					<h3>{value.word}</h3>
					<p>{value.meaning}</p>
				</div>
			)}
			</div>
		</div>
	</div>
)

ReportCard.propTypes = {
	accuracy:PropTypes.number.isRequired
}

/*container*/
const mapStateToProps = state => {
	const{ cardsAndBoradState } = state
	let fomatFloat = Math.round((parseInt(cardsAndBoradState.progress)/parseInt(cardsAndBoradState.frequency))*100)
	let accuracy = parseInt(cardsAndBoradState.frequency)===0?0:fomatFloat
	let numberOfWrong = Math.ceil(accuracy/100*4)
	let wrong = allWords.filter((value,index)=>
			new Set(cardsAndBoradState.wrongWords).has(value.id)
			)
	let wrongWordsIsEmpty = wrong.length===0
	return{
		accuracy:accuracy,
		wrong:wrong,
		wrongWordsIsEmpty:wrongWordsIsEmpty
	}
	
}

export default connect(mapStateToProps)(CSSModules(ReportCard,styles))