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

const checkPreferredDate = () => {
  $("#preferredDate").change(() => {
    let preferredDate = document.getElementById("preferredDate").value;
    let javascriptDate = new Date(preferredDate);
    let day = javascriptDate.getDay();

    if (day === 0) {
      $("#preferredDate").addClass("invalidInput");
      $(".availableHours").remove();
    } else if (day === 6) {
      $("#preferredDate").removeClass("invalidInput");
      $(".availableHours").remove();
      $("#preferredTime").append(
        "<option class='availableHours' value=''></option>"
      );
      $("#preferredTime").append(
        "<option class='availableHours' value='9:00am - 12:00pm'>9:00am - 12:00pm</option>"
      );
    } else {
      $("#preferredDate").removeClass("invalidInput");
      $(".availableHours").remove();
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

const slideComments = () => {
  // if (window.orientation === 0) {
  //   $("#firstComment").addClass("firstCommentPortrait");
  // }

  let firstComment = document.getElementById("firstComment");
  let secondComment = document.getElementById("secondComment");
  let thirdComment = document.getElementById("thirdComment");
  let screenWidth = screen.width * 2 * 0.95;
  let startingX;

  const commentOneHandleTouchStart = (event) => {
    startingX = event.touches[0].clientX;
    firstComment.style.transition = "";
    secondComment.style.transition = "";
    thirdComment.style.transition = "";
  };

  const commentOneHandleTouchMove = (event) => {
    let touch = event.touches[0];
    let change = startingX - touch.clientX;

    if (change < 0) {
      return;
    }

    firstComment.style.left = `-${change}px`;
    secondComment.style.left = `${screenWidth - change}px`;
    thirdComment.style.left = `${screenWidth * 2 - change}px`;
    event.preventDefault();
  };

  const commentOneHandleTouchEnd = (event) => {
    let change = startingX - event.changedTouches[0].clientX;
    let swipe = screenWidth / 10;

    if (change > swipe) {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-80vw";
      secondComment.style.left = 0;
      thirdComment.style.left = "80vw";
    } else {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "0";
      secondComment.style.left = "80vw";
      thirdComment.style.left = "1600vw";
    }
  };

  const commentTwoHandleTouchStart = (event) => {
    startingX = event.touches[0].clientX;
    firstComment.style.transition = "";
    secondComment.style.transition = "";
    thirdComment.style.transition = "";
  };

  const commentTwoHandleTouchMove = (event) => {
    let touch = event.touches[0];
    let change = touch.clientX - startingX;

    firstComment.style.left = `${change - screenWidth}px`;
    secondComment.style.left = `${change}px`;
    thirdComment.style.left = `${change + screenWidth}px`;
    event.preventDefault();
  };

  const commentTwoHandleTouchEnd = (event) => {
    let change = event.changedTouches[0].clientX - startingX;
    let swipe = screenWidth / 10;

    if (change > swipe) {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = 0;
      secondComment.style.left = "80vw";
      thirdComment.style.left = "160vw";
    } else {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-160vw";
      secondComment.style.left = "-80vw";
      thirdComment.style.left = 0;
    }
  };

  const commentThirdHandleTouchStart = (event) => {
    startingX = event.touches[0].clientX;
    firstComment.style.transition = "";
    secondComment.style.transition = "";
    thirdComment.style.transition = "";
  };

  const commentThirdHandleTouchMove = (event) => {
    let touch = event.touches[0];
    let change = touch.clientX - startingX;

    if (change < 0) {
      return;
    }

    firstComment.style.left = `${change - screenWidth * 2}px`;
    secondComment.style.left = `${change - screenWidth}px`;
    thirdComment.style.left = `${change}px`;
    event.preventDefault();
  };

  const commentThirdHandleTouchEnd = (event) => {
    let change = event.changedTouches[0].clientX - startingX;
    let swipe = screenWidth / 10;

    if (change > swipe) {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-80vw";
      secondComment.style.left = 0;
      thirdComment.style.left = "80vw";
    } else {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-160vw";
      secondComment.style.left = "-80vw";
      thirdComment.style.left = 0;
    }
  };

  firstComment.ontouchstart = commentOneHandleTouchStart;
  firstComment.ontouchmove = commentOneHandleTouchMove;
  firstComment.ontouchend = commentOneHandleTouchEnd;

  secondComment.ontouchstart = commentTwoHandleTouchStart;
  secondComment.ontouchmove = commentTwoHandleTouchMove;
  secondComment.ontouchend = commentTwoHandleTouchEnd;

  thirdComment.ontouchstart = commentThirdHandleTouchStart;
  thirdComment.ontouchmove = commentThirdHandleTouchMove;
  thirdComment.ontouchend = commentThirdHandleTouchEnd;
};

slideComments();
