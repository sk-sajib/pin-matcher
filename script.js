 // FUNCTIONALITY FOR PIN GENRATOR
   function pinGenerate(){
    const InputPin = document.getElementById('display-generate-input')
    randomInputValue = InputPin.value = Math.floor(1000 + Math.random() * 9000 )
    return randomInputValue   
}

document.getElementById('pin-generate').addEventListener('click', function(){
  randomPin = pinGenerate()
  
    getPinInput.value = ' '
    document.getElementById('success').style.display = 'none'
    document.getElementById('warning').style.display = 'none'
   
})

// FUNCTIONALITY FOR PIN MATCHES

const getPinInput = document.getElementById('input-value')

function pushBtn(num){
    const pushed = num.innerHTML;

    if(pushed == 'C'){
        getPinInput.value = ' '
    } else if( pushed == '✁'){
        getPinInput.value = getPinInput.value.slice(0, -1)
    } else{
     inputPinValue = getPinInput.value += pushed
      
   }
   
}

 document.getElementById('pinSubmitToCheck').addEventListener('click', function() {
  const inputPinValueNumber = parseInt(inputPinValue)

  if(randomPin === inputPinValueNumber){
      document.getElementById('success').style.display = 'block'
  } else{
    document.getElementById('warning').style.display = 'block'
  }

})