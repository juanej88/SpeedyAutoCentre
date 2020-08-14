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
    let bookingHeight = $windowSection * 0.1;

    if ($windowPosition < bookingHeight) {
      $(".bookingHeader").removeClass("hideBookingHeader");
    } else if ($windowPosition >= bookingHeight) {
      $(".bookingHeader").addClass("hideBookingHeader");
    }
  });
};

bookingheaderAnimation();

// It restricts and updates the dates available to make a booking

const updateBookingDate = () => {
  const actualDate = new Date();
  const dayOfTheWeek = actualDate.getDay();
  let day = actualDate.getDate();
  let month = actualDate.getMonth() + 1;
  let year = actualDate.getFullYear();

  console.log(dayOfTheWeek);
  console.log(actualDate);
  console.log(`${day}/${month}/${year}`);

  let shortMonth = [4, 6, 9, 11];
  let longMonth = [1, 3, 5, 7, 8, 10, 12];

  // It gives a gap between 2 - 4 days
  // Sunday to Thursday / Friday / Saturday
  if (dayOfTheWeek <= 4) {
    if (month === 2) {
      if (day === 27) {
        day = 1;
        month += 1;
      } else if (day >= 28) {
        day = 2;
        month += 1;
      } else {
        day += 2;
      }
    } else if (shortMonth.includes(month)) {
      if (day === 29) {
        day = 1;
        month += 1;
      } else if (day === 30) {
        day = 2;
        month += 1;
      } else {
        day += 2;
      }
    } else if (longMonth.includes(month)) {
      if (day === 30) {
        day = 1;
        month += 1;
      } else if (day === 31) {
        day = 2;
        month += 1;
      } else {
        day += 2;
      }
    }
  } else if (dayOfTheWeek === 5) {
    if (month === 2) {
      if (day === 26) {
        day = 1;
        month += 1;
      } else if (day === 26) {
        day = 2;
        month += 1;
      } else if (day === 27) {
        day = 3;
        month += 1;
      } else if (day >= 28) {
        day = 4;
        month += 1;
      } else {
        day += 4;
      }
    } else if (shortMonth.includes(month)) {
      if (day === 27) {
        day = 1;
        month += 1;
      } else if (day === 28) {
        day = 2;
        month += 1;
      } else if (day === 29) {
        day = 3;
        month += 1;
      } else if (day === 30) {
        day = 4;
        month += 1;
      } else {
        day += 4;
      }
    } else if (longMonth.includes(month)) {
      if (day === 28) {
        day = 1;
        month += 1;
      } else if (day === 29) {
        day = 2;
        month += 1;
      } else if (day === 30) {
        day = 3;
        month += 1;
      } else if (day === 31) {
        day = 4;
        month += 1;
      } else {
        day += 4;
      }
    }
  } else {
    if (month === 2) {
      if (day === 26) {
        day = 1;
        month += 1;
      } else if (day === 27) {
        day = 2;
        month += 1;
      } else if (day >= 28) {
        day = 3;
        month += 1;
      } else {
        day += 3;
      }
    } else if (shortMonth.includes(month)) {
      if (day === 28) {
        day = 1;
        month += 1;
      } else if (day === 29) {
        day = 2;
        month += 1;
      } else if (day === 30) {
        day = 3;
        month += 1;
      } else {
        day += 3;
      }
    } else if (longMonth.includes(month)) {
      if (day === 29) {
        day = 1;
        month += 1;
      } else if (day === 30) {
        day = 2;
        month += 1;
      } else if (day === 31) {
        day = 3;
        month += 1;
      } else {
        day += 3;
      }
    }
  }

  // It matches the format of the calendar
  if (month < 10) {
    month = "0" + month.toString();
  }

  if (day < 10) {
    day = "0" + day.toString();
  }

  let minDate = year + "-" + month + "-" + day;

  $("#preferredDate").attr("min", minDate);

  console.log(`${day}/${month}/${year}`);
};

updateBookingDate();

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

let app = [
  { first: "AFT", second: "More information" },
  { first: "AFT", second: "More, more information" },
  { first: "CAP", second: "Other information" },
];

console.log(app);

let control;

for (let i = 0; i < app.length; i++) {
  if (app[i].first !== control) {
    console.log(app[i].first);
    control = app[i].first;
  }

  console.log(app[i].second);
}
