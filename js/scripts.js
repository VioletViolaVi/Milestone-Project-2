$("document").ready(function () {
  // removes start button when clicked
  $("#title-start").click(function () {
    $(this).hide();
  });

  // flips cards when clicked
  $(".whole-card").click(function () {
    $(this).toggleClass("flip");
  });

  //   function num(fig) {
  //     return fig - 5;
  //   }
  //   console.log(num(10));

  //   function test() {
  //     if (3 == "3") {
  //       return "same";
  //     } else {
  //       return "not same";
  //     }
  //   }
  //   console.log(test());

  //   function test2() {
  //     if (3 === "3") {
  //       return "same";
  //     } else {
  //       return "not same";
  //     }
  //   }
  //   console.log(test2());

  //   function test3(){
  //       if(2 != 2){
  //          return "not same";
  //       }else{
  //         return "same";
  //       }
  //   }console.log(test3());

  //   function test4(){
  //       if(2 !== "2"){
  //          return "not same";
  //       }else{
  //         return "same";
  //       }
  //   }console.log(test4());

  // function trying(val){
  //     if(val >=25 && val <=50){
  //         return "hi";
  //     }else{
  //         return "nah";
  //     }
  // }console.log(trying(26));

  // function trying(val){
  //     if(val >25 || val >50){
  //         return "hi";
  //     }else{
  //         return "nah";
  //     }
  // }console.log(trying(26));

  // function video(num){
  //     if(num<5){
  //         return "Tiny";
  //     }else if(num<10){
  //         return "Small";
  //     }else if(num<15){
  //         return "Medium";
  //     }else if(num<20){
  //         return "Large";
  //     }else{
  //         return "Huge";
  //     }
  // } console.log(video(2));
  // console.log(video(9));
  // console.log(video(10));
  // console.log(video(18));
  // console.log(video(90));

  //   let me = {
  //     "my name": `vivian`,
  //     "my age": 26,
  //     "I'm tired": true,
  //     "my height": "tall",
  //     "my food": "pizza",
  //     myFood: "pizza",
  //   };
  //   let name = me[`my name`];
  //   console.log(name);

  //   let age = me["my age"];
  //   console.log(age);

  //   let tired = me["I'm tired"];
  //   console.log(tired);

  //   let height = "my height";
  //   let tall = me[height];
  //   console.log(tall);

  //   let food = me["my food"];
  //   console.log(food);

  //   me.myFood = "cake";
  //   console.log(me.myFood);

  //   me.favColour = "purple";
  //   console.log(me);

  //   me["fav car"] = "Limo";
  //   console.log(me);

  //   delete me["my food"];

  //   let arrayStuff = [];
  //   let i = 0;
  //   while (i < 6) {
  //     arrayStuff.push(i);
  //     i++;
  //   }
  //   console.log(arrayStuff);

  //   let newbie = [];
  //   for (let i = 0; i < 6; i++) {
  //     newbie.push(i);
  //   }
  //   console.log(newbie);

  //   let evenNumbers = [];
  //   for (i = 0; i < 10; i += 2) {
  //     evenNumbers.push(i);
  //   }
  //   console.log(evenNumbers);

  //   for (i = 0; i < 10; i += 2) {
  //       console.log("hello");
  //   }

  //   for (i=1; i<10; i+=2){
  //       console.log("odd number time!");
  //   }

  //   let oddNumbers = [];
  //   for (i=1; i<10; i+=2){
  //       oddNumbers.push(i);
  //   }console.log(oddNumbers);

  //   let countBackwards = [];
  //   for (let i=10; i>0; i--){
  //       countBackwards.push(i);
  //   }console.log(countBackwards);

  // let numbers = [1,2,3,4,5,6];
  // let total = 0;
  // for(let i=0; i<numbers.length; i++){
  //     total = total + numbers[i];
  // }console.log(total);

  // let tray = [3,3,3,3,3,3];
  // let full = 0;
  // for(i=0; i<tray.length; i++){
  //     full += tray[i];
  // }console.log(full);
});
