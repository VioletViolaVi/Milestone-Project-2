# My Second Project: Sadie’s Zoo

This project is about creating a card matching game using cartoon pictures of zoo animals. The aim of the game is to entertain users who are looking for an activity to participate in for the sake of passing time by. The game is played by the user clicking or tapping on the cards in order to flip them. All the cards have the same image of a question mark on them. Once one card is flipped, a zoo animal will show. The user is to find the other card that has the same zoo animal displayed. If successful, the cards will disappear. If not, the cards will flip back. The game is won once the user has successfully found all the zoo animal paired cards.

# UX

- This game is for any user who wants to play a game for fun or to help time pass by.
- This game will provide the users information on how long they spent trying to find the matching animal cards, on completion.
- Users who play this game will want to find the matching cards in the shortest amount of time possible and will repeat the game to do so.

# User Stories

- As a user of the Sadie’s zoo card matching game, I want to be able to understand how to play the game quickly.
- As a user of the Sadie’s zoo card matching game, I want to see how long I took to match all the cards.
- As a user of the Sadie’s zoo card matching game, I want the card’s order to change after every attempt to keep the game challenging.

# Designer Goals

- As the designer of the Sadie’s zoo card matching game, I want to make a simple layout that will help the user easily guide themself through the game.
- As the designer of the Sadie’s zoo card matching game, I want to create a popup that displays how long the user took in completing the game, after each try.
- As the designer of the Sadie’s zoo card matching game, I want to implement a functionality that makes the cards shuffle after each game play, so the user remains interested in the game.

# Sadie’s Zoo Wireframes

<img src="assets/wireframes/img/1.mobile.PNG" alt="Screenshot of how the game looks on a mobile before starting.">
<img src="assets/wireframes/img/2.mobile.PNG" alt="Screenshot of how the game looks on a mobile with no card matches.">
<img src="assets/wireframes/img/3.mobile.PNG" alt="Screenshot of how the game looks on a mobile and with a card match.">
<img src="assets/wireframes/img/4.mobile.PNG" alt="Screenshot of how the game looks on a mobile once completed, with the user's time spent and a restart button.">
<img src="assets/wireframes/img/5.tablet.PNG" alt="Screenshot of how the game looks on a tablet before starting.">
<img src="assets/wireframes/img/6.tablet.PNG" alt="Screenshot of how the game looks on a tablet with no card matches.">
<img src="assets/wireframes/img/7.tablet.PNG" alt="Screenshot of how the game looks on a tablet with a card match.">
<img src="assets/wireframes/img/8.tablet.PNG" alt="Screenshot of how the game looks on a tablet once completed, with the user's time spent and a restart button.">
<img src="assets/wireframes/img/9.desktop.PNG" alt="Screenshot of how the game looks on a desktop before starting..">
<img src="assets/wireframes/img/10.desktop.PNG" alt="Screenshot of how the game looks on a desktop with no card matches..">
<img src="assets/wireframes/img/11.desktop.PNG" alt="Screenshot of how the game looks on a desktop with a card match.">
<img src="assets/wireframes/img/12.desktop.PNG" alt="Screenshot of how the game looks on a desktop once completed, with the user's time spent and a restart button.">

# Wireframe and Final Game Differences

For the final finished game product, an image of a group of cartoon zoo animals was added at the top of the game’s webpage. This was added because it was important to ensure that the user could quickly understand what the game was about and avoid confusion.

The word “Timer” was changed to “Time” as it was more reflective on what was happening in the game. As the time shown was counting up in ascending order, using “Timer” became less accurate as it was not counting down a restricted length period. So “Time” was used to provide more accuracy. It was also better at displaying the time as a score that users got on completion of the game.

The way the time was displayed was changed. The counter was made to count past 59 seconds without the use of a digital clock. This was done because the time shown after completing the game was also used to show the user’s score. Therefore, allowing the time to be displayed as a whole number past 59 was a better option.

The number of cards used for the game was reduced from 40 to 12. This was done to prevent losing the interest of the users. By having a lower number of cards used, the user would receive rapid entertainment when they were successful in finding all matches, which would happen quickly due to the fewer cards. This would help users become more excited, making them want to play again.

