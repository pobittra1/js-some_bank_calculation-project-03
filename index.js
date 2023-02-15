document.getElementById('login-btn').addEventListener('click' , function(){
    const emailInput = document.getElementById('email-input');
    const passInput = emailInput.nextElementSibling;
    if(emailInput.value === "pobiN@gmail.com" && passInput.value === "NPOBI"){
        window.location.href = 'bank.html' ;
    }
    else{
        alert("please enter a valid email or password");
        emailInput.value = '' ;
        passInput.value = '' ;
    }
 
})