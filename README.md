* Optional exercise for intermediate level

** 4a

```
<div class="play-btn" id="rock">✊</div>
<div class="play-btn" id="paper">🤚</div>
<div class="play-btn" id="scissors">✌️</div>
```

** 4b

In order for us to interact with elements in the DOM, we need to declare those elements in our Javascript file using variables.

Let’s set our variables on lines 5, 6, and 7 to their respective elements :
```
  // const rock = '?';
  // const paper = '?';
  // const scissors = '?';
```

- First we need to figure out which elements we need to interactive with in our Javascript! Check out the “outcome” above and our index.html to see which of the elements change or move in our project.
- Each of these elements already have an id! This makes it easier for us to declare these elements in our javascript by using the getElementById method on our document object.

Note: Don't forget to remove (or comment) playBtn on line 15 and 18

** 4c
Uncomment line 54 to ensure that your hand is no longer random but corresponds to your choice.
```
// let choice1 = event.target.innerText;
```
Note: you can delete or comment line 53. It is no longer useful.

** 4d

You will no longer need one listener but 3 listeners. One for each button. Delete the previous listener and replace it with the 3 appropriate listeners
