// It animates the loading percentage from 0 to 100
const updateLoadingAnimation = () => {
  let percentage = 0;

  let interval = setInterval(() => {
    $(".loadingPercentage").html(percentage);
    if (percentage < 100) {
      percentage += 1;
    }
  }, 8);

  // It stops the percentage growth after 2.5s
  setTimeout(() => {
    clearInterval(interval);
  }, 2500);
};

setTimeout(() => {
  updateLoadingAnimation();
}, 200);

// It removes the loading animation after 1.35s
const removeLoadingAnimation = () => {
  $("#loadingSection").css({ opacity: "1" }).animate({ opacity: "0" }, 150);
  setTimeout(() => {
    $("#loadingSection").remove();
  }, 150);
};

setTimeout(() => {
  removeLoadingAnimation();
}, 1200);

//This function adds an animation to the nav when the website is scrolled by
//20% of the window height.
const navAnimation = () => {
  $(window).scroll(() => {
    const windowPosition = $(window).scrollTop();
    let $firstSection = $(window).height();
    let homeHeight = $firstSection * 0.125;
    let bookingHeight = $firstSection * 0.25;

    if (windowPosition < homeHeight) {
      $("#homeHeader").removeClass("showNav");
      $("#homeHeader").addClass("hideNav");
    } else if (windowPosition >= homeHeight) {
      $("#homeHeader").addClass("showNav");
      $("#homeHeader").removeClass("hideNav");
    }

    if (windowPosition < bookingHeight) {
      $(".whiteHeader").removeClass("showWhiteNav");
      $(".whiteHeader").addClass("hideWhiteNav");
    } else if (windowPosition >= bookingHeight) {
      $(".whiteHeader").addClass("showWhiteNav");
      $(".whiteHeader").removeClass("hideWhiteNav");
    }
  });
};

navAnimation();

const animateMenuIcon = () => {
  $(".menuBars").on("click", () => {
    if ($(".menuBars").hasClass("open")) {
      $(".menuBars").removeClass("open");
      $("nav").addClass("slideIn");
      $(".menuBars").addClass("rotateBarsOpen");
      $(".firstLine").addClass("firstLineOpen");
      $(".secondLine").addClass("secondLineOpen");
      $(".thirdLine").addClass("thirdLineOpen");
      $("nav").removeClass("slideOut");
      $(".menuBars").removeClass("rotateBarsClose");
      $(".firstLine").removeClass("firstLineClose");
      $(".secondLine").removeClass("secondLineClose");
      $(".thirdLine").removeClass("thirdLineClose");
    } else {
      $(".menuBars").addClass("open");
      $("nav").removeClass("slideIn");
      $(".menuBars").removeClass("rotateBarsOpen");
      $(".firstLine").removeClass("firstLineOpen");
      $(".secondLine").removeClass("secondLineOpen");
      $(".thirdLine").removeClass("thirdLineOpen");
      $("nav").addClass("slideOut");
      $(".menuBars").addClass("rotateBarsClose");
      $(".firstLine").addClass("firstLineClose");
      $(".secondLine").addClass("secondLineClose");
      $(".thirdLine").addClass("thirdLineClose");
    }
  });
};

animateMenuIcon();

const stopScrolling = () => {
  $(".menuBars").on("click", () => {
    if (!$(".menuBars").hasClass("open")) {
      $("body").css({ position: "fixed" });
    } else {
      $("body").css({ position: "" });
    }
  });
};

stopScrolling();

//This function shows and hides the phone and location information displayed
//when hovering the respective nav icons.

// const hideInfoBoxes = () => {
//   $("#locationIcon").mouseover(() => {
//     $("#getLocation").removeClass("hideInformation");
//   });

//   $("#locationIcon").mouseleave(() => {
//     $("#getLocation").addClass("hideInformation");
//   });

//   $("#phoneIcon").mouseover(() => {
//     $("#getPhone").removeClass("hideInformation");
//   });

//   $("#phoneIcon").mouseleave(() => {
//     $("#getPhone").addClass("hideInformation");
//   });

//   //This section hides the .infoBox for any touchcreen device

//   $(document).mouseup((e) => {
//     if (
//       !$("#locationIcon").is(e.target) ||
//       !$("#getDirectionsButton").is(e.target)
//     ) {
//       $("#getLocation").addClass("hideInformation");
//     }
//   });

