# DINO DANCE
## An arcade-style musical rhythm game (made with P5.js, HTML & CSS)
**BACKGROUND:**

This project is a culmination of 2 weeks of intensive learning of HTML, CSS and Javascript, and a celebration of the great arcade games of the 80s, 90s and early 2000s.
It was an opportunity to practise and implement core concepts whilst learning to code a project from start to finish in a short time frame.

**THE GOAL:**

1. develop a fully playable and rendered game in just 4 days.
2. optional challenge of making game 2 player
3. design logic for winning with visual feedback
4. include separate HTML, CSS and JS files
5. if required, use Javascript for DOM manipulation
6. use P5.js library
7. deploy via Github

**RESULT:**

This project began on Monday the 28th of October 2019 and was finished for presentation by the end of Thursday the 31st of October 2019.
It is a musical rhythm game which draws inspiration from games such as 'Dance Dance Revolution' and 'Guitar Hero' - childhood classics of mine.
Although a reasonably straightforward game play-style, the simplistic nature of the mechanics provided a perfect canvas for practising different functions with Javascript and P5.
The final game is fairly juicy (still has plenty of room for improvement) and very much playable - a result I'm proud to publish and would have happily played in my childhood.
> This project was voted best in class at Ironhack Berlin Oct 2019.

**INSTRUCTIONS:**

- In this 2 player game (also playable solo), wait for the fruits to fall from the sky and press the correct key for the corresponding fruit when they superimpose on their shadows
- For player 1 these are Q,W,E,R and for player 2 these are U,I,O,P
- The accuracy of when the keys are pressed affect the amount of points collected: 10 points for good hits, 15 points for great hits and 20 points for perfect hits (key is pressed when fruit is exactly superimposed over its shadow)
- Keep the STREAK going and built up a score multiplier! 
  - A streak of 15 consecutive hits will activate a 1.4X multiplier indicated by a bouncing red flame, your score changing color and your dinosaur character dancing faster! 
  - Achieve 30 consecutive hits for a whopping 2X multiplier with a blue flame, blue score color and your dinosaur will dance even faster

**POTENTIAL IMPROVEMENTS & BUGS:**

Due to the short time frame in which this game was made, there are a number of features and functions which could be improved:
1) Despite the javascript accounting for the music's timing and rate of fruit generation, the fruit steadily move out of sync with the music due to flaws in the code. This would be the first point of improvement for a more enjoyable gaming experience.
2) The visual feedback for seeing score increases, successful hits and the active streak could be greatly improved. Players are often too focused on the incoming fruit and their keys to notice what score they're on and what streak they are trying to maintain (just make it more juicy!).
3) I have yet to implement different songs to the game such as the Rock and RnB options indicated on the game homescreen.
4) With more time, I would have added a more interactive introduction animation and a highscore functionality to provide a more competitive element to the game.
