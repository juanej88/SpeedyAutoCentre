//This function adds an animation to the nav when the website is scrolled by
//20% of the window height.

const navAnimation = () => {
  $(window).scroll(() => {
    const windowPosition = $(window).scrollTop();
    let $firstSection = $(window).height();
    let homeHeight = $firstSection * 0.2;
    let bookingHeight = $firstSection * 0.25;

    if (windowPosition < homeHeight) {
      $("#homeHeader").removeClass("showNav");
      $("#homeHeader").addClass("hideNav");
    } else if (windowPosition >= homeHeight) {
      $("#homeHeader").addClass("showNav");
      $("#homeHeader").removeClass("hideNav");
    }

    if (windowPosition < bookingHeight) {
      $("#bookingHeader").removeClass("showBookingNav");
      $("#bookingHeader").addClass("hideBookingNav");
    } else if (windowPosition >= bookingHeight) {
      $("#bookingHeader").addClass("showBookingNav");
      $("#bookingHeader").removeClass("hideBookingNav");
    }
  });
};

navAnimation();

const animateMenuIcon = () => {
  $(".menuBars").on("click", () => {
    if ($(".menuBars").hasClass("open")) {
      $(".menuBars").removeClass("open");
      $(".menuBars").addClass("rotateBarsOpen");
      $(".firstLine").addClass("firstLineOpen");
      $(".secondLine").addClass("secondLineOpen");
      $(".thirdLine").addClass("thirdLineOpen");
      $(".menuBars").removeClass("rotateBarsClose");
      $(".firstLine").removeClass("firstLineClose");
      $(".secondLine").removeClass("secondLineClose");
      $(".thirdLine").removeClass("thirdLineClose");
    } else {
      $(".menuBars").addClass("open");
      $(".menuBars").removeClass("rotateBarsOpen");
      $(".firstLine").removeClass("firstLineOpen");
      $(".secondLine").removeClass("secondLineOpen");
      $(".thirdLine").removeClass("thirdLineOpen");
      $(".menuBars").addClass("rotateBarsClose");
      $(".firstLine").addClass("firstLineClose");
      $(".secondLine").addClass("secondLineClose");
      $(".thirdLine").addClass("thirdLineClose");
    }
  });
};

animateMenuIcon();

//This function shows and hides the phone and location information displayed
//when hovering the respective nav icons.

const hideInfoBoxes = () => {
  $("#locationIcon").mouseover(() => {
    $("#getLocation").removeClass("hideInformation");
  });

  $("#locationIcon").mouseleave(() => {
    $("#getLocation").addClass("hideInformation");
  });

  $("#phoneIcon").mouseover(() => {
    $("#getPhone").removeClass("hideInformation");
  });

  $("#phoneIcon").mouseleave(() => {
    $("#getPhone").addClass("hideInformation");
  });

  //This section hides the .infoBox for any touchcreen device

  $(document).mouseup((e) => {
    if (
      !$("#locationIcon").is(e.target) ||
      !$("#getDirectionsButton").is(e.target)
    ) {
      $("#getLocation").addClass("hideInformation");
    }
  });

  $(document).mouseup((e) => {
    if (!$("#phoneIcon").is(e.target) || !$("#callUsButton").is(e.target)) {
      $("#getPhone").addClass("hideInformation");
    }
  });
};

hideInfoBoxes();

// This function adds the class .weekendColour to the word "Closed" on Sundays

const closedColour = () => {
  const actualDate = new Date();
  const actualDay = actualDate.getDay();

  if (actualDay === 0) {
    $(".closedToday").addClass("weekendColour");
  }
};

closedColour();

// This function changes the copyright year on the footer accordingly to
// the actual year

const changeCopyrightYear = () => {
  const actualDate = new Date();
  const actualYear = actualDate.getFullYear();

  $(".thisYear").html(actualYear);
};

changeCopyrightYear();

// This function shows and hides the booking header 1 when scrolling

