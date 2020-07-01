// waits until DOM has been fully loaded
$("document").ready(function () {

  /********************** begins game*/
  function startGame() {
    // removes start button and modal background when clicked and starts counter
    $("#start").click(function () {
      CountUpTimer();
      $(".modalBackground").hide();
    });
  }
  startGame();

  /********************** turns cards over*/
  // flips cards when clicked
  $(".wholeCard").click(function () {
    if (!$(this).hasClass("selected")) {
      $(this).toggleClass("flip");
      $(this).addClass("selected");
    }
    collectingTwoCards();
    conditonToMakeEndGameModalAppear();
  });

  /********************** picks two cards at once*/
  function collectingTwoCards() {
    // picking two cards
    if ($(".wholeCard.flip.selected").length === 2) {
      checkForMatch();
    }
  }

  /********************** checks if cards match*/
  function checkForMatch() {
    // checking data of the two cards
    if (
      $(".wholeCard.flip.selected").first().data("image") ===
      $(".wholeCard.flip.selected").last().data("image")
    ) {
      // hides the matching card pair
      toRemoveMatchingCards();
    } else {
      // flips back non matching cards
      toFlipBackUnmatchedCards();
    }
  }

  /********************** removes matching pairs */
  function toRemoveMatchingCards() {
    // hides matched cards whilst keeping them in place and removes clicked class so "length === 2" continues to work
    $(".wholeCard.flip.selected").addClass("invisible").removeClass("selected");
  }

  /********************** flips back non matching pairs */
  function toFlipBackUnmatchedCards() {
    // cards flip back on their own after a set time
    setTimeout(function () {
      $(".flip").toggleClass("flip");
    }, 600);
    // removes clicked class so "length === 2" continues to work
    $(".wholeCard.flip.selected").removeClass("selected");
  }

  /********************** countup timer to time length of gameplay */
  function CountUpTimer() {
    // start time
    let timeDuration = 0;
    // ascending counting time
    let countingTime = setInterval(function () {
      $("#timer").html(`Time: ${timeDuration}`);
      timeDuration += 1;
    }, 1000);
    // stops counting when all cards are matched
    $(".wholeCard").click(function () {
      if ($(".invisible").length === 12) {
        clearInterval(countingTime);
      }
    });
  }

  /********************** produces end game info */
  function conditonToMakeEndGameModalAppear() {
    if ($(".invisible").length === 12) {
      // shows completed and restart sign
      setTimeout(function () {
        $("#score").replaceWith(`
        <div id="endGame">
            <h1 id="completed">Completed</h1>
            <i class="fas fa-redo-alt"></i>
        </div>`);
        // allows game to restart when its button is clicked
        restartGame();
        // prevents animal images being seen when restarted
        $(".wholeCard").removeClass("flip");
      }, 600);
    }
  }

  /********************** restarts game */
  function restartGame() {
    // makes restart button clickable and reset game
    $(".fas.fa-redo-alt").click(function () {
      // ensures restart symbol is always shown after game play
      $("#endGame").replaceWith(`
        <div id="score"></div>`);
      // makes cards re-appear once restarted
      $(".wholeCard").removeClass("invisible");
      // starts timer from beginning again
      clearInterval(CountUpTimer());
      // rearranges cards for every new game play
      mixingUpCards();
    });
  }

  /********************** shuffles cards */
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