//   $(document).mouseup((e) => {
//     if (!$("#phoneIcon").is(e.target) || !$("#callUsButton").is(e.target)) {
//       $("#getPhone").addClass("hideInformation");
//     }
//   });
// };

// hideInfoBoxes();

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

const checkInputs = (inputNum, inputMsg) => {
  if (!$(inputNum)[0].checkValidity()) {
    $(inputNum).siblings(".invalidSmallText").remove();
    $(inputNum).addClass("invalidInput");
    $(inputNum)[0].insertAdjacentHTML(
      "afterend",
      `<p class='invalidSmallText'>${inputMsg}</p>`
    );
  } else {
    $(inputNum).removeClass("invalidInput");
    $(inputNum).siblings(".invalidSmallText").remove();
  }
};

const checkEachInput = () => {
  const invalidInputMsg = [
    "Invalid name",
    "Invalid email",
    "Invalid number",
    "Invalid Rego",
    "Required",
    "Required",
    "Invalid model",
  ];

  for (let i = 0; i < invalidInputMsg.length; i++) {
    // It checks the validity of the inputs for the first time once
    // they lose focus
    $(`.input${i}`).focusout(() => {
      checkInputs(`.input${i}`, invalidInputMsg[i]);
      // It checks the validity of the inputs for the second time
      // every time a key is typed or an input is changed
      if (i <= 3 || i === 6) {
        $(`.input${i}`).keyup(() => {
          checkInputs(`.input${i}`, invalidInputMsg[i]);
        });
      } else {
        $(`.input${i}`).change(() => {
          checkInputs(`.input${i}`, invalidInputMsg[i]);
        });
      }
    });
  }
};

checkEachInput();

const checkPreferredDate = () => {
  $("#preferredDate").change(() => {
    let preferredDate = document.getElementById("preferredDate").value;
    let javascriptDate = new Date(preferredDate);
    let day = javascriptDate.getDay();

    if (day === 0) {
      $("#preferredDate").addClass("invalidInput");
      $(".availableHours").remove();
      $(".preferredDate .invalidSmallText").remove();
      $(".preferredTime .invalidSmallText").remove();
      $(".preferredDate").append(
        "<p class='invalidSmallText'>Closed on Sundays</p>"
      );
    } else if (day === 6) {
      $("#preferredDate").removeClass("invalidInput");
      $(".availableHours").remove();
      $(".preferredDate .invalidSmallText").remove();
      $(".preferredTime .invalidSmallText").remove();
      $("#preferredTime").append(
        "<option class='availableHours' value=''></option>"
      );
      $("#preferredTime").append(
        "<option class='availableHours' value='9:00am - 12:00pm'>9:00am - 12:00pm</option>"
      );
    } else {
      $("#preferredDate").removeClass("invalidInput");
      $(".availableHours").remove();
      $(".preferredDate .invalidSmallText").remove();
      $(".preferredTime .invalidSmallText").remove();
      $("#preferredTime").append(
        "<option class='availableHours' value=''></option>"
      );
      $("#preferredTime").append(
        "<option class='availableHours' value='8:30am - 12:00pm'>8:30am - 12:00pm</option>"
      );
      $("#preferredTime").append(
        "<option class='availableHours' value='12:00pm - 4:00pm'>12:00pm - 4:00pm</option>"
      );
    }
  });
};

checkPreferredDate();

const checkPreferredTime = () => {
  $("#preferredTime").focusin(() => {
    if (
      $(".preferredDate p").hasClass("invalidSmallText") ||
      $("#preferredTime").val() === null
    ) {
      $(".preferredTime .invalidSmallText").remove();
      $("#preferredTime").addClass("invalidInput");
      $(".preferredTime").append(
        "<p class='invalidSmallText'>Select a valid date first</p>"
      );
    }
  });

  $("#preferredDate").change(() => {
    if (!$(".preferredDate p").hasClass("invalidSmallText")) {
      $("#preferredTime").removeClass("invalidInput");
    }
  });
};
checkPreferredTime();

const removeForm = () =>
  $(".temporalBar").hasClass("successfulBar") ? $(".bookingForm").remove() : "";

// const removeForm = () => {
//   if ($(".temporalBar").hasClass("successfulBar")) {
//     $(".bookingForm").remove();
//   }
// };

removeForm();
