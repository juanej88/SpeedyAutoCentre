const typingPhone = () => {

   const phoneNumber = '0296 821 772';
   const blank = '';

   $('#callUs').mouseenter( () => {
      $('#phoneNumber').html(phoneNumber);
   });

   $('#callUs').mouseleave( () => {
      $('#phoneNumber').html(blank);
   });

};

typingPhone();

const navAnimation = () => {

     $(window).scroll(() => {

        const windowPosition = $(window).scrollTop();
        let $firstSection = $('#firstSection').height();
        let transitionHeight = $firstSection * 0.20;

        if (windowPosition < transitionHeight) {
           $('#header').removeClass('showNav');
           $('#header').addClass('hideNav');
        } else if (windowPosition >= transitionHeight) {
           $('#header').addClass('showNav');
           $('#header').removeClass('hideNav');
        }
     });
  };

navAnimation();