A high score section was added to the game. This was to allow the user to see how well they fared in the amount of time they spent matching all the cards. It felt important to add a high score element to the game because it was a good way to keep user’s interested; making them want to keep playing to beat their own best score.

The opening modal was changed to one button labeled “Start” with a brief description underneath informing the user that pressing this button would start the game. This was changed so the user would have more information on how to play the game.

The closing modal was also edited. The time was moved to be above the “Completed” sign so that the sign could be in clear centre view of the user. The restart button was also changed to a symbol. This was done so it would take up less space and be easily read by more users as its symbol is universally known to mean restart.

# Features

### Existing Features

#### Start Button

- The start button was added and placed inside as part of the game’s modal. Clicking this button starts the game as well as the timer. This button was placed in the centre to be in clear view of the user. A brief explanation on what will happen once the button is clicked and how to play the game was provided to help the user.

#### Modal

- A modal was added to be shown at the start of this game. The modal acts as a placeholder for the start button. It makes it visually clear to the user that they are about to begin the game and therefore should get ready.

#### Logo Image

- The image seen at the top of the webpage is a group of cartoon zoo animals. This acts as the logo for the game. It gives the user an indication on what images they should expect to see when they click on the cards.

#### Opening Title

- The beginning title, “Sadie’s Zoo”, is a short and clear explanation on what the game is about. This helps maintain the user’s interest as they are not bombarded with information at the start that would make them not want to play the game. As a result, they are more likely to further engage with this activity.

#### Timer

- The timer displays a counter that counts from one at the start of the game. It shows the amount of time the user used to complete the card matching game. This counter counts in ascending order until the game is completed. If the game is restarted, the counter reverts back to one and counts again.
- The timer also acts as a score. As it shows the user how much time they took, it makes them want to try again and see if they can complete the game quicker.

#### Cards

- The cards each hold two images. Before they are clicked on and flipped, all the cards are seen with a question mark image on them. After the cards are clicked on and flipped, each card is shown to have an image of a cartoon zoo animal.
- Every two cards has a picture of the same zoo animal. This is so the user will be able to find a pair of cards that match with the same zoo animal on them. Once a pair has been found, the cards will disappear. If not, they will flip back to displaying their question mark image side.
- All the cards are seen with a question mark image first because they all need to look the same to challenge the user into finding the correct animal image pairs.

#### High Score

- The high score section shows the text “High Score:” with the amount of time spent by the user next to it. This is shown on completion of the game. After the user plays the game for the first time, the same time shown on the timer is the same time shown as the high score. After the second time playing, the user is shown the time that was lowest between the two and so on for all other times the game is played.

#### Closing Title

- A “Completed!” title is displayed once all the cards have been matched. This informs the user that they have successfully reached the end of the game.

#### Restart Button

- A restart button symbol is shown at the same time as the “Completed!” title and the high score. This allows the user to know that they have the option of playing again by clicking on it. The restart button will remove the high score, “Completed!” title, reset the timer and covertly re-randomise the card’s order. This button is an easy and convenient way for the user to play the game again.

#### Colours

- The colours used for this game were: rgba(0, 0, 0, 0.527), brown, rgb(15, 250, 15), green-yellow and dark-green. The colour rgba(0, 0, 0, 0.527) was used for the modal, to help make the start button stand out clearly to the user. Brown, rgb(15, 250, 15), green-yellow and dark-green were used to make the game resemble the colours of a jungle theme in order to match the fact that zoo animals were being used.

#### Font

- The Pangolin font was used to add style to the design of the game. It was also used because the font is legible so users would have no difficulty reading any of the text present.

# Technologies Used

### HTML

- The project used HTML to create the basic structure of the game.

### CSS

- The project used CSS to add the design to the basic HTML structure.

### JavaScript

- The project used JavaScript to add functionality to the game.

### jQuery

- The project used jQuery to speed up the process of adding functionality to the game.

### Chrome Development Tools

- The project used Chrome Development Tools to see how the game looked on different screen sizes and to help identify areas of the code that required editing.

### Balsamiq Wireframes

- The project used Balsamiq Wireframes to create mockups on how the game aimed to look across different sized devices, to the user, on completion.

### Markup Validation Service

- The project used W3C Markup Validation Service to help check for coding errors that required correction in the HTML page.

### CSS Validation Service

