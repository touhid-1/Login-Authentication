document.getElementById('login-btn').addEventListener('click', function(){

    let id = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (id == ""){
        document.getElementById('error1').innerHTML = 'Email is required.';
    }
    else if (pass == ""){
        document.getElementById('error1').innerHTML = 'Password is required.';
    }
    else{
        alert('Submitted')
    }
});
