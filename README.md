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
<img src="wireframes/img/1.mobile.PNG" alt="Screenshot of how the game looks on a mobile before starting.">
<img src="wireframes/img/2.mobile.PNG" alt="Screenshot of how the game looks on a mobile with no card matches.">
<img src="wireframes/img/3.mobile.PNG" alt="Screenshot of how the game looks on a mobile and with a card match.">
<img src="wireframes/img/4.mobile.PNG" alt="Screenshot of how the game looks on a mobile once completed, with the user's time spent and a restart button.">
<img src="wireframes/img/5.tablet.PNG" alt="Screenshot of how the game looks on a tablet before starting.">
<img src="wireframes/img/6.tablet.PNG" alt="Screenshot of how the game looks on a tablet with no card matches.">
<img src="wireframes/img/7.tablet.PNG" alt="Screenshot of how the game looks on a tablet with a card match.">
<img src="wireframes/img/8.tablet.PNG" alt="Screenshot of how the game looks on a tablet once completed, with the user's time spent and a restart button.">
<img src="wireframes/img/9.desktop.PNG" alt="Screenshot of how the game looks on a desktop before starting..">
<img src="wireframes/img/10.desktop.PNG" alt="Screenshot of how the game looks on a desktop with no card matches..">
<img src="wireframes/img/11.desktop.PNG" alt="Screenshot of how the game looks on a desktop with a card match.">
<img src="wireframes/img/12.desktop.PNG" alt="Screenshot of how the game looks on a desktop once completed, with the user's time spent and a restart button.">


# Wireframe and Final Game Differences

For the final finished game product, an image of a group of cartoon zoo animals was added at the top of the game’s webpage. This was added because it was important to ensure that the user could quickly understand what the game was about and avoid confusion. 

The word “Timer” was changed to “Time” as it was more reflective on what was happening in the game. As the time shown was counting up in ascending order, using “Timer” became less accurate as it was not counting down a restricted length period. So “Time” was used to provide more accuracy. It was also better at displaying the time as a score that users got on completion of the game.

The number of cards used for the game was reduced from 40 to 12. This was done to prevent losing the interest of the users. By having a lower number of cards used, the user would receive rapid entertainment when they were successful in finding all matches, which would happen quickly due to the fewer cards. This would help users become more excited, making them want to play again.  

The opening modal was changed to one button labeled “Start”. This was because it was simpler and easier to understand that tapping/clicking on this button would start the game. It was not necessary to make it into a sentence for the button. Users already know that they need to tap/click on the screen to interact with any software.

The closing modal was also edited. The time was moved to be above the “Completed” sign so that the sign could be in clear centre view of the user. The restart button was also changed to a symbol. This was done so it would take up less space and be easily read by more users as its symbol is universally known to mean restart. 

The way the time was displayed was changed. The counter was made to count past 59 seconds without the use of a digital clock. This was done because the time shown after completing the game was also used to show the user’s score. Therefore, allowing the time to be displayed as a whole number past 59 was a better option.


# Features
### Existing Features
#### Modal
- A modal was added to be shown at the start of this game. The modal acts as a placeholder for the start button. It makes it visually clear to the user that they are about to begin the game and therefore should get ready.
#### Start button
- The start button was added and placed inside as part of the game’s modal. Clicking this button starts the game as well as the timer. This button was placed in the centre to be in clear view of the user.
#### Logo image
- The image seen at the top of the webpage is a group of cartoon zoo animals. This acts as the logo for the game. It gives the user an indication on what images they should expect to see when they click on the cards.
#### Opening title
- The beginning title, “Sadie’s Zoo”, is a short and clear explanation on what the game is about. This helps maintain the user’s interest as they are not bombarded with information at the start that would make them not want to play the game. As a result, they are more likely to further engage with this activity.
#### Cards
- The cards each hold two images. Before they are clicked on and flipped, all the cards are seen with a question mark image on them. After the cards are clicked on and flipped, each card is shown to have an image of a cartoon zoo animal. 
- Every two cards has a picture of the same zoo animal. This is so the user will be able to find a pair of cards that match with the same zoo animal on them. Once a pair has been found, the cards will disappear. If not, they will flip back to displaying their question mark image side. 
- All the cards are seen with a question mark image first because they all need to look the same to challenge the user into finding the correct animal image pairs.
#### Timer
- The timer displays a counter that counts from zero at the start of the game. It shows the amount of time the user used to complete the card matching game. This counter counts in ascending order until the game is completed. If the game is restarted, the counter reverts back to zero and counts again. 
- The timer also acts as a score. As it shows the user how much time they took, it makes them want to try again and see if they can complete the game quicker.
#### Closing title
- A “Completed!” title is displayed once all the cards have been matched. This informs the user that they have successfully reached the end of the game. 
#### Restart button
- A restart button symbol is shown at the same time as the “Completed!” title. This allows the user to know that they have the option of playing again by clicking on it. The restart button will covertly re-randomise the card’s order and reset the counter back to zero. This button is an easy and convenient way for the user to play the game again.   
#### Colours
- The colours used for this game were: rgba(0, 0, 0, 0.63), brown, rgb(15, 250, 15), green-yellow and dark-green. The colour rgba(0, 0, 0, 0.63) was used for the modal, to help make the start button stand out clearly to the user. Brown, rgb(15, 250, 15), green-yellow and dark-green were used to make the game resemble the colours of a jungle theme in order to match the fact that zoo animals were being used.
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


