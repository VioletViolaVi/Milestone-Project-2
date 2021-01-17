// waits until DOM has been fully loaded
$("document").ready(function () {
  // helps prevent adding .selected to unflipped cards so all can be matched
  let stopFlip = false;

  $(".wholeCard").click(function () {
    // helps prevent adding .selected to unflipped cards so all can be matched
    if (stopFlip) return;
    // card clicked on can't be flipped again in single turn
    if (!$(this).hasClass("selected")) {
      // enables remaining cards to be flipped
      $(this).toggleClass("flip");
      // defines cards to be checked for match
      $(this).addClass("selected");
    }
    collectingTwoCards();
    conditionToMakeEndGameModalAppear();
  });

  function startGame() {
    // removes start button and modal background when clicked and starts counter
    $("#start").click(function () {
      countUpTimer();
      $(".modalBackground").hide();
    });
  }
  startGame();

  function collectingTwoCards() {
    // picks two cards per turn
    if ($(".wholeCard.flip.selected").length === 2) {
      checkForMatch();
    }
  }

  function checkForMatch() {
    // checks for card match
    if (
      $(".wholeCard.flip.selected").first().data("image") ===
      $(".wholeCard.flip.selected").last().data("image")
    ) {
      // hides matches
      toRemoveMatchingCards();
    } else {
      // flips back non matches
      toFlipBackUnmatchedCards();
    }
  }

  function toRemoveMatchingCards() {
    // keeps cards in place whilst hidden & enables "length === 2" to work
    $(".wholeCard.flip.selected").addClass("invisible").removeClass("selected");
  }

  function toFlipBackUnmatchedCards() {
    // helps prevent adding .selected to unflipped cards so all can be matched
    stopFlip = true;
    // cards flip back on their own after set time & enables "length === 2" to work
    setTimeout(function () {
      $(".flip").toggleClass("flip");
      // helps prevent adding .selected to unflipped cards so all can be matched
      stopFlip = false;
    }, 600);
    $(".wholeCard.flip.selected").removeClass("selected");
  }

  function countUpTimer() {
    // count up timer from zero
    let timeDuration = 0;
    // rate numbers are counted & by how much they are incremented
    let countingTime = setInterval(function () {
      timeDuration += 1;
      $("#timer").html(`Time: ${timeDuration}`);
    }, 1000);
    // stops counting when all cards are matched
    $(".wholeCard").click(function () {
      if ($(".invisible").length === 12) {
        clearInterval(countingTime);
        // shows current time as high score
        if (localStorage.getItem("fastestTime") === null) {
          localStorage.setItem("fastestTime", timeDuration);
          $("#highScore").html(`High Score: ${timeDuration}`).hide();
        } else {
          // compares then shows lower time as high score
          let getItem = parseInt(localStorage.getItem("fastestTime"));
          let bestTime = Math.min(getItem, timeDuration);
          localStorage.setItem("fastestTime", bestTime);
          $("#highScore").html(`High Score: ${bestTime}`).hide();
        }
        $("#highScore").show();
      }
    });
  }

  function conditionToMakeEndGameModalAppear() {
    if ($(".invisible").length === 12) {
      // shows completed and restart sign
      setTimeout(function () {
        $("#gameOver").replaceWith(`
        <div id="endGame">
            <h2 id="completed">Completed</h2>
            <i class="fas fa-redo-alt"></i>
        </div>`);
        // allows game to restart when its button is clicked
        restartGame();
        // prevents animal images being seen when restarted
        $(".wholeCard").removeClass("flip");
      }, 600);
    }
  }

  function restartGame() {
    // makes restart button clickable and resets game
    $(".fas.fa-redo-alt").click(function () {
      // ensures restart symbol is always shown after game play
      $("#endGame").replaceWith(`
        <div id="gameOver"></div>`);
      // makes cards re-appear once restarted
      $(".wholeCard").removeClass("invisible");
      // rearranges cards for every new game play
      mixingUpCards();
      countUpTimer();
      $("#highScore").hide();
    });
  }

  function mixingUpCards() {
    // brings out <div> children of said class
    let cards = document.querySelector(".cardsContainer");
    // Fisher-Yates shuffle method
    for (i = cards.children.length; i > -1; i--) {
      cards.appendChild(cards.children[(Math.random() * i) | 0]);
    }
  }
  // ensures order is always random when game is first opened
  mixingUpCards();
});
