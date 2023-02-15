document.getElementById('deposite-btn').addEventListener('click' , function(){
  const depositeInputField =  document.getElementById('deposite-input-field');
  const depositeInputFieldValue = parseFloat(depositeInputField.value);
  const depositePrevious =  document.getElementById('deposite-previous');
  const depositePreviousValue = parseFloat(depositePrevious.innerText);
  const totalDepositeValue = depositeInputFieldValue + depositePreviousValue ;
  if(isNaN(totalDepositeValue) === true){
    alert('please enter a valid value of number');
  }
  else{
    depositePrevious.innerText = totalDepositeValue ;
    const balnacePrevious =  document.getElementById('balance-previous');
    const balnacePreviousValue = parseFloat(balnacePrevious.innerText);
    const totalBalanceValue = balnacePreviousValue + depositeInputFieldValue ;
    balnacePrevious.innerText = totalBalanceValue ;  
  }
  depositeInputField.value = '' ;
})

document.getElementById('withdraw-btn').addEventListener('click' , function(){
   const withdrawInputField = document.getElementById('withdraw-input-field');
   const withdrawInputFieldValue = parseFloat(withdrawInputField.value);
   if(isNaN(withdrawInputFieldValue) === true){
    alert('please enter a valid value of number');
   }
   else{
    const balnacePrevious =  document.getElementById('balance-previous');
    const balnacePreviousValue = parseFloat(balnacePrevious.innerText);
    const totalBalanceValue = balnacePreviousValue - withdrawInputFieldValue ;
    if(withdrawInputFieldValue > balnacePreviousValue){
     alert('you can not withdraw becouse you balance too low than your amount');
    }
    else{
     balnacePrevious.innerText = totalBalanceValue ;
     const withdrawPrevious = document.getElementById('withdraw-previous');
     const withdrawPreviousValue = parseFloat(withdrawPrevious.innerText);
     const withdrawPreviousNew = withdrawPreviousValue + withdrawInputFieldValue ;
     withdrawPrevious.innerText = withdrawPreviousNew ;
    
    }
   }
   withdrawInputField.value = '' ;

})