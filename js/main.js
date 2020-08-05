//This function adds an animation to the nav when the website is scrolled by
//20% of the window height.

const navAnimation = () => {

  $(window).scroll(() => {

     const windowPosition = $(window).scrollTop();
     let $firstSection = $(window).height();
     let homeHeight = $firstSection * 0.2;
     let bookingHeight = $firstSection * 0.25;

     if (windowPosition < homeHeight) {
        $('#homeHeader').removeClass('showNav');
        $('#homeHeader').addClass('hideNav');
     } else if (windowPosition >= homeHeight) {
        $('#homeHeader').addClass('showNav');
        $('#homeHeader').removeClass('hideNav');
     }

     if (windowPosition < bookingHeight) {
        $('#bookingHeader').removeClass('showBookingNav');
        $('#bookingHeader').addClass('hideBookingNav');
     } else if (windowPosition >= bookingHeight) {
        $('#bookingHeader').addClass('showBookingNav');
        $('#bookingHeader').removeClass('hideBookingNav');
     }
  });
};

navAnimation();

//This function shows and hides the phone and location information displayed
//when hovering the respective nav icons.

const hideInfoBoxes = () => {

   $('#locationIcon').mouseover(() => {
      $('#getLocation').removeClass('hideInformation');
   });

   $('#locationIcon').mouseleave(() => {
      $('#getLocation').addClass('hideInformation');
   });

   $('#phoneIcon').mouseover(() => {
      $('#getPhone').removeClass('hideInformation');
   });

   $('#phoneIcon').mouseleave(() => {
      $('#getPhone').addClass('hideInformation');
   });

   //This section hides the .infoBox for any touchcreen device

   $(document).mouseup(e => {
       if (!$('#locationIcon').is(e.target) || !$('#getDirectionsButton').is(e.target)) {
          $('#getLocation').addClass('hideInformation');
      };
   });

   $(document).mouseup(e => {
       if (!$('#phoneIcon').is(e.target) || !$('#callUsButton').is(e.target)) {
          $('#getPhone').addClass('hideInformation');
      };
   });
};

hideInfoBoxes();

// This function adds the class .weekendColour to the word "Closed" on Sundays

const closedColour = () => {
   let actualDate = new Date();
   let actualDay = actualDate.getDay();

   if (actualDay === 0) {
      $('.closedToday').addClass('weekendColour');
   };
};

closedColour();

// This function changes the copyright year on the footer accordingly to
// the actual year

const changeCopyrightYear = () => {
   let actualDate = new Date();
   let actualYear = actualDate.getFullYear();

   $('.thisYear').html(actualYear);
};

changeCopyrightYear();

// This function shows and hides the booking header 1 when scrolling

const bookingheaderAnimation = () => {

  $(window).scroll(() => {

     const $windowPosition = $(window).scrollTop();
     let $windowSection = $(window).height();
     let bookingHeight = $windowSection * 0.1;

     if ($windowPosition < bookingHeight) {
        $('.bookingHeader').removeClass('hideBookingHeader');
     } else if ($windowPosition >= bookingHeight) {
        $('.bookingHeader').addClass('hideBookingHeader');
     }
  });
};

bookingheaderAnimation();
