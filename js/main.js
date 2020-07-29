const typingPhone = () => {

   const phoneNumber = "0296 821 772";
   const blank = '';

   $('#callUs').mouseenter( () => {
      $('#phoneNumber').html(phoneNumber);
   });

   $('#callUs').mouseleave( () => {
      $('#phoneNumber').html(blank);
   });

};

typingPhone();
