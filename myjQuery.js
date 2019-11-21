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
//create post alert

var user = new User("fehr");
var sys = new System(user);