const bookingheaderAnimation = () => {
  $(window).scroll(() => {
    const $windowPosition = $(window).scrollTop();
    let $windowSection = $(window).height();
    let bookingHeight = $windowSection * 0.06;

    if ($windowPosition < bookingHeight) {
      $(".bookingHeader").removeClass("hideBookingHeader");
    } else if ($windowPosition >= bookingHeight) {
      $(".bookingHeader").addClass("hideBookingHeader");
    }
  });
};

bookingheaderAnimation();

// It gives a class .selectedBox to any selected checkboxes
const outstandCheckbox = () => {
  $("#bluePinkSlip").on("click", () => {
    $("#bluePinkSlipBox").toggleClass("selectedBox");

    if ($("#bluePinkSlip").is(":checked")) {
      $("#bluePinkSlipCircle").addClass("selectedCircle");
    } else {
      $("#bluePinkSlipCircle").removeClass("selectedCircle");
    }
  });
  $("#bluePinkSlip").on("focusin", () => {
    $("#bluePinkSlipBox").addClass("focusBlueBorder");
  });
  $("#bluePinkSlip").on("focusout", () => {
    $("#bluePinkSlipBox").removeClass("focusBlueBorder");
  });

  $("#engineService").on("click", () => {
    $("#engineServiceBox").toggleClass("selectedBox");
    if ($("#engineService").is(":checked")) {
      $("#engineServiceCircle").addClass("selectedCircle");
    } else {
      $("#engineServiceCircle").removeClass("selectedCircle");
    }
  });
  $("#engineService").on("focusin", () => {
    $("#engineServiceBox").addClass("focusBlueBorder");
  });
  $("#engineService").on("focusout", () => {
    $("#engineServiceBox").removeClass("focusBlueBorder");
  });

  $("#safetyInspections").on("click", () => {
    $("#safetyInspectionsBox").toggleClass("selectedBox");
    if ($("#safetyInspections").is(":checked")) {
      $("#safetyInspectionsCircle").addClass("selectedCircle");
    } else {
      $("#safetyInspectionsCircle").removeClass("selectedCircle");
    }
  });
  $("#safetyInspections").on("focusin", () => {
    $("#safetyInspectionsBox").addClass("focusBlueBorder");
  });
  $("#safetyInspections").on("focusout", () => {
    $("#safetyInspectionsBox").removeClass("focusBlueBorder");
  });

  $("#tyreBrakeService").on("click", () => {
    $("#tyreBrakeServiceBox").toggleClass("selectedBox");
    if ($("#tyreBrakeService").is(":checked")) {
      $("#tyreBrakeServiceCircle").addClass("selectedCircle");
    } else {
      $("#tyreBrakeServiceCircle").removeClass("selectedCircle");
    }
  });
  $("#tyreBrakeService").on("focusin", () => {
    $("#tyreBrakeServiceBox").addClass("focusBlueBorder");
  });
  $("#tyreBrakeService").on("focusout", () => {
    $("#tyreBrakeServiceBox").removeClass("focusBlueBorder");
  });

  $("#repairs").on("click", () => {
    $("#repairsBox").toggleClass("selectedBox");
    if ($("#repairs").is(":checked")) {
      $("#repairsCircle").addClass("selectedCircle");
    } else {
      $("#repairsCircle").removeClass("selectedCircle");
    }
  });
  $("#repairs").on("focusin", () => {
    $("#repairsBox").addClass("focusBlueBorder");
  });
  $("#repairs").on("focusout", () => {
    $("#repairsBox").removeClass("focusBlueBorder");
  });

  $("#otherService").on("click", () => {
    $("#otherServiceBox").toggleClass("selectedBox");
    if ($("#otherService").is(":checked")) {
      $("#otherServiceCircle").addClass("selectedCircle");
    } else {
      $("#otherServiceCircle").removeClass("selectedCircle");
    }
  });
  $("#otherService").on("focusin", () => {
    $("#otherServiceBox").addClass("focusBlueBorder");
  });
  $("#otherService").on("focusout", () => {
    $("#otherServiceBox").removeClass("focusBlueBorder");
  });
};

outstandCheckbox();

// It shows or hides the comments section depending if the repective
// checkbox is selected
const hideComments = () => {
  $("#otherService").on("click", () => {
    $(".addComments").toggleClass("hideComments");
  });
};

hideComments();
