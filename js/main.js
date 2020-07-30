const typingPhone = () => {

   const phoneNumber = '02 9682 1772';
   const blank = '';

   $('#phoneIcon').mouseenter( () => {
      $('#phoneNumber').html(phoneNumber);
   });

   $('#phoneIcon').mouseleave( () => {
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
