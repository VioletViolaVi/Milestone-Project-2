// waits until DOM has been fully loaded
$("document").ready(function () {
  // removes start button and modal background when clicked
  $("#start").click(function () {
    $(".modalBackground").hide();
  });

  // flips cards when clicked
  $(".wholeCard").click(function () {
    $(this).toggleClass("flip");
  });

  /********************** do cards match or not?: checks to see if cards match ***********************/
  //adds "clicked" class to cards when clicked
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

  /********************** functions to be called out in "do cards match or not?"section */
  // cards flip back on their own after a set time
  function toFlipBackUnmatchedCards() {
    setTimeout(function () {
      $(".flip").toggleClass("flip");
    }, 600);
  }

  /********************** produces end game modal ***********************/
  //shows endgame model once game is completed
  function conditonToMakeEndGameModalAppear() {
    $(".wholeCard").click(function () {
      if ($(".hide").length === 12) {
          setTimeout(function() {
        $(".modalBackground").show();
        $(".modalBackground #start").replaceWith(`
        <div class="endgameBackground">
            <h1 id="completed">Completed!</h1>
            <h2 id="time">Time: </h2>
            <i class="fas fa-redo-alt"></i>
        </div>`);              
          }, 600);
      };
    });
  };
  conditonToMakeEndGameModalAppear();


































  /********************** functions to be called out in "are all cards matched?" section */

  // prints out HTML of end game modal

//   function endGameModal() {
//     let endGame = $(".modalBackground").append(`
//         <div class="endgameBackground">
//             <h1 id="completed">Completed!</h1>
//             <h2 id="time">Time: </h2>
//             <i class="fas fa-redo-alt"></i>
//         </div>`);
//   }



  // setInterval(function(){
  //     let countUpStart = 0;
  //     ++Time;
  //     document.getElementById("timer").innerHTML = "Timer: 00:001";
  // },1000)
  // console.log(setInterval);

  //   // prints out name of clicked animal card
  //   $(".wholeCard").click(function () {
  //     console.log($(this).data("image"));
  //   });

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
