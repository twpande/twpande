let hangmanCount = 6;
let word = ["T","w","I", "S", "H", "A"]
let element = document.getElementById("btn")

element.addEventListener("click", buttonClick);

function buttonClick(){
  let input = document.getElementById("inp")
  let value = input.value 
  console.log(input) 
  console.log(value)
  if (word.includes(value.toUpperCase())){
    console.log(word)
  }
  else{
    hangmanCount -= 1;
    console.log(hangmanCount)
  }
}


console.log(hangmanCount)


