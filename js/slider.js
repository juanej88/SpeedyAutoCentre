const slideComments = () => {
  // if (window.orientation === 0) {
  //   $("#firstComment").addClass("firstCommentPortrait");
  // }

  let firstComment = document.getElementById("firstComment");
  let secondComment = document.getElementById("secondComment");
  let thirdComment = document.getElementById("thirdComment");
  // let screenWidth = screen.width * 2 * 0.95;
  let screenWidth = screen.width * 2;
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
    secondComment.style.left = `${screenWidth * 1.1 - change}px`;
    thirdComment.style.left = `${screenWidth * 2.05 - change}px`;
    event.preventDefault();
  };

  const commentOneHandleTouchEnd = (event) => {
    let change = startingX - event.changedTouches[0].clientX;
    let swipe = screenWidth / 10;

    if (change > swipe) {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-120%";
      secondComment.style.left = 0;
      thirdComment.style.left = "120%";
      $("#firstComment").removeClass("activeComment");
      $("#secondComment").addClass("activeComment");
    } else {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = 0;
      secondComment.style.left = "120%";
      thirdComment.style.left = "240%";
      $("#secondComment").removeClass("activeComment");
      $("#firstComment").addClass("activeComment");
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

    firstComment.style.left = `${change - screenWidth * 1.1}px`;
    secondComment.style.left = `${change}px`;
    thirdComment.style.left = `${change + screenWidth * 1.1}px`;
    event.preventDefault();
  };

  const commentTwoHandleTouchEnd = (event) => {
    let change = event.changedTouches[0].clientX - startingX;

    if (change > 0) {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = 0;
      secondComment.style.left = "120%";
      thirdComment.style.left = "240%";
      $("#secondComment").removeClass("activeComment");
      $("#firstComment").addClass("activeComment");
    } else {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-240%";
      secondComment.style.left = "-120%";
      thirdComment.style.left = 0;
      $("#secondComment").removeClass("activeComment");
      $("#thirdComment").addClass("activeComment");
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

    firstComment.style.left = `${change - screenWidth * 2.05}px`;
    secondComment.style.left = `${change - screenWidth * 1.1}px`;
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
      firstComment.style.left = "-120%";
      secondComment.style.left = 0;
      thirdComment.style.left = "120%";
      $("#thirdComment").removeClass("activeComment");
      $("#secondComment").addClass("activeComment");
    } else {
      firstComment.style.transition = "all 0.25s";
      secondComment.style.transition = "all 0.25s";
      thirdComment.style.transition = "all 0.25s";
      firstComment.style.left = "-240%";
      secondComment.style.left = "-120%";
      thirdComment.style.left = 0;
      $("#thirdcomment").addClass("activeComment");
      $("#secondComment").removeClass("activeComment");
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

// It changes the active comment reference
const highlightActiveComment = () => {
  $("#firstComment").on("touchend", () => {
    if (!$("#firstComment").hasClass("activeComment")) {
      $(".referenceCircleOne").removeClass("referenceCircleActive");
      $(".referenceCircleTwo").addClass("referenceCircleActive");
    }
  });

  $("#secondComment").on("touchend", () => {
    if ($("#firstComment").hasClass("activeComment")) {
      $(".referenceCircleTwo").removeClass("referenceCircleActive");
      $(".referenceCircleOne").addClass("referenceCircleActive");
    } else if ($("#thirdComment").hasClass("activeComment")) {
      $(".referenceCircleTwo").removeClass("referenceCircleActive");
      $(".referenceCircleThree").addClass("referenceCircleActive");
    }
  });

  $("#thirdComment").on("touchend", () => {
    if (!$("#thirdComment").hasClass("activeComment")) {
      $(".referenceCircleThree").removeClass("referenceCircleActive");
      $(".referenceCircleTwo").addClass("referenceCircleActive");
    }
  });
};

highlightActiveComment();
