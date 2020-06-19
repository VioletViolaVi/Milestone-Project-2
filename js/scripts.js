// waits until DOM has been fully loaded
$("document").ready(function () {
  // removes start button when clicked
  $("#titleStart").click(function () {
    $(this).hide();
  });

  // flips cards when clicked
  $(".wholeCard").click(function () {
    $(this).toggleClass("flip");
  });

  // prints out name of clicked animal card
  $(".wholeCard").click(function () {
    console.log($(this).data("image"));
  });

  // do cards match or not?
  $(".wholeCard").click(function () {
    $(this).addClass("clicked");
    // picking two cards
    if ($(".clicked").length === 2) {
      // checking data of the two cards
      if (
        $(".clicked").first().data("image") ===
        $(".clicked").last().data("image")
      ) {
        // removes matched cards by hiding them
        $(".clicked").addClass("hide").removeClass("clicked");;
      } else {
        // flips back non matching cards
        toFlipBackUnmatchedCards();
        // removes clicked class so "length === 2" continues to work
        $(".clicked").removeClass("clicked");
      }
    }
  });

  /********************** called out functions in "do cards match or not?" */

  // function & flips back non matching cards
  function toFlipBackUnmatchedCards() {
    setTimeout(function () {
      $(".flip").toggleClass("flip");
    }, 1000);
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
