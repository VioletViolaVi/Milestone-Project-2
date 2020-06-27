// waits until DOM has been fully loaded
$("document").ready(function () {
  // prevents other cards from flipping when two are flipped already
  let stopFlip = false;

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
  function flipsCards() {
    // flips cards when clicked
    $(".wholeCard").click(function () {
      // helps prevents other cards from flipping when two are flipped already
      if (stopFlip) return;
      $(this).toggleClass("flip");
    });
  }
  flipsCards();

  /********************** picks two cards at once*/
  function collectingTwoCards() {
    // adds "clicked" class to cards when clicked
    $(".wholeCard").click(function () {
      $(this).addClass("clicked");
      // picking two cards
      if ($(".clicked").length === 2) {
        checkForMatch();
      }
    });
  }
  collectingTwoCards();

  /********************** checks if cards match*/
  function checkForMatch() {
    // checking data of the two cards
    if (
      $(".clicked").first().data("image") === $(".clicked").last().data("image")
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
    $(".clicked").addClass("hide").removeClass("clicked");
  }

  /********************** flips back non matching pairs */
  function toFlipBackUnmatchedCards() {
    // helps prevents other cards from flipping when two are flipped already
    stopFlip = true;
    // cards flip back on their own after a set time
    setTimeout(function () {
      $(".flip").toggleClass("flip");
      // helps prevents other cards from flipping when two are flipped already
      stopFlip = false;
    }, 600);
    // removes clicked class so "length === 2" continues to work
    $(".clicked").removeClass("clicked");
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
      if ($(".hide").length === 12) {
        clearInterval(countingTime);
      }
    });
  }

  /********************** produces end game info */
  function conditonToMakeEndGameModalAppear() {
    $(".wholeCard").click(function () {
      if ($(".hide").length === 12) {
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
    });
  }
  conditonToMakeEndGameModalAppear();

  /********************** restarts game */
  function restartGame() {
    // makes restart button clickable and reset game
    $(".fas.fa-redo-alt").click(function () {
      // ensures restart symbol is always shown after game play
      $("#endGame").replaceWith(`
        <div id="score"></div>`);
      // makes cards re-appear once restarted
      $(".wholeCard").removeClass("hide");
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
  






























  
  //   function doubleCardClick() {
  //     $(".wholeCard").click(function () {
  //         $(this).off("click");
  //         console.log("worked");
  //     });
  //   }
  //   doubleCardClick();

  //   function lockingSingleCard() {
  //     $(".wholeCard").click(function () {
  //       $(this).addClass("lock");

  //       let lock = setTimeout(function () {
  //         if ($(".lock")) {
  //           $(".lock").off("click");
  //         }
  //       }, 300);
  //     });
  //   }
  //   lockingSingleCard();

  //   function unlockingSingleCard() {
  //     if ($(".wholeCard.flip.lock.clicked")===2) {
  //       clearTimeout(lockingSingleCard());
  //       $(".wholeCard.lock").on("click");
  //     }
  //   }
  //   unlockingSingleCard();

  //   function doubleCardClick() {
  //       $(".wholeCard").click(function () {
  //       if($(".wholeCard").first().data("number")===$(".wholeCard").first().data("number")){
  //           $(this).off("click");
  //           console.log("worked");
  //       }else{
  //           console.log("didn't worked");
  //       }
  //       })
  //   }
  //   doubleCardClick();

  //     function removeDoubleCardClick() {
  //       $(".wholeCard").click(function () {
  //           $(".wholeCard").on("click");
  //           console.log("worked");
  //       })
  //   }
  //   removeDoubleCardClick();

  // function doubleClicked() {
  // //     if($(".clicked").click(function () {
  // //         $(this).removeClass("clicked");
  // //     })){

  // //     }
  // // }
  // //   doubleClicked();

  //   function nonFlip() {
  // //     if ($(".clicked").length === 2) {
  // //       setTimeout((nonFlip) => {
  // //         let stop = $(".wholeCard").addClass("nonFlip");
  // //         console.log(stop);
  // //       }, 400);
  // //     }
  // //   }

  // //   function nonFlipRemoval() {
  // //     if ($(".clicked").length === 0) {
  // //       clearTimeout(nonFlip(stop));
  // //     }
  // //   }
});
