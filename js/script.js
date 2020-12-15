/* hides the sign in error message */
$(document).ready(function () { 
    $('#signInError').hide(); 
});
localStorage.removeItem('User');
/* Ajax to login to website [home.php]*/
  $(function(){
    $("#submit1").click(function(){
      var email = $("#inputEmail").val().trim();
      var pass = $("#inputPassword").val().trim();
      var msg= "";
      if(email != "" && pass != ""){
        $.post("./config/ajax_queries/user_validation.php",{email:email,pass:pass}).done(function(response){
          if(response == "success")
            {
             window.location = "home.php";
             msg = "";
            }else{
              msg = "Invalid username and password";
            }
            $("#signInError").html(msg);
            $('#signInError').show();
        });
      }
    });
  });