- The project used W3C CSS Validation Service to help check for coding errors that required correction in the CSS page.

### Gitpod

- The project used Gitpod to write out the HTML and CSS code in its editor, as well as the README file. It also stored the images used and the wireframes. In addition, it was used to check the status of, add, commit and push the coded work to GitHub.

### GitHub

- The project used GitHub to store and save coded work from Gitpod as repositories. It was also used to deploy the website.

### Free SVG

- The project used Free SVG to provide free to use images for the animals and the question mark.

### Clipart-Library

- The project used Clipart-Library to provide free to use images for the animals.

### Snipping Tool

- The project used Snipping Tool to edit out the wireframes for this project.

### Font Awesome

- The project used Font Awesome to provide the restart icon that would be used to restart the game.

### Google Fonts

- The project used Google Font to provide the font style used for this project.

### Stack Overflow

- The project used Stack Overflow to provide information on the randomisation of cards for this project.

### Jasmine Testing

- The project used Jasmine Testing to test the use of booleans for this project.

# URL Links

The following links, from the third party websites, were used to create this project:

### Free SVG

- Mallard
  - https://freesvg.org/14thwarrior-cartoon-mallard
- Owl
  - https://freesvg.org/lemmling-cartoon-owl
- Peafowl
  - https://freesvg.org/studiofibonacci-cartoon-peacock
- Question mark
  - https://freesvg.org/vector-image-of-primary-question-mark-black-and-white-icon

### Clipart-Library

- Elephant
  - http://clipart-library.com/clipart/pkT8ERRir.htm
- Giraffe
  - http://clipart-library.com/clipart/p6iyk8bcn.htm
- Zebra
  - http://clipart-library.com/clipart/8cEjyrkKi.htm
- Zoo
  - http://clipart-library.com/clipart/292862.htm

### Font Awesome

- Restart icon
  - https://fontawesome.com/icons/redo-alt?style=solid

### Google Fonts

- https://fonts.google.com/specimen/Heebo?query=heebo&selection.family=Heebo

### jQuery

- https://jquery.com/download/

### Stack Overflow

- https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order

### Jasmine Testing

- https://cdnjs.com/libraries/jasmine

# Testing

### DOM

The JavaScript/jQuery code for the ready function was tested by placing console.log(“it worked”) inside the function. The webpage was refreshed and the console tab in the chrome development tools were opened. The string “it worked” was found present in the console tab after the DOM had been fully loaded. Afterwards, the relevant functions for the game were written inside this ready function. The webpage was refreshed again to test the ready function. It was found that all the other functions inside the ready function only occurred after the DOM was fully loaded.

### Click Events

The click event was applied to the start button, matching cards and the reset button. These were tested by playing through the game and clicking on these features to ensure they were clickable at the correct times. For instance, the start button was clicked on to check to see if it would be removed and start the timer; which it did upon testing. The matching cards were clicked on to ensure they flipped over to show the animal images and then flip back when they didn’t match or disappear when they did. The click event was also tested to ensure the rest of the cards couldn’t be clicked on whenever two cards had been shown already. This was done by clicking on a third and fourth card before the two animal images were removed. The results of this test showed that it wasn’t possible to click and flip over another card until the first two had been dealt with via the if condition. After all the cards had been matched, the restart button was tested by being clicked. Upon doing so, the timer restarted and the cards re-appeared shuffled for the user to start the game again.

### Start Button & Background Modal

The HTML code of the background modal and the start button was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code of the background modal and the start button was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the background modal was set at a height and width of 100% and the start button was set at a width of 100%. This was tested using chrome development tools to ensure its responsive design. To make the background modal and the start button fit for mobile screens, chrome development tools’ responsive screen was used to show how they looked at 320px. And to ensure the background modal and the start button’s size was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had the background modal and the start button’s size shown at each respective breakpoint.
The background modal and the start button were tested and found to be too large for sizes 576px and over. Therefore, they were reduced using the chrome development tools.
The JavaScript/jQuery code of the background modal and the start button was tested using both the elements and console tabs of the chrome development tools. Using a function, the start button was made to be clicked on in order to remove both the start button and it’s background modal as well as start the timer for the game. A console.log(“it worked”) was also added to the function and then called out so it would appear in the console tab of chrome development tools, had clicking on the start button been successful. So, the start button was clicked on to test it. As a result, the start button disappeared and the background modal was removed as the inline style of “display: none;” became present on the HTML in the elements chrome development tools’ tab. The timer also began counting up. In the console tab of chrome development tool, the string “it worked” also appeared.

