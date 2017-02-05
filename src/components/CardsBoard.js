import React, { PropTypes } from 'react'


import Card from './Card'

import words from '../../config/randomWords'

import { asynCardTransition } from '../actions/action'

import CSSModules from 'react-css-modules'
import styles from '../css/CardsBoard.css'

class CardsBoard extends React.Component{

	click=(index,id)=>{
		const{ dispatch, backgroundColor } = this.props
		if (this.props['isChange'+index].backgroundColor===true) {
			return
		}
		 dispatch(asynCardTransition(index,id,backgroundColor))
		
	}
	render(){

		return(
		<div styleName='cardsContainer'>
				{words.map((item,index)=>
					<div key={index} styleName='cardsWrapper' >
						<Card word={item} 
						transition = {this.props['isChange'+index]}
						onClick={()=>this.click(index,item.id)}
						/>
					</div>
				)}
		</div>
		)
	}
}



export default CSSModules(CardsBoard,styles)