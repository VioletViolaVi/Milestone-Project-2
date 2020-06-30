  //   function forDoubleClicked() {
  //     $(".wholeCard").click(function(){
  //     // setTimeout(function() {
  //     if($(".wholeCard.flip.selected")){
  //         $(this).off("click");
  //         console.log("it happened");
  //     }else{
  //         $(this).on("click");
  //     }
  //       console.log("it DIDN'T happened");
  //         // }, 0)
  // })
  // }
  // forDoubleClicked();

  // $(".wholeCard").click(function(){
  //     $(".flip2").off("click");
  // })

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


  // Calculator = function () {
//     this.value = 0;
// }

// Calculator.prototype.add = function(number) {
//     if(typeof(number)==="number"){
//         this.value+= number;
//     }else{
//         alert("ERROR!");
//     }
// }

// drinking = function whatCanIDrink(age) {
//     if(age=14){
//         return "Sorry. I can’t tell what drink because that age is incorrect!";
//     }else if(age<14){
//         return "Drink Toddy";
//     }else if(age<18){
//         return "Drink Coke";
//     }else if(age<21){
//         return "Drink Beer";
//     }else if(age<130){
//         return "Drink Whisky";
//     }else{
//         return "orry. I can’t tell what drink because that age is incorrect!";
//     }
// }






// describe("calculator", function () {
    
//     beforeEach(function () {
//         calc = new Calculator;
//     })
     
//     describe("adding numbers together", function () {
//         it("should be 42", function () {
//             calc.add(20)
//             calc.add(22)
//           expect(calc.value).toBe(42);  
//         })
//         it("should be 26", function () {
//             calc.add(20)
//             calc.add(6) 
//             expect(calc.value).toBe(26);
//         })
//         it("should also give an error", function () {
//             spyOn(window, "alert");
//             calc.add("ice");
//             expect(window.alert).toHaveBeenCalledWith("ERROR!");
//         })
//     })
// })

// let drink = new drinking();

// describe("drinking game", function () {
//     it("Sorry. I can’t tell what drink because that age is incorrect!", function () {
//         drinking.whatCanIDrink(0);
//     })
//         it("Drink Toddy", function () {
//         drinking.whatCanIDrink(age<14);
//     })
//         it("Drink Coke", function () {
//         drinking.whatCanIDrink(age<18);
//     })
//         it("Drink Beer", function () {
//         drinking.whatCanIDrink(age<21);
//     })
//         it("Drink Whisky", function () {
//         drinking.whatCanIDrink(age<130);
//     })
//         it("Sorry. I can’t tell what drink because that age is incorrect!", function () {
//         drinking.whatCanIDrink(age>130);
//     })
// })