### Main Image

The HTML code containing the main image was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code containing the main image was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the main image was set at a width of 40%. This was tested using chrome development tools to ensure its responsive design. To make this image fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure this image was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had this image shown at each respective breakpoint. The main image was found to be too large for screen sizes 768px and over. Therefore, they were decreased before they were used for the game.

### Main Title

The HTML code containing the main title was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code containing the main title was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the main title was set at a font size of 15vw. This was tested using chrome development tools to ensure its responsive design. To make this title fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure this title was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had this title shown at each respective breakpoint. The main title was tested as being too large for screen sizes from 576px onwards. Therefore, it was decreased as the screen sizes became bigger. The responsive screens from chrome development tools were used to see how the title looked at each of these breakpoints. These
smaller sizes fitted the screens better and therefore were used for the game.

### Timer

The HTML code of the timer was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code of the timer was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the timer was set at a font size of 10vw. This was tested using chrome development tools to ensure its responsive design. To make this timer fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure this timer was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had the timer shown at each respective breakpoint. The timer was tested as being too large for screen sizes from 576px onwards. Therefore, it was decreased as the screen sizes became bigger. The responsive screens from chrome development tools were used to see how the title looked at each of these breakpoints. These
smaller sizes fitted the screens better and therefore were used for the game.
The JavaScript/jQuery code of the timer was tested using both the elements and console tabs of the chrome development tools. Using a function, the timer was arranged to appear after the start button was clicked. A setInterval was used to make the timer start counting upwards one second at a time at a steady pace. A console.log(“it worked”) was added to the function and then called out so it would appear in the console tab of chrome development tools if it was working properly. To make sure that it was, the start button was clicked and the console tab was checked. The string “it worked” had appeared in the console tab. In addition, the id that had been assigned to this timer showed up in the HTML portion of the elements tab, with the time incrementing at the same rate as the game. The timer also appeared under the main title of the game and began incrementing one second at a time, upon clicking the start button.
The timer’s clearInterval was also tested to ensure it stopped counting once all the cards had been matched. This was done by using console.log(“it worked”) again for when the condition of (\$(".invisible").length === 12) had been met and by clearing the setInterval that was created prior. Then all the cards were matched in their pairs. On completion, the incrementing time had stopped at the last number it had reached, in both the game and the HTML portion of the elements tab in then chrome development tools.

### Matching Cards

