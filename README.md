# Paws&Laws
Project by HoshiWoozy - Chong Yu Xiang, Dzann Ku Xin Hui

This is the official website for Paws&Laws, a story-based video game on a mobile app. The game is about a cat who interrogates fellow pets like an attorney to uncover what happened to their owner, where the player can decide the cat's actions to change the course of the story and discover different endings. This website serves as the main website for the game, providing all necessary information and services relating to the game.

## Design Process
This website is targeted at both players of the app and those interested in trying the game.

### User Stories
As a regular player of Paws&Laws, I want to be able to see an update log for the app/website, so that I can keep up with the newest features.

As someone interested in learning about the Paws&Laws app, I want to see information of the game and its story, so that I can gain interest in the game.

As someone who wants to start playing the game, I want to be able to download the game from the website, so I can start playing it conveniently.

As someone looking to redeem products, I want the website to have a shop, so that I can use my points earned from playing the game.

## Features
**Feature 1 - Navigation Bar**
Allows users to seamlessly transition from section to section within the website by automatically scrolling towards the selected section. The navigation bar is always fixed at the top of the screen so that the user can always access it.

**Feature 2 - Download Button**
Allows users who are looking to play the game to download the game. When the button is pressed, a download page is brought up where the app downloads. Once the download is complete, the user is redirected to the app to start playing.

**Feature 3 - Character Section**
Allows users interested in the world of Paws&Laws to discover information about the characters who appear in the game. Each character has a portrait of them along with their name, role in the story, and some background information. The portraits enlarge when the cursor hovers over them to add animation and an interactive effect to browsing the site. The information on each character is worded in a way that immerses the reader in the story of the game and personality of the characters, making them interested in playing the game.

**Feature 4 - Update Log**
Allows users to see a list of updates made to the mobile app or website. Each update has a title and date on it for easy identification. This section is for users who want to quickly check the website to see if the game has any new features to discover if the website has new shop items, etc. 

**Feature 5 - Points Shop**
Allows users to redeem useful items using points they've earned from playing the game. If the user has not signed in, the user is unable to purchase anything and is reminded to sign in if attempting to purchase. Once signed in, the user can click on the buy button, where a popup appears asking the user to confirm the order, including information on how many points they will have remaining after the purchase. The purchase only goes through if the user confirms the order. If the user does not have enough points to purchase the selected item, the page will stop them and remind them of their point amount.

**Feature 6 - Sign In**
Allows users to sign in to the account that they use to play Paws&Laws. Signing in allows the user to have view and use their points that they earned from playing the game. The user cannot use the shop until they complete this feature.

## Technologies Used
**HTML** - Used to create the body of the main page and download the page

**CSS** - Used to give the pagea layout, styling ,and animations

**JavaScript** - Used to create a working navigation bar, sign-in, and shop system

**[Lottie](https://lottiefiles.com/)** - Used to add an animated downloading visual to the download page

**[Random User Generator](https://randomuser.me/)** - API used to add the sign in function

**[Adobe Illustrator](https://www.adobe.com/sg/products/illustrator.html)** - Used to create the Paws&Laws logo

**[Krita](https://krita.org/en/)** - Used to create the character drawings

**[IbisPaint](https://ibispaint.com/?lang=en-US)** - Used to create shop images

## Testing
1. Navigation Bar:
- Click on each button and verify that the website scrolls smoothly to the correct section with the section title in view

2. Shop:
- Click on a buy button without signing in and verify that a message appears telling the user to sign in
- Click on a buy button after signing in and verify that a confirmation message appears, including correct values of the item cost and points after purchase
- Click cancel on the confirmation message and verify that no points have been deducted
- Click OK on the confirmation message and verify that the correct number of points have been deducted
- Click on a buy button without sufficient points and verify that a message appears telling the user that they do not have enough points, and the purchase is canceled

3. Sign in:
- Click on sign in, verify that a profile image, username, email, and point count appear

### Other bugs
Navigation bar does not scale properly on other devices

## Credits
All text and images used in this project are original
