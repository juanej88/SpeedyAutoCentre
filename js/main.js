//This function adds an animation to the nav when the website is scrolled by
//20% of the window height.

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

//This function shows and hides the phone and location information displayed
//when clicking the respective nav icons.

const hidePhone = () => {
   $(document).mouseup(e => {
       if (!$('#phoneIcon').is(e.target)) {
         $('#getPhone').addClass('hideInformation');
         $('#phoneIcon').removeClass('hoverOnHold');
      } else {
         $('#getPhone').removeClass('hideInformation');
         $('#phoneIcon').addClass('hoverOnHold');
      }
   });
};

hidePhone();
