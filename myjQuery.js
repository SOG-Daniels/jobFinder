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
//signin page - sign user in
$('#submit').on('click',function(){
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;

    var sys = new System();
    var user = sys.getUser(email,pass);
    if(user == null)
    {
      $('#signInError').html("Invalid credentials! Please try again.");
      $('#signInError').show();
    }
    else{
      location.assign("home.html");
      return false;
    }
  });
