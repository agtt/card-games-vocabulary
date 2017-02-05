import React, { PropTypes } from 'react'

import CSSModules from 'react-css-modules'
import styles from '../css/Card.css'

class Card extends React.Component{
	
	render(){
		const { transition, onClick, word} = this.props
		return(
		<div >
			<div styleName={ transition.backgroundColor===true?transition.isSelected===true?'colorG':'colorR':'colorB'}  onClick={onClick}>
				<div styleName='stableSize'><p>{word.item}</p></div>
			</div>
			{/*<div className={  isCh===true?`back back2`:`back back1`} >
				{word.item	}
			</div>*/}
		</div>
		)
	}
}

Card.propTypes = {
	transition:PropTypes.object.isRequired,
	onClick:PropTypes.func.isRequired,
	word:PropTypes.object.isRequired
}
export default CSSModules(Card,styles)