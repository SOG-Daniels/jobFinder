//display more info expansion
$('.info').click(function(e){
alert('test');
let parent = e.target.closest('.card').cloneNode(true);
let childNode = parent.childNodes;
childNode = childNode[5];
parent.removeChild(childNode);
parent.childNodes[1].classList.add('font-large');
parent.childNodes[3].classList.add('font-medium');
console.log(parent.childNodes);
parent.classList.add('alertBox');
Swal.fire({
    html: parent,
    width: '500px'
});
});


//Signin page - sign user in
$('#submit').on('click',function(){
    let email = document.getElementById('inputEmail').value;
    let pass = document.getElementById('inputPassword').value;

    let sys = new System(null);
    let user = sys.getUser(email,pass);
    if(user == null)
    {
      $('#signInError').html("Invalid credentials! Please try again.");
      $('#signInError').show();
    }
    else{
        localStorage.setItem('SystemObjectData',JSON.stringify(sys));
        location.assign("home.html");
    }
  });

//signup page add new user
$('#register').on('click',function(){
    let name = $('#inputName').val();
    let email = $('#inputEmail').val();
    let pass = $('#inputPassword').val();
    let verifyPass = $('#inputVerify').val();
    console.log(localStorage.getItem('SystemObjectData'));
    let sys = JSON.parse(localStorage.getItem('SystemObjectData'));

    sys = new System(sys);
    console.log(sys);
    if(sys.nameExist(name))
    {
      $('#signInError').html('User already exist! Please choose another name.');
      $('#signInError').show();
      return;
    }
    if(pass != verifyPass)
    {
      $('#signInError').html('Password does not match! Please try again.');
      $('#signInError').show();
      return;
    }
    let newUser = [sys.getNumberOfUsers(),name,email,pass];
    sys.addNewUser(newUser);
    localStorage.setItem('SystemObjectData',JSON.stringify(sys));
    let user = sys.getUser(email,pass);
    localStorage.setItem('User',JSON.stringify(user));
    location.assign("home.html");

});
