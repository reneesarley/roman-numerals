// business logic

function toRoman(number) {

  var numbers = number.toString().split('');

  if (number < 10) {
    return 'I'.repeat(number)
  } else if (number < 100) {
    return 'X'.repeat(parseInt(numbers[0]))
  } else if (number > 100 && number < 1000) {
    return 'C'.repeat(parseInt(numbers[0]))
  } else if (number >= 1000 || number < 3999) {
    return 'M'.repeat(parseInt(numbers[0]))
  } else {
    alert("Please enter a number.")
    return
  }
  alert(numbers)
}


// user logic
