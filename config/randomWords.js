
import vocabulary from './vocabulary'

function w(value,index){

	return {
		id:index,
		item:value.word
	}
}

function m(value,index){
	return {
		id:index,
		item:value.meaning
	}
}

function wm(value,index){
	return {
		id:index,
		word:value.word,
		meaning:value.meaning
	}
}

var word = vocabulary.map(w)
var	meaning =vocabulary.map(m)
var v = [...word,...meaning]

// console.log(v)
export var allWords = vocabulary.map(wm)

function createRandomCards(array){
  let newArray = array.slice(0)
  for(let i = newArray.length; i>0; i--){
      let rank = Math.floor(Math.random()*i)
      let temp = newArray[i-1]
      newArray[i-1] = newArray[rank]
      newArray[rank] = temp
  }
  return newArray
}


export default createRandomCards(v)