The HTML code of the matching cards was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code of the matching cards was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the matching card images were set at a height and width of 80%. The size of the matching cards were set at a height of 130px and a width of 95px. These sizes were tested using chrome development tools to ensure its responsive design. To make the matching cards fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure the matching cards were large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had the matching cards shown at each respective breakpoint. At each of these breakpoints, the matching cards appeared too large. So using the styles section in the elements tab, each of these sizes were decreased bit by bit until they appeared to fit well on the respective screen size.
Jasmine testing was used to test the stopFlip variable to ensure it had been declared as false in the global scope. The stopFlip variable holds the value of the false boolean. stopFlip was tested to check if it was a string using expect(stopFlip).tobe(“false”). This test failed. Then the variable was tested as a boolean using expect(stopFlip).toBe(false). The test passed, ensuring that the code recognised false as a boolean and not as a string. This enabled the cards to flip only two at a time.
Chrome development tools was used to check that the .selected class was being added to the cards as they flipped over. Its elements tab showed this class being added as the cards were clicked. After two cards with this class had been flipped over, the (\$(".wholeCard.flip.selected").length === 2) if statement was checked to see if it was working by viewing the chrome development tools’ screen to see if the two cards would flip back on their own when not a match or disappear when a match. After the cards flipped back or disappeared, the elements tab showed the class disappear as instructed. So, the code was working.
The code if (stopFlip) return; was written to help prevent the .selected class from being added to an unflipped card, in case a user had clicked on a card before the first two had been flipped over. To test this, the game was played and a third card was clicked at the same time the first two card images were being shown. This third card didn’t get the .selected class added. As a result, once the first two cards had flipped over and removed their .selected classes, the code checking the length of this class was able to function and prevent the error of a card never flipping over from occurring.
The JavaScript/jQuery code was tested to ensure the cards were correctly matched by assigning all the cards, in the HTML file, with a data attribute named after their respective animal image. E.g. the cards with the elephant image were called data-image="elephant". Those with the giraffe image were called data-image="giraffe". Those with the zebra image were called data-image="zebra" etc. Using chrome development tools, the elements tab was used to locate the two cards with the same data attribute value. Once found, both these cards were clicked to flip over. Afterwards the .invisible class was added. The responsibility of this .invisible class was to hide the visibility of the matched cards whilst maintaining the grid structure. The addition of this .invisible class, seen in the elements tab of the chrome development tools, demonstrated that the code was working as both of these card’s data were the same and were hidden from the game as a result.  
The JavaScript/jQuery code was tested to ensure that if the cards were not identical in their data attribute value, then they would be flipped back to fulfil the “else” in the if statement. This was tested by clicking on two cards with different data attribute values, with the help of the elements tab, and viewing the screen to see what happened next. The cards in this case were flipped back to their original state in showing the question mark image. So, the code written was able to identify when the data of the cards were the same and when they were not.
A setTimeout function lasting 600 milliseconds, was used to slow down the rate at which the unmatched cards were to flip back. This was tested by using a console.log(“it worked”) inside this function. Then, the webpage was refreshed and the console tab of the chrome development tools was monitored. After first, the console tab was empty. After some time, the string “it worked” displayed in the console. This demonstrated that the setTimeout function was working. Then the code for the unmatched cards replaced the console.log(“it worked”) which resulted in the unmatched cards only flipping back after 600 milliseconds had passed.
The shuffling of the cards was tested to see if it worked when the page was refreshed or when the restart button was clicked. The chrome development tools were open at the elements tab and the original listed order of the cards was noted down on a separate piece of paper. The webpage was refreshed and the listed order of the cards were also noted down. Both these orders were compared to each other and found to be not the same. This was repeated several times. Each of these times, the order of the cards were different. The same approach was applied when clicking the restart button. The order of the card’s list, displayed in the elements tab, changed every time the restart button was clicked. As a result, both refreshing the page and clicking the restart button were proven able to shuffle the card’s order.

### High Score

The HTML code of the high score section was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code of the high score section was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the high score section was set at a font size of 15vw. This was tested using chrome development tools to ensure its responsive design. To make this high score section fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure this high score section was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had the
high score shown at each respective breakpoint. The high score section was tested as being too large for screen sizes from 576px onwards. Therefore, it was decreased as the screen sizes became bigger. The responsive screens from chrome development tools were used to see how the completed sign looked at each of these breakpoints. These smaller sizes fitted the screens better and therefore were used for the game.
The JavaScript/jQuery code of the high score section was tested using the elements, sources and application tabs of the chrome development tools. The role of the high score section was to use local storage to keep a record on the amount of time spent completing the game per attempt, so it could identify the fastest amount of time used and display that as the high score.
The elements tab showed the high score’s HTML appear on completion of the game. It also showed the high score’s HTML disappear once the game was restarted. This demonstrated its respective code functioning correctly.
The local storage was tested using the “debugger” tool. The “debugger” tool was placed before the code line: “if (localStorage.getItem("fastestTime") === null)”. This was used to step through the code in the sources tab of the chrome development tools for testing. The “localStorage” portion of the code was hovered over with the cursor to see it’s value. After the first play, the value shown was “null”. Then the code was stepped over to the code block that was only expressed if the “if (localStorage.getItem("fastestTime") === null)” was true. As a result, the “if (localStorage.getItem("fastestTime") === null)” line of code was working. The rest of the code block was able to occur with the high score of 18 showing.
When the script was resumed in the chrome development tools, the application tab was clicked on to check what was present. 18 was found in this tab. So, the amount of time taken to play the game had been successfully stored using local storage.
The high score was tested to ensure that as long as the player had played the game more than once, their quickest time would always be shown as their high score. The “let getItem = parseInt(localStorage.getItem("fastestTime")); let bestTime = Math.min(getItem, timeDuration); let setItem = localStorage.setItem("fastestTime", bestTime);” code, in the else statement, was written to achieve this. This was tested by placing the “debugger” tool on top of this else statement. The game was then played a second time to end with a different time score. In this case, it was 29. The sources tab was viewed to see whether the debugger would move to the if or else statement when stepping through the code. The else statement was expressed. This showed that the else code block was working as the local storage value as no longer null; it was 18.
The local storage stored the high score as a string. This needed to be converted to a number so it could be compared with the “timeDuration” value of 29, so “parseInt()” was used. The code was stepped through further and the “getItem” variable was hovered over to see what the value was. It’s value was 18 so this was functioning correctly. The “timeDuration” was hovered over to ensure its value of 29 was the same as the timer, which it was.
The “bestTime” variable was hovered over to ensure that “Math.min()” had worked correctly in bringing out the lower number between both the “getItem” and “timeDuration” variables. When hovered over, the “bestTime” value was 18, meaning the “Math.min()” was working. Lastly, the “bestTime” variable was set to be the new item to be stored in local storage. This was tested by hovering over the “bestTime” variable written in the “localStorage.setItem("fastestTime", bestTime);” portion of the code. The value seen here was 18. In addition, the application tab was accessed to see what value was stored. 18 was present meaning the lower number, between 29 and 18 had been stored. This also meant that the “bestTime” variable, placed in “\$("#highScore").html(`High Score: ${bestTime}`).hide();”, showed the correct result.
The game was played multiple times afterwards using the chrome development tools, to further check and confirm the high score was functioning correctly; which it did.

