function createUser(){
    alert("createUser");
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: getUserBody()
      };

      fetch('http://localhost:8000/api/v1/users', options)
        .then(response => response.json())
        .then(response => {
            if(response.status === 201){
                console.log(response);
                alert("User created");
                window.location.href = "admin.html";
            }else{
                alert("User not created");
            }
        })
        .catch(err => console.error(err));
}


function getUserBody(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let  password = document.getElementById('password').value;

    console.log(firstName, lastName, age, email, password);
    return JSON.stringify({
        firstName,
        lastName,
        age,
        email,
        password
    });
}