# Testing
### Markup Validation Service
The HTML code was copied and pasted into the direct input section of the Markup Validation Service to check for errors. No errors were found.
### CSS Validation Service
The CSS code was copied and pasted into the direct input section of CSS Validation Service to check for errors. No errors were found.
### Chrome Development Tools
Chrome Development Tools were used to check if the image elements were shuffled upon clicking on the restart button and entering the game’s webpage for the first time.
They were also used to test if the classes were being added or removed at the required times. For instance, the Elements tab was clicked on and the list of the image elements were inspected. A click event was added to each of these images as they contained the “.wholeCard.flip” classes. Upon clicking on these images, a class called “.selected” was to be added to make the images clicked on contain the “.wholeCard.flip.selected” classes. The element’s section of the Chrome Development Tools were used to check if all three of these classes were added. By testing this and attaining the correct result, the rest of the code was able to proceed by measuring the length of two elements containing all three of these classes and then target them separately. Chrome Development Tools were then used to check if these classes were removed, after the “.data()” pair was checked for a match. If there was a match, the “.hide()” class was added. If not, the “.selected” class was removed. So, Chrome Development Tools was used to ensure the correct classes were added and removed at the correct times in order to eliminate errors and allow the code to continue without any issues occuring.
### Console.log()
In the console section of the Chrome Development Tools, “console.log()” was used to ensure functions were being returned and called out. “console.log()” was also used to showcase the values of the declared variables. For example, this included using “console.log(cards)” inside the “mixingUpCards()” function, to show that this was targeting the matching cards in order to mix them up after every gameplay. “console.log()” was also used in conjunction with “typeof()” to identify the type of data the respective code was. All “console.log()” uses were removed from the javaScript page, on completion of this project.  
### Jasmine Testing
The stopFlip variable holds the value of the false boolean. stopFlip was tested to check if it was a string using “.tobe(“false”)”. This test failed. Then the variable was tested as a boolean using “expect(stopFlip).toBe(false)”. The test passed, ensuring that the code recognised false as a boolean and not as a string. This enabled the cards to flip only two at a time. 
### Start and Reset Buttons
The start button was tested to ensure the background modal and the start button disappears upon clicking on the start button and that the card’s order had been randomised. This was tested by manually clicking on the created start button to see if the “.hide()” jQuery method was applied. The elements tab in the chrome development tools were checked. This test was successful as it was found that an inline CSS style of “display:none;” was added and made the modal and start button disappear.
The reset button was tested to see if clicking on it re-randomised the cards order when starting the game again. This was checked on chrome development tools where it was found that the elements containing the animals all had changed their previous positions when they reappeared, after the restart button was clicked.


# URL Links
The following links, from the third party websites, were used to create this project:
### Free SVG
- Mallard
  * https://freesvg.org/14thwarrior-cartoon-mallard
- Owl
  * https://freesvg.org/lemmling-cartoon-owl
- Peafowl
  * https://freesvg.org/studiofibonacci-cartoon-peacock
- Question mark
  * https://freesvg.org/vector-image-of-primary-question-mark-black-and-white-icon
### Clipart-Library
- Elephant
  * http://clipart-library.com/clipart/pkT8ERRir.htm
- Giraffe
  * http://clipart-library.com/clipart/p6iyk8bcn.htm
- Zebra
  * http://clipart-library.com/clipart/8cEjyrkKi.htm
- Zoo
  * http://clipart-library.com/clipart/292862.htm
### Font Awesome
- Restart icon
   * https://fontawesome.com/icons/redo-alt?style=solid 
### Google Fonts
- https://fonts.google.com/specimen/Heebo?query=heebo&selection.family=Heebo
### jQuery
- https://jquery.com/download/
### Stack Overflow
- https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order 


# Deployment 
On completion in creating this project, the following procedures were taken in order to deploy the website:
1) First, the repository section on GitHub was entered and the project link containing the website and wireframes to be deployed, was clicked on.
2) Then, the settings tab underneath the “Milestone-Project-2” heading, was clicked on to enter its settings.
3) Next, the settings page was then scrolled down until the sub-title “GitHub Pages” was found.
4) Later, under “GitHub Pages” a sub-title called “Source” was located. Under the “Source” sub-title was a button labelled “None”. This “None” button was clicked on to reveal a dropdown menu.
5) In the dropdown menu the option called “master branch” was selected.
6) After selecting the “master branch”, the webpage refreshed automatically and deployed the website.
7) Finally, the link to this newly deployed website, was taken from the “GitHub Pages” section.


# Running the code locally
In order to locally run this code, this project would have to be cloned from GitHub using the following steps:
1) First enter the list of repositories section of GitHub.
2) Then, under the repository name of the project, click on the “Clone or download” button.
3) Next, when in the dropdown “Clone with HTTPS” section click the clipboard button next to the URL to copy the repository's clone URL.
4) Afterwards, enter into the local IDE and open Git Bash.
5) Then, change the current working directory into the location of where the cloned directory is to be made.
6) Next, type in “git clone” and paste in the URL that was copied earlier from the “Clone with HTTPS” section i.e.: 
   - git clone: https://github.com/VioletViolaVi/Milestone-Project-2.git
7) Lastly, tap the enter button on the keyboard to create the local clone.


# Credits
### Content
- The responsive breakpoints used were recommended by Bootstrap.
### Media
- The images used on this website were taken from Free SVG and Clipart-Library.
### Acknowledgements
- I received inspiration for this project from the BrandedBrothers card matching game.
  - www.brandedbrothers.com
- I received inspiration for this project from the following youtube videos:
  - https://www.youtube.com/watch?v=zEo42QuZPJw&list=LL2enFJYYjL4OCp7Cu37PM2g
  - https://www.youtube.com/watch?v=Eq4bUSWGv1Y&list=LL2enFJYYjL4OCp7Cu37PM2g&index=5&t=858s
  - https://www.youtube.com/watch?v=ZniVgo8U7ek&t=474s
  - https://www.youtube.com/watch?v=bbb9dZotsOc&t=1630s
  - https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=1907s