### Completed Sign

The HTML code of the completed sign was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code of the completed sign was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the completed sign was set at a font size of 15vw. This was tested using chrome development tools to ensure its responsive design. To make this completed sign fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure this completed sign was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had the completed sign shown at each respective breakpoint. The completed sign was tested as being too large for screen sizes from 576px onwards. Therefore, it was decreased as the screen sizes became bigger. The responsive screens from chrome development tools were used to see how the completed sign looked at each of these breakpoints. These smaller sizes fitted the screens better and therefore were used for the game.
The JavaScript/jQuery code of the completed sign was tested using both the elements and console tabs of the chrome development tools. Using a function, the completed sign was tested to see if it would appear once the length of the .invisible classes had reached twelve. A console.log(“it worked”) was added to this function and then called out so it could appear in the console had the function operated correctly. The cards were matched to produce twelve .invisible classes. Upon completion, the console was checked for the “it worked” string. This string was present and the completed sign had displayed on the game at the same time. The elements tab of the chrome development tools also showed the respective id for the completed sign within the HTML area. Thus showcasing that the function was operating correctly.
A setTimeout function lasting 600 milliseconds, was used to slow down the rate at which the completed sign was shown. This was tested by using a console.log(“it worked”) inside this function. Then, the webpage was refreshed and the console tab of the chrome development tools was monitored. At first, after the game was played and all cards had been matched, the console tab was empty. Later, the string “it worked” displayed in the console. This demonstrated that the setTimeout function was working. The code for the completed sign replaced the console.log(“it worked”) which resulted in this sign only showing after 600 milliseconds had passed, after finishing the game.

### Restart Button

The HTML code of the restart button was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
The CSS code of the restart button was copied and pasted into the direct input section of the CSS Validation Service to check for errors. No errors were found.
The size of the restart button was set at a font size of 10vw. This was tested using chrome development tools to ensure its responsive design. To make the restart button fit for mobile screens, chrome development tools’ responsive screen was used to show how it looked at 320px. And to ensure the restart button was large enough and fit well on larger screen sizes, the responsive screen was incremented at different ascending breakpoints, inspired by Bootstrap. These included: 576px, 768px, 992px and 1200px. Each of these breakpoints were displayed using chrome development tools and had the restart button shown at each respective breakpoint. The restart button was tested as being too large for screen sizes from 576px onwards. Therefore, it was decreased as the screen sizes became bigger. The responsive screens from chrome development tools were used to see how the restart button looked at each of these breakpoints. These smaller sizes fitted the screens better and therefore were used for the game.
The JavaScript/jQuery code of the restart button was tested using both the elements and console tabs of the chrome development tools. Using a setTimeout function, the restart button was tested to see if it would appear once the length of the .invisible classes had reached twelve and 600 milliseconds had passed after that. A console.log(“it worked”) was added to this function and then called out so it could appear in the console had the function operated correctly. The cards were matched to produce twelve .invisible classes. Upon completion, the console was checked for the “it worked” string. At first, the console was empty. After 600 milliseconds, the string was present and the restart button had displayed on the game at the same time.
The elements tab of the chrome development tools also showed the respective class for the restart button within the HTML file. It also showed aria-hidden="true" when its element was made visible. In addition, the restart button was tested to ensure clicking on it reset the game by shuffling the cards and starting the counter from one again. This was done by creating and calling out a different function with another console.log(“it worked”) within it. The button was clicked on and both the element and console tabs of the chrome development tools were checked. The elements tab showed the removal of the restart button, the re-counting in ascending order of the timer and the changing of the matching card’s previous position. The console tab displayed the string “it worked”. The game also reflected these same changes. Thus showcasing that this function was operating correctly.

