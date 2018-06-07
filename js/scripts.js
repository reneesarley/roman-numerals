// business logic

function toRoman(number) {

  var numbers = number.toString().split('')
  var thousand = ""
  var hundred = ""
  var ten = ""
  var one = ""
  var firstArray = []
  var finalNumber = ''

  if (number < 10) {
    one = 'I'.repeat(number)
    firstArray = [one]
    alert(firstArray)
  } else if (number < 100) {
    ten = 'X'.repeat(parseInt(numbers[0]))
    one = 'I'.repeat(parseInt(numbers[1]))
    firstArray = [ten, one]
    alert(firstArray)
  } else if (number >= 100 && number < 1000) {
    hundred = 'C'.repeat(parseInt(numbers[0]))
    ten = 'X'.repeat(parseInt(numbers[1]))
    one = 'I'.repeat(parseInt(numbers[2]))
    firstArray = [hundred, ten, one]
    alert(firstArray)
  } else if (number >= 1000 || number < 3999) {
    thousand = 'M'.repeat(parseInt(numbers[0]))
    hundred = 'C'.repeat(parseInt(numbers[1]))
    ten = 'X'.repeat(parseInt(numbers[2]))
    one = 'I'.repeat(parseInt(numbers[3]))
    firstArray = [thousand, hundred, ten, one]
    alert(firstArray)
  } else {
    alert("Please enter a number.")
  }
    // firstArray = firstArray.split('')

  for (i = 0; i < firstArray.length; i++) {
    var stringPositionIIIII = (firstArray[i]).search("IIIII")
    if(stringPositionIIIII >= 0){
      newElement = firstArray[i].replace('IIIII', 'V')
      firstArray.splice(i,1,newElement);
      alert("our element is now this:" + newElement);

    } else {
      alert("this is not working");
    }

    var stringPositionIIII = (firstArray[i]).search("IIII")
    if(stringPositionIIII >= 0){
      newElement = firstArray[i].replace('IIII', 'IV')
      firstArray.splice(i,1,newElement);
      alert("our element is now this:" + newElement);

    var stringPositionXXXX = (firstArray[i]).search("XXXX")
    if(stringPositionIIIII >= 0){
      newElement = firstArray[i].replace('XXXX', 'XL')
      firstArray.splice(i,1,newElement);
      alert("our element is now this:" + newElement);

    } else {
      alert("this is not working");
    }




  }
    finalNumber = firstArray.join('')
    alert(finalNumber)
    return
}

// user logic
