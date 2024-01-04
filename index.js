function outcome() {
  let num1 = Number(document.getElementById('num-one').value)  
  let num2 = Number(document.getElementById('num-two').value)
  let total = 0

  if (document.getElementById('plus').checked) 
    total = num1 + num2

  else if(document.getElementById('minus').checked)
    total = num1 - num2

  else if(document.getElementById('multiplication').checked)
      total = num1 * num2

  else
    total = num1 / num2
     
  document.getElementById("resultArea").innerHTML = 'Result: ' + String(total)
}
 


 
  
