function iterativeLog(array) {
  array.forEach(thisTest)
}

function thisTest(element, index, array){
  console.log(`${index}: ${element}`)
}


function iterate(somethingElse) {
  let array = ["rose", "cab", "pinot", "merlot"]
  array.forEach(somethingElse)
  return array
}

function somethingElse(element) {
  return element
}

function doToArray(array, anotherFunction) {
  array.forEach(anotherFunction)
}

// function anotherFunction(){
//
// }
