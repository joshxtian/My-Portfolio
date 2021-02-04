$(document).ready(function(){
    $('.about2__bottom').waypoint(function(direction){
        if(direction == "down"){
          $('nav').addClass('nav__sticky');
        }
        else{
          $('nav').removeClass('nav__sticky');
        }
      },{
          offset:"-29.600px"
      });
});