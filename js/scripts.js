// business logic

function toRoman(number) {

  var numbers = number.toString().split('')
  var thousand = ""
  var hundred = ""
  var ten = ""
  var one = ""
  var firstArray = []
  var finalNumber = ''

// Conditions for determining what kind / how big the number is

  if (number < 10) {
    one = 'I'.repeat(number)
    firstArray = [one]
    // alert(firstArray)
  } else if (number < 100) {
    ten = 'X'.repeat(parseInt(numbers[0]))
    one = 'I'.repeat(parseInt(numbers[1]))
    firstArray = [ten, one]
    // alert(firstArray)
  } else if (number >= 100 && number < 1000) {
    hundred = 'C'.repeat(parseInt(numbers[0]))
    ten = 'X'.repeat(parseInt(numbers[1]))
    one = 'I'.repeat(parseInt(numbers[2]))
    firstArray = [hundred, ten, one]
    // alert(firstArray)
  } else if (number >= 1000 && number < 3999) {
    thousand = 'M'.repeat(parseInt(numbers[0]))
    hundred = 'C'.repeat(parseInt(numbers[1]))
    ten = 'X'.repeat(parseInt(numbers[2]))
    one = 'I'.repeat(parseInt(numbers[3]))
    firstArray = [thousand, hundred, ten, one]
    // alert(firstArray)
  } else {
    alert("Please enter a number less than 4000.")
    return
  }

// Loop for converting the number into roman numerals

  for (i = 0; i < firstArray.length; i++) {
    var stringPositionIIIII = (firstArray[i]).search("IIIII")
    if(stringPositionIIIII >= 0){
      newElement = firstArray[i].replace('IIIII', 'V')
      firstArray.splice(i,1,newElement);
      // alert("our element is now this: " + newElement);

    } else {
      console.log("passed")
    }

    var stringPositionIIII = (firstArray[i]).search("IIII")
    if(stringPositionIIII >= 0){
      newElement = firstArray[i].replace('IIII', 'IV')
      firstArray.splice(i,1,newElement);
      // alert("our element is now this: " + newElement);

    } else {
      console.log("passed")
    }

    var stringPositionXXXXX = (firstArray[i]).search("XXXXX")
    if(stringPositionXXXXX >= 0){
      newElement = firstArray[i].replace('XXXXX', 'L')
      firstArray.splice(i,1,newElement);
      // alert("our element is now this: " + newElement);

    } else {
      console.log("passed")
    }
    var stringPositionXXXX = (firstArray[i]).search("XXXX")
    if(stringPositionXXXX >= 0){
      newElement = firstArray[i].replace('XXXX', 'XL')
      firstArray.splice(i,1,newElement);
      alert("our element is now this: " + newElement);

    } else {
      console.log("passed")
    }
    var stringPositionCCCCC = (firstArray[i]).search("CCCCC")
    if(stringPositionCCCCC >= 0){
      newElement = firstArray[i].replace('CCCCC', 'D')
      firstArray.splice(i,1,newElement);
      // alert("our element is now this: " + newElement);

    } else {
      console.log("passed")
    }
    var stringPositionCCCC = (firstArray[i]).search("CCCC")
    if(stringPositionCCCC >= 0){
      newElement = firstArray[i].replace('CCCC', 'CD')
      firstArray.splice(i,1,newElement);
      // alert("our element is now this: " + newElement);

    } else {
      console.log("passed")
    }
  }
  finalNumber = firstArray.join('')
  alert(finalNumber)
  return
}


// user logic

$(document).ready(function() {

  $('#ogNumber').submit(function(event) {
    event.preventDefault();

    var ogNumber = $('input#ogNumber').val();
    // alert(ogNumber);

    toRoman(ogNumber);

  })
})
