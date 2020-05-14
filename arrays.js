var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array , element){
  nk = [element, ...array]
  return nk

}

function destructivelyAddElementToBeginningOfArray(array, element){
  n = array.unshift(element)
  return n
}

function addElementToEndOfArray(array, element){
  ne = [...array, element]
  return ne
}

function destructivelyAddElementToEndOfArray(array, element){
  n = array.push(element)
  return n
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  va = array.slice(1);
  return va
}