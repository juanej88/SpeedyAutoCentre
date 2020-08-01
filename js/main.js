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
//when hovering the respective nav icons.

const hideInfoBoxes = () => {

   $('#locationIcon').mouseover(() => {
      $('#getLocation').removeClass('hideInformation');
      $('#locationIcon').addClass('hoverOnHold');
   });

   $('#locationIcon').mouseleave(() => {
      $('#getLocation').addClass('hideInformation');
      $('#locationIcon').removeClass('hoverOnHold');
   });

   $('#phoneIcon').mouseover(() => {
      $('#getPhone').removeClass('hideInformation');
      $('#phoneIcon').addClass('hoverOnHold');
   });

   $('#phoneIcon').mouseleave(() => {
      $('#getPhone').addClass('hideInformation');
      $('#phoneIcon').removeClass('hoverOnHold');
   });

   //This function shows and hides the phone and location information displayed
   //when clicking the respective nav icons.

   // $(document).mouseup(e => {
   //     if ($('#locationIcon').is(e.target) || $('#getDirectionsButton').is(e.target)) {
   //       $('#getLocation').removeClass('hideInformation');
   //       $('#locationIcon').addClass('hoverOnHold');
   //    } else {
   //       $('#getLocation').addClass('hideInformation');
   //       $('#locationIcon').removeClass('hoverOnHold');
   //    }
   // });
   //
   // $(document).mouseup(e => {
   //     if ($('#phoneIcon').is(e.target) || $('#callUsButton').is(e.target)) {
   //       $('#getPhone').removeClass('hideInformation');
   //       $('#phoneIcon').addClass('hoverOnHold');
   //    } else {
   //       $('#getPhone').addClass('hideInformation');
   //       $('#phoneIcon').removeClass('hoverOnHold');
   //    }
   // });
};

hideInfoBoxes();
