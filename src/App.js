import React from 'react'
import { connect } from 'react-redux'

import ScoreBoard from './components/ScoreBoard'
import ReportCard from './components/ReportCard'
import Confirm from './components/Confirm'
import CardsBoard from './container/CardTransition'
import CountDown from './components/CountDown'

const App = ({progress,completion,restart}) => (
	
		<div>
			{	
				completion === true ?
				<div>
					<Confirm/>
					<ScoreBoard/>
					<CardsBoard/>
				</div>:
				<CountDown/>
			}		
		</div>
	
)

/*const App = ({progress,completion}) => (
	
	<ReportCard/>
	
)*/

/*container*/
const mapStateToProps = state => ({
	
	progress:state.cardsAndBoradState.progress/2,
	completion:state.cardsCompleted.completion,
	restart:state.cardsCompleted.restart
	
})


export default connect(mapStateToProps)(App)

