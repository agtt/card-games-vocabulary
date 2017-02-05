import vocabulary from '../../config/vocabulary'

var numberOfCard = vocabulary.length*2

export const backgroundColor = new Array(numberOfCard).fill(false)
export const testBackgroundColor = new Array(numberOfCard).fill(true).toString()
export const isSelected = new Array(numberOfCard).fill(false)
export const mould = new Array(numberOfCard).fill(false)
export const wrongWords = new Set()