function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
   
  $("#validate-email").on("click", function(){
    var result = $(".subscribe-result");
    var email = $("#email").val();
    result.text("");
  
    if (validateEmail(email)) {
      $('.modal').addClass('modal-on');
      $(".modal .email")[0].value = email;
    } else {
      result.text("Email is not valid");
      result.css("color", "#cd4800");
    }
    return false;
  });