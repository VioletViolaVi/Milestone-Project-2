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
  function checkingForMatchingCards() {
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
            toRemoveMatchingCards();
        } else {
            // flips back non matching cards
          toFlipBackUnmatchedCards();
        }
      }
    });
  }
  checkingForMatchingCards();

  /********************** removes matching pairs */
  function toRemoveMatchingCards() {
    // hides matched cards whilst keeping them in place and removes clicked class so "length === 2" continues to work
    $(".clicked").addClass("hide").removeClass("clicked");
  }

  /********************** flips back non matching pairs */
  function toFlipBackUnmatchedCards() {
    // cards flip back on their own after a set time
    setTimeout(function () {
      $(".flip").toggleClass("flip");
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

  // let positionNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  //  function numbersShuffle(numbers){
  //     let newPos;
  //     let temp;
  //     for (let i=numbers.length-1; i>0; i--) {
  //         newPos = Math.floor(Math.random()*(i+1));
  //         temp=numbers[i];
  //         numbers[i]=numbers[newPos];
  //         numbers[newPos]=temp;
  //     }
  //     return numbers;
  // let cards = document.querySelectorAll(".wholeCard");
  // let newCards = cards.append(numbersShuffle());
  // }
  // console.log(numbersShuffle(newCards));

  //     // Fisher-Yates shuffle method
  //     function shufflingCards() {
  //     //node.list of cards
  //     let images = document.querySelectorAll(".wholeCard");
  //     // converts node.list to array
  //     let imagesArray = Array.from(images);
  //       // declaring the card position picked at random
  //       let randomlyPicked;
  //       // declaring the card position picked started from the back going backwards
  //       let decrementallyPicked;
  //       // last item in the array; swaps with items in position numbers greater than zero; going backwards in the array
  //       for (i = imagesArray.length - 1; i > 0; i--) {
  //         let randomlyPicked = Math.floor(Math.random() * imagesArray);
  //         let decrementingCard = imagesArray[i];
  //         imagesArray[i] = imagesArray[randomlyPicked];
  //         imagesArray[randomlyPicked] = decrementingCard;
  //       };
  //     };
  // console.log(shufflingCards());
  //  shufflingCards();

  //    // removes clicking ability after two picked out cards
  //    function removeClickingOnCards() {
  //         $(".wholeCard").off("click");
  //          removeClickingOnCards();
  //    };

  //    // brings back clicking ability after two picked out cards dissapper or flip back
  //    function restoreClickingOnCards() {
  //        $(".wholeCard").click(function(){
  //            $(this).on("click");
  //        });             restoreClickingOnCards();
  //    };
});
