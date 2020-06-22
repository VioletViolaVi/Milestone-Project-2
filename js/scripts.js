// waits until DOM has been fully loaded
$("document").ready(function () {
  // removes start button and modal background when clicked and starts counter
  $("#start").click(function () {
    CountUpTimer();
    $(".modalBackground").hide();
  });

  // flips cards when clicked
  $(".wholeCard").click(function () {
    $(this).toggleClass("flip");
  });

  /********************** checks if cards match*/
  // adds "clicked" class to cards when clicked
  $(".wholeCard").click(function () {
    $(this).addClass("clicked");
    // picking two cards
    if ($(".clicked").length === 2) {
      // checking data of the two cards
      if (
        $(".clicked").first().data("image") ===
        $(".clicked").last().data("image")
      ) {
        // hides matched cards whilst keeping them in place and removes clicked class so "length === 2" continues to work
        $(".clicked").addClass("hide").removeClass("clicked");
      } else {
        // flips back non matching cards
        toFlipBackUnmatchedCards();
        // removes clicked class so "length === 2" continues to work
        $(".clicked").removeClass("clicked");
      }
    }
  });

  /********************** hides non matching pairs */
  // cards flip back on their own after a set time
  function toFlipBackUnmatchedCards() {
    setTimeout(function () {
      $(".flip").toggleClass("flip");
    }, 600);
  }

  /********************** countup timer for gameplay */
  // times how long user plays game
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

  /********************** produces end game modal */
  // shows endgame model once game is completed
  function conditonToMakeEndGameModalAppear() {
    $(".wholeCard").click(function () {
      if ($(".hide").length === 12) {
        // shows completed and restart sign
        setTimeout(function () {
          $("#score").replaceWith(`
        <div id="endGame">
            <h1 id="completed">Completed!</h1>
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
  // used instead of refreshing the page
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
    });
  }



















  
  //  // removes clicking ability after two picked out cards
  //  function removeClickingOnCards() {
  //      $(".wholeCard").click(function(){
  //          $(this).off("click");
  //      });          removeClickingOnCards();
  //  };

  //  // brings back clicking ability after two picked out cards dissapper or flip back
  //  function restoreClickingOnCards() {
  //      $(".wholeCard").click(function(){
  //          $(this).on("click");
  //      });             restoreClickingOnCards();
  //  };

  //   //node.list of cards
  //   let animals = document.querySelectorAll(".wholeCard");
  //   // converts node.list to array
  //   let animalArray = Array.from(animals);
  //   // Fisher-Yates shuffle method
  //   function shufflingCards() {
  //     // declaring the card position picked at random
  //     let randomlyPicked;
  //     // declaring the card position picked started from the back going backwards
  //     let decrementallyPicked;
  //     // last item in the array; swaps with items in position numbers greater than zero; going backwards in the array
  //     for (i = animalArray.length - 1; i > 0; i--) {
  //       let randomlyPicked = Math.floor(Math.random() * 12);
  //       let decrementingCard = animalArray[i];
  //       animalArray[i] = animalArray[randomlyPicked];
  //       animalArray[randomlyPicked] = decrementingCard;
  //     }
  //   }
});
