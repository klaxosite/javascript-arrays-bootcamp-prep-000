var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array , element){
  new = [element, ...array]
  return new;

}

function destructivelyAddElementToBeginningOfArray(array, element){
  n = array.unshift(element);
  return n;
}

function addElementToEndOfArray(array, element){
  new = [...array, element]
  return new;
}

function destructivelyAddElementToEndOfArray(array, element){
  n = array.push(element)
  return n;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}
