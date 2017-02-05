import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { theEndOfGame } from '../actions/action'
import CardsBoard from '../container/CardTransition'
import ScoreBoard from './ScoreBoard'

import CSSModules from 'react-css-modules'
import styles from '../css/CountDown.css'

class CountDown extends React.Component{
	constructor(){
		super()
		this.state = {

			countDown:7
		}
	}
	componentDidMount() {

		var count = setInterval(()=>{
			if (this.state.countDown>0) {
				this.setState({
					countDown:this.state.countDown-1
				})	
			}else{
				clearInterval(count)
				}
			},1000)	
	}
	render(){
		const { countDown } = this.state
		return(
			<div>
				{
					countDown === 0?<div><ScoreBoard/><CardsBoard /></div>:
					<div>
						<div styleName = 'countDownContainer'>
							<div styleName = 'countDown'>
								<h1>The Game Will Start In</h1>
								<div styleName = 'timer'>
									<h1>{countDown}</h1>
									<p>s</p>
								</div>
							</div>
						</div>
						<ScoreBoard/>
						<CardsBoard />
					</div>
				}
			</div>
		)
	}
}



export default CSSModules(CountDown,styles)