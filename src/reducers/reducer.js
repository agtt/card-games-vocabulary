import { combineReducers } from 'redux'

import { backgroundColor, isSelected, wrongWords } from './initialVariables'

import { 
		FIRST, SECOND, 
		CARD_SELECTED , 
		CARD_COLORCHANGE,
		CARD_COMPLETED,
		YES_NO
		} from '../actions/action'


var frequency = 0
var progress = 0

function computeState(state,action,direction){
	
	switch(direction){
		case FIRST:
			
			state.backgroundColor[action.index] = true
			state.isSelected[action.index] = true
			frequency+=1
			return {
					backgroundColor:state.backgroundColor,
					isSelected:state.isSelected,
					active:{
						before:state.active.now,
						now:action.index
					},
					cardId:{
						before:state.cardId.now,
						now:action.id
					},
					wrongWords:[...state.wrongWords],
					frequency,
					progress
					
				}
		case SECOND:
		if (state.cardId.now!==undefined) {

			if (state.cardId.before===state.cardId.now) {
				state.isSelected[state.active.now] = false
				state.isSelected[state.active.before] = false
				progress+=2
				return {
					backgroundColor:state.backgroundColor,
					isSelected:state.isSelected,
					active:{},
					cardId:{},
					wrongWords:[...state.wrongWords],
					frequency,
					progress
					
					}
						
			}else{
				
				state.backgroundColor[state.active.before] = false
				state.isSelected[state.active.before] = false
				return{
					backgroundColor:state.backgroundColor,
					isSelected:state.isSelected,
					active:{
						now:action.index
					},
					cardId:{
						now:action.id
					},
					wrongWords:wrongWords.add(state.cardId.before),
					frequency,
					progress
				}
			}
		}else{
			return state
		}
			
			
		default:
			return backgroundColor
	}

	
}



const cardsAndBoradState = (state=
		{
			backgroundColor,
			isSelected,
			active:{},
			cardId:{},
			wrongWords:wrongWords,
			frequency,
			progress
		}
,action) => {

	switch(action.type){
		case CARD_SELECTED :
			return computeState(state,action,FIRST)	
		
		case CARD_COLORCHANGE:
			return computeState(state,action,SECOND)		

		default:
			return state
	}
}

const cardsCompleted = (state={ completion:false},action)=>{
	switch(action.type){
		case CARD_COMPLETED:
			return {
				completion:true
			}
		case YES_NO:
			switch(action.options){
				case 'YES':
					return{
						...state,
						showConfirm:false,
						restart:true
				}
				case 'NO':
					return{
						...state,
						showConfirm:false,
						restart:false
					}
				default:
					return state
			}
		default:
			return state
	}
}



const gameReducer = combineReducers({
	cardsAndBoradState ,
	cardsCompleted
})

export default gameReducer