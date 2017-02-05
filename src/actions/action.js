import { testBackgroundColor} from '../reducers/initialVariables'


export const CARD_SELECTED = 'CARD_SELECTED'
export const CARD_COLORCHANGE = 'CARD_COLORCHANGE'
export const CARD_COMPLETED = 'CARD_COMPLETED'
export const YES_NO = 'YES_NO'
export const FIRST = 'FIRST'
export const SECOND = 'SECOND'

export const theEndOfGame = (options) => ({
	type:YES_NO,
	options
})
export const transitionThird = () => ({
	type:CARD_COMPLETED,
	
})
export const transitionFirst = (index,id) => ({
	type:CARD_SELECTED,
	index,
	id
})
export const transitionSecond = (index,id) => ({
	type:CARD_COLORCHANGE,
	index,
	id
})


export const asynCardTransition = (index,id,backgroundColor) => dispatch =>{

	dispatch(transitionFirst(index,id))

	setTimeout(function(){
		dispatch(transitionSecond(index,id))
	},30)

	if (backgroundColor.toString()===testBackgroundColor) {
		setTimeout(function(){
		dispatch(transitionThird())
		},1000)
	}

}