### User Stories

The user stories were tested to see if they were all met. The first user story was tested by assigning multiple participants to play through the game without the use of the chrome development tools. This was to prevent showing any information, e.g. displaying the location of each animal card, that may enable the participants to cheat. The participants were interviewed on how easy they found navigating through the game. All of them expressed that it was easy to understand how to play the game and had no issues doing so.
The second user story was tested by informing the participants to identify the amount of time they took completing the game, based on the timer provided. All the users were able to find where in the game the amount of time being taken was being displayed and become aware of how long they took to complete the game.
The third user story was tested by tasking the participants to replay the game and attempt to beat their previous time. This led to all the participants clicking/tapping on the restart button, which shuffled the card’s order to play the game again, not knowing where the animal images were located. After playing the game again, the participants were asked about how they felt trying to match the cards at a faster rate. All of them responded that they really enjoyed the challenge. A few were even happy as they were able to outperform their previous time.

# Deployment

On completion in creating this project, the following procedures were taken in order to deploy the website:

1. First, the repository section on GitHub was entered and the project link containing the website and wireframes to be deployed, was clicked on.
2. Then, the settings tab underneath the “Milestone-Project-2” heading, was clicked on to enter its settings.
3. Next, the settings page was then scrolled down until the sub-title “GitHub Pages” was found.
4. Later, under “GitHub Pages” a sub-title called “Source” was located. Under the “Source” sub-title was a button labelled “None”. This “None” button was clicked on to reveal a dropdown menu.
5. In the dropdown menu the option called “master branch” was selected.
6. After selecting the “master branch”, the webpage refreshed automatically and deployed the website.
7. Finally, the link to this newly deployed website, was taken from the “GitHub Pages” section.

# Running the code locally

In order to locally run this code, this project would have to be cloned from GitHub using the following steps:

1. First enter the list of repositories section of GitHub.
2. Then, under the repository name of the project, click on the “Clone or download” button.
3. Next, when in the dropdown “Clone with HTTPS” section click the clipboard button next to the URL to copy the repository's clone URL.
4. Afterwards, enter into the local IDE and open Git Bash.
5. Then, change the current working directory into the location of where the cloned directory is to be made.
6. Next, type in “git clone” and paste in the URL that was copied earlier from the “Clone with HTTPS” section i.e.:
   - git clone: https://github.com/VioletViolaVi/Milestone-Project-2.git
7. Lastly, tap the enter button on the keyboard to create the local clone.

# Credits

### Content

- The responsive breakpoints used were recommended by Bootstrap.

### Media

- The images used on this website were taken from Free SVG and Clipart-Library.

### Acknowledgements

- I received inspiration for this project from the BrandedBrothers card matching game.
  - www.brandedbrothers.com
- I received inspiration for this project from the following YouTube videos:
  - https://www.youtube.com/watch?v=zEo42QuZPJw&list=LL2enFJYYjL4OCp7Cu37PM2g
  - https://www.youtube.com/watch?v=Eq4bUSWGv1Y&list=LL2enFJYYjL4OCp7Cu37PM2g&index=5&t=858s
  - https://www.youtube.com/watch?v=ZniVgo8U7ek&t=474s
  - https://www.youtube.com/watch?v=bbb9dZotsOc&t=1630s
  - https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=1907s
