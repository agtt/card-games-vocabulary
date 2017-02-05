import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { theEndOfGame } from '../actions/action'
import ReportCard from './ReportCard'

import CSSModules from 'react-css-modules'
import styles from '../css/Confirm.css'


const Confirm = ({options, restart, showConfirm}) => (
	<div styleName= 'confirmContainer'>
		{	
			showConfirm === false?
			restart === true ?window.location.reload():
			<div styleName= 'confirmWrapper'>
				<ReportCard />
			</div>:
			<div styleName= 'confirmWrapper'>
				<div styleName='confirm'>
					<h1>Do you wanna play again ?</h1>
					<div styleName='button'>
						<div onClick = {()=>options('YES')}>Yes</div>
						<div onClick = {()=>options('NO')}>No</div>
					</div>
				</div>
			</div>
		}	
	</div>
)

Confirm.propTypes = {
	options:PropTypes.func.isRequired,
	showConfirm:PropTypes.bool,
	restart:PropTypes.bool
}


/*container*/
const mapStateToProps = state => {
	const{ cardsCompleted } = state
	return{

		restart:cardsCompleted.restart,
		showConfirm:cardsCompleted.showConfirm
	}
	
}

const mapDispatchToProps = (dispatch) =>({
  options(options){
  	dispatch(theEndOfGame(options))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CSSModules(Confirm,styles))
