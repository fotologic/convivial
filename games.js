/*
  Convivial: the games.
  This file is the single source for the site, the board view and the printable cards.
  Edit the words here and every view changes with them.

  players.min / players.max : smallest and largest group (max 0 means no upper limit)
  players.pairs             : true if a bigger group can split into pairs and all play
  minutes                   : rough length of one round
  talk                      : "none", "little" or "lots"
  closing                   : true for Last Look, which is kept out of the random draw
*/
window.CONVIVIAL_GAMES = [
  {
    "id": "in-tune",
    "title": "In Tune",
    "intro": "One player keeps a secret. Everyone else works out, without being told, what makes some pictures fit and others not.",
    "need": "a pile of photographs, and at least four players (one keeper of the secret, and three or more others).",
    "steps": [
      "One player is the Keeper. The Keeper thinks of a secret rule about what makes a picture fit. They would need to have a good understanding of the pictures in the pile. For example, \"someone is looking at something,\" or \"there are no people in it.\" The Keeper tells no one.",
      "To start you off, the Keeper lays down one picture that fits (the “Yes” column) and one that does not (the “No” column).",
      "The other players take turns to draw an image. The Keeper gives a thumbs up if it fits the secret rule, or a thumbs down if it does not. Images are placed in the correct column.",
      "Watch the two columns grow. Choose a picture to test an idea about what the rule might be.",
      "Important: Don’t guess the rule out loud. The Keeper never tells you and it stays a secret.",
      "The game ends when three pictures in a row get a thumbs up, each one placed by a different player. That means you have all found the feeling of the rule at the same time. Stop there."
    ],
    "tip": "With more players it is easier to end. With only four, all three of you have to be in tune at once.",
    "players": {
      "min": 4,
      "max": 0,
      "pairs": false
    },
    "minutes": 15,
    "talk": "none",
    "closing": false
  },
  {
    "id": "on-loan",
    "title": "On Loan",
    "intro": "A pile of photographs sits in the middle. It belongs to everyone. You may hold onto one picture at a time, then let it go for someone else.",
    "need": "a pile of photographs in the middle (more pictures than people), and a group of players.",
    "steps": [
      "To start, each player takes one picture from the pile. Remember which one it is. For now, it’s yours to hold.",
      "You may only ever hold one picture at a time. No hoarding.",
      "Whenever you like, put your picture back in the pile and take a different one. When you put yours back, do not watch who picks it up next.",
      "Keep doing this for as long as the game lasts. Swap often, or hold on to one you love for a while. That choice is yours.",
      "Letting a loved picture go, when another one in the pile is tempting you, is part of the game.",
      "At the end, everyone stops and holds the one picture in their hand. Look for the picture you took at the very start. See where it has ended up, and who is holding it now. You will never know how far it travelled to get there, and that is fine."
    ],
    "tip": "",
    "players": {
      "min": 3,
      "max": 0,
      "pairs": false
    },
    "minutes": 10,
    "talk": "none",
    "closing": false
  },
  {
    "id": "make-a-world",
    "title": "Make a World",
    "intro": "Together you build a world out of pictures. It can be as small as a house or as big as a planet. You decide what everything means as you go.",
    "need": "a pile of photographs, a group of players, and a space to build on (a tabletop for a small world, the floor for a big one).",
    "steps": [
      "First, choose your space. A tabletop makes a small world you can all see at once. The floor makes a big world you can walk around.",
      "Lay down one picture to begin. This is the middle of your world. It means \"here.\"",
      "Take turns. Each new picture must be placed next to, or near, a picture that is already down.",
      "You decide what each picture means as you place it. It can be a place, or a view, or a feeling, or a sign. It can be near or far. There are no wrong meanings.",
      "Before you place a picture, look at what the others have put down, and let yours answer theirs. You are all building one world, so work it out together as you go.",
      "Do not decide the size at the start. Let the world show you what it is. It might turn out to be a few rooms, a town, or a whole planet.",
      "The finished world is not really the point. The talking and deciding you do while building it is the game. When you are done, look at it, take a photo of it if you like, and let it go."
    ],
    "tip": "",
    "players": {
      "min": 2,
      "max": 0,
      "pairs": false
    },
    "minutes": 20,
    "talk": "lots",
    "closing": false
  },
  {
    "id": "for-you",
    "title": "For You",
    "intro": "You find one picture that seems right for the person beside you, and give it to them. Your reason is always something you can see in the picture itself.",
    "need": "a pile of photographs, and a group of players sitting in a circle.",
    "steps": [
      "Sit in a circle. You will give a picture to the person on your left.",
      "Look through the pictures. Find the one you want to give to that person. Choose it just for them.",
      "Give it to them. As you hand it over, point to a specific part of the picture: a colour, a shape, a face, a small thing in the corner. That part is your reason.",
      "Your reason is always about something in the picture and never about the person. You are saying, \"I saw this and I am giving it to you.\"",
      "You do not need to explain in words. Choosing the picture and pointing to the part says it for you.",
      "Everyone gives one gift and the group makes sure everyone has received theirs.",
      "Each gift is given once. It stays with the person who received it. There is no swapping it back.",
      "It’s up to you whether or not you want to share how you feel about your gift."
    ],
    "tip": "",
    "players": {
      "min": 2,
      "max": 0,
      "pairs": false
    },
    "minutes": 10,
    "talk": "little",
    "closing": false
  },
  {
    "id": "the-oracle",
    "title": "The Oracle",
    "intro": "You each think of a question. Your partner draws a picture for you before they know what you are asking. Then you read the picture as its answer.",
    "need": "a pile of photographs and players in pairs.",
    "steps": [
      "Find a partner.",
      "Each of you think of a question, a worry, or something you have not decided. Choose something you are happy to say out loud, like an everyday choice. Keep private things for another time.",
      "At the same time, and without knowing the other's question, each of you draws one picture from the deck and hands it to your partner. The picture is chosen before either of you has revealed your question.",
      "Now each of you say your question out loud.",
      "Look at the picture you were given as if it holds the answer. Take your time. The picture knew nothing about your question, so whatever answer you find, you are the one bringing it.",
      "Tell your partner what you find. They can look at your picture too, and help you notice something you missed.",
      "Sometimes the picture seems to help a lot, and sometimes it seems to hold back. Sometimes your picture seems to fit your partner's question better than your own. All of that is part of the game."
    ],
    "tip": "With an odd number, make one group of three. Each person draws a picture for the person on their left.",
    "players": {
      "min": 2,
      "max": 0,
      "pairs": true
    },
    "minutes": 15,
    "talk": "lots",
    "closing": false
  },
  {
    "id": "the-silent-domino",
    "title": "The Silent Domino",
    "intro": "Together, create a chain of photographs. Each picture connects to the next, but nobody says why.",
    "need": "a pile of photographs for each player, and an extra pile in the middle.",
    "steps": [
      "Each player starts with their own small pile of photographs. Keep another pile face down in the middle.",
      "Draw one photograph from the middle and place it on the table to begin the domino.",
      "Take turns choosing a photograph from your own pile and placing it next to either end of the chain. Choose one you feel connects to the picture beside it.",
      "Don't explain your choice. The whole game is played in silence.",
      "If you can't find a photograph in your pile that you think fits, draw one from the middle pile, add it to your own, and skip your turn.",
      "Keep going until everyone has placed all their photographs. Then look at the chain you have made together. You may see connections no one intended."
    ],
    "tip": "",
    "players": {
      "min": 2,
      "max": 6,
      "pairs": false
    },
    "minutes": 15,
    "talk": "none",
    "closing": false
  },
  {
    "id": "keyhole",
    "title": "Keyhole",
    "intro": "Each player finds a small world inside a big picture, and frames it with a tiny window. Then everyone looks through all the windows before the pictures are revealed.",
    "need": "a pile of photographs, and a small card for each player with a square hole cut in it, about the size of a thumbnail.",
    "steps": [
      "Each player takes a card with a window in it.",
      "Look through the pile. Move your window slowly over the pictures, as if you were looking through a keyhole. Search for the most interesting small part you can find: a hand, a patch of light, a crack in a wall, a face in the background.",
      "When you’ve found it, lay the picture on the table with your card on top, so that only your small part shows through the window.",
      "When everyone has placed their card, walk round the table together in silence. Look only through the windows. Then, all at the same time, lift the cards. See how much was around each small thing. Did anyone choose a part you would never have noticed?"
    ],
    "tip": "You can play it the other way round. One player shows a detail through their window, and everyone else tries to find the picture it belongs to in a spread laid out on the table.",
    "players": {
      "min": 2,
      "max": 0,
      "pairs": false
    },
    "minutes": 10,
    "talk": "none",
    "closing": false
  },
  {
    "id": "soundtrack",
    "title": "Soundtrack",
    "intro": "Make the sound of a picture. The others find which one it is.",
    "need": "six to eight photographs laid face up in the middle, and a group of players.",
    "steps": [
      "Lay out the pictures face up where everyone can see them.",
      "Take turns. Secretly choose one of the pictures. Try not to stare at it, or you will give it away.",
      "Make the sound of your picture. Hum, tap, whistle, breathe, rustle, stamp. No words.",
      "Everyone else points at the picture they think you chose, all at the same moment.",
      "Show which one it was. If people pointed at different pictures, make the sound again and see if anyone changes their mind.",
      "A picture can be very quiet. You may choose to make very little sound at all, and let the others decide which picture is the quiet one.",
      "When everyone has had a turn, swap in new pictures and go again."
    ],
    "tip": "Pictures without people in them are often the most surprising to try.",
    "players": {
      "min": 3,
      "max": 0,
      "pairs": false
    },
    "minutes": 10,
    "talk": "none",
    "closing": false
  },
  {
    "id": "settle",
    "title": "Settle",
    "intro": "Together you arrange a line of pictures, in silence, between two opposite words. The game ends when the line settles and nobody wants to move anything.",
    "need": "a pile of photographs, two cards with a pair of opposite words written on them, and a long table or a stretch of floor.",
    "steps": [
      "Choose a pair of words, for example quiet and loud, inside and outside, private and public. Place the two word cards a long way apart. They are the two ends of the line.",
      "Deal out the pictures so that each player has three or four. In silence, place your pictures along the line, wherever you feel they belong.",
      "Once all the pictures are down, anyone may move any picture, including other people's. Move one picture at a time. If someone moves a picture and you disagree, you can move it back. If it keeps going back and forth, stop and look at why the other person keeps moving it.",
      "The game ends when the line has been still for as long as it takes everyone to breathe in and out ten times. Pay attention to the picture that ends up in the middle."
    ],
    "tip": "The words work best when they are not about what’s in the pictures. A photograph of a beach can be loud or quiet, private or public.",
    "players": {
      "min": 3,
      "max": 0,
      "pairs": false
    },
    "minutes": 15,
    "talk": "none",
    "closing": false
  },
  {
    "id": "stand-in",
    "title": "Stand In",
    "intro": "Use your body to become a picture. The others find which one you are.",
    "need": "six to eight photographs, laid face up, and a little space to move.",
    "steps": [
      "Lay out the pictures face up where everyone can see them.",
      "Take turns. Secretly choose a picture and make a shape with your body of something in it. Use as much or as little of your body as you like.",
      "Hold still, like a photograph.",
      "Everyone else points at the picture they think you are referencing with your pose.",
      "Then everyone looks closely at the thing you copied. How do you see it differently now that it’s also reflected in someone’s body?"
    ],
    "tip": "Hands often say more than faces.",
    "players": {
      "min": 3,
      "max": 0,
      "pairs": false
    },
    "minutes": 10,
    "talk": "little",
    "closing": false
  },
  {
    "id": "out-of-shot",
    "title": "Out of Shot",
    "intro": "Every photograph has edges. Together you decide what was just beyond them when the picture was taken.",
    "need": "one photograph placed in the middle of a large sheet of paper, pencils, and the rest of the pile.",
    "steps": [
      "Place one picture in the middle of the paper.",
      "Take turns. Choose an edge of the picture and add what you think was just outside it. You can draw it, write a single word, or place another photograph against the edge.",
      "Let what you add answer what the others have added. The space around the picture should become one place.",
      "Keep going until the picture is surrounded.",
      "Then cover everything except the photograph in the middle, and look at it again on its own."
    ],
    "tip": "",
    "players": {
      "min": 2,
      "max": 6,
      "pairs": false
    },
    "minutes": 15,
    "talk": "little",
    "closing": false
  },
  {
    "id": "the-grid",
    "title": "The Grid",
    "intro": "Together you lay out nine pictures in a square, three by three. Every picture must connect to every picture it touches.",
    "need": "a pile of photographs, a table, and a small group of players. You can also play on your own.",
    "steps": [
      "Lay down one picture to start the grid. It can go anywhere in the square.",
      "Take turns to add a picture next to one that is already down. Pictures touch along their sides, never at the corners.",
      "Each new picture must connect to every picture it touches. The connection can be anything you can see: a colour, a shape, a line that carries on across the edge, the same kind of picture, the same light.",
      "A corner picture touches two others, an edge picture touches three, and the middle picture touches four. The middle is the hardest place to fill, so you may want to leave it until last.",
      "If a picture stops fitting when its new neighbours arrive, you can swap it for another one from the pile.",
      "The grid is finished when you can say why every picture sits next to each of its neighbours. Take turns to point to a join and say what crosses it."
    ],
    "tip": "To test your grid, ask another group to scramble it while you look away. Can you rebuild it from the connections alone?",
    "players": {
      "min": 1,
      "max": 5,
      "pairs": false
    },
    "minutes": 15,
    "talk": "little",
    "closing": false
  },
  {
    "id": "the-missing-middle",
    "title": "The Missing Middle",
    "intro": "A grid of nine pictures has lost its centre. Find a picture that belongs there.",
    "need": "a grid of nine pictures, three by three.",
    "steps": [
      "Take the middle picture out of the grid and put it face down to one side.",
      "Everyone looks through the pile for a picture that could fill the empty space. It has to connect to all four pictures around it.",
      "Lay your possible pictures face up beside the grid.",
      "Try each one in the middle, one at a time. Look at all four joins each time.",
      "Decide together which one stays.",
      "Now turn over the picture that was there before. Is it still the best one?"
    ],
    "tip": "Sometimes no picture fits all four sides. Then you have to decide which side matters most.",
    "players": {
      "min": 2,
      "max": 6,
      "pairs": false
    },
    "minutes": 10,
    "talk": "little",
    "closing": false
  },
  {
    "id": "snap",
    "title": "Snap",
    "intro": "A fast game for two players, with a winner. Spot a connection between two pictures before the other player does.",
    "need": "forty photographs, two players, and a third person to be the Judge if you can find one. A timer helps.",
    "steps": [
      "Shuffle the pictures and deal twenty to each player. Hold your pictures face down in a pile. Don't look at them. Take turns to turn over your top picture and put it face up on a pile in front of you. Each player builds their own face-up pile.",
      "As soon as you see a connection between the two pictures on top of the face-up piles, shout \"Snap!\" and name it: \"both blue\", \"both looking left\", \"two circles\".",
      "If the other player agrees, you win both face-up piles. Put them at the bottom of your face-down pile. If they don't agree, the Judge decides. With no Judge, the piles stay where they are and play carries on. You can't name the same kind of connection twice in a row. If the last Snap was about colour, the next one has to be about something else: a shape, a gesture, the weather, the time of day.",
      "The game ends when one player holds all the pictures, or when the timer runs out. Then the player holding more pictures wins."
    ],
    "tip": "The game works best when neither player knows which picture comes next. No peeking at your own pile. At a table with an odd number, the person left over is the Judge.",
    "players": {
      "min": 2,
      "max": 2,
      "pairs": true
    },
    "minutes": 10,
    "talk": "little",
    "closing": false
  },
  {
    "id": "diptych",
    "title": "Diptych",
    "intro": "A game for two players. Take turns to make pairs of pictures that work together.",
    "need": "twenty photographs and two players.",
    "steps": [
      "Deal ten pictures each. Hold them so that you can see them and your partner can't.",
      "Player one lays down a picture.",
      "Player two looks through their pictures for one to pair with it, and places it beside the first. Player two chooses which side it goes on, left or right.",
      "Look at the pair together. Try swapping the two pictures over before you decide. A pair can change a lot when the pictures change places.",
      "Does it work? You both have to agree. If you do, the pair stays on the table. If not, player two can try another picture, or pass.",
      "Now swap roles. Player two lays down a picture and player one tries to make the pair.",
      "The game ends when neither player can make a pair the other accepts. Then look along the row of pairs you have made."
    ],
    "tip": "What makes a pair \"work\" is up to you. Deciding it together is the game. With three players, the third decides whether a pair works when the other two can’t agree.",
    "players": {
      "min": 2,
      "max": 2,
      "pairs": true
    },
    "minutes": 15,
    "talk": "lots",
    "closing": false
  },
  {
    "id": "the-edit",
    "title": "The Edit",
    "intro": "Twelve pictures become five. Take turns to decide what goes.",
    "need": "twelve photographs and a small group of players.",
    "steps": [
      "Lay the twelve pictures out face up where everyone can see them.",
      "In silence, take turns to remove one picture. Put it face up on a discard pile to one side.",
      "Once in the whole game, instead of removing a picture, you may rescue one from the discard pile and put it back.",
      "Stop when five pictures are left.",
      "Now you can talk. Put the five pictures in an order together, as if they were the pages of a small book.",
      "Look through the discard pile. Which picture do you miss?"
    ],
    "tip": "Rescues are often the most interesting moments. Notice who rescued what.",
    "players": {
      "min": 3,
      "max": 6,
      "pairs": false
    },
    "minutes": 15,
    "talk": "little",
    "closing": false
  },
  {
    "id": "pelmanism",
    "title": "Pelmanism",
    "intro": "A slow memory game. Turn over two pictures and find a connection between them.",
    "need": "twenty to thirty photographs and two to four players.",
    "steps": [
      "Shuffle the pictures and lay them all face down in rows.",
      "On your turn, turn over any two pictures so that everyone can see them.",
      "If you can point to a connection between them and the other players agree, keep the pair and take another turn.",
      "If you can't, turn both pictures face down again in the same places. Everyone tries to remember where they were.",
      "Remembering helps. A picture you saw three turns ago might connect to the one you have just turned over.",
      "The game ends when all the pictures have been paired, or when the ones left on the table won't pair with anything."
    ],
    "tip": "Play Snap and Pelmanism one after the other. Does fast looking find different connections from slow looking?",
    "players": {
      "min": 2,
      "max": 4,
      "pairs": false
    },
    "minutes": 15,
    "talk": "little",
    "closing": false
  },
  {
    "id": "exquisite-corpse",
    "title": "Exquisite Corpse",
    "intro": "Build a line of pictures together when you can only see the last one. Then uncover the whole line.",
    "need": "a small pile of photographs for each player, a long table, and some sheets of paper to cover the pictures.",
    "steps": [
      "One player lays down a picture to begin the line.",
      "The next player looks at it and places one of their own pictures beside it, one that seems to follow on.",
      "Cover the first picture with a sheet of paper, so that only the newest picture can be seen.",
      "Keep going. Each player only ever sees the last picture in the line before adding theirs. Cover each picture once the next one is down.",
      "Stop when every player has added three pictures, or when you run out of table.",
      "Lift all the covers and look along the whole line. What has it become?"
    ],
    "tip": "The name comes from a game the Surrealists played in the 1920s. They folded paper so that each player wrote or drew without seeing what came before.",
    "players": {
      "min": 3,
      "max": 0,
      "pairs": false
    },
    "minutes": 15,
    "talk": "none",
    "closing": false
  },
  {
    "id": "odd-one-out",
    "title": "Odd One Out",
    "intro": "Four pictures. Which one doesn't belong? Everyone can be right.",
    "need": "a pile of photographs and a group of players.",
    "steps": [
      "Lay four pictures face up in the middle.",
      "Look at them in silence for a moment.",
      "On a count of three, everyone points at the picture they think is the odd one out.",
      "Take turns to say why you chose it. Point to something you can see.",
      "Now look for a reason why each of the four could be the odd one out. When you have found all four, lay down four new pictures."
    ],
    "tip": "A good warm-up before In Tune.",
    "players": {
      "min": 3,
      "max": 0,
      "pairs": false
    },
    "minutes": 5,
    "talk": "lots",
    "closing": false
  },
  {
    "id": "the-storyteller",
    "title": "The Storyteller",
    "intro": "One player says a few words about a picture. Everyone else finds a picture to match. Can you spot the original?",
    "need": "a pile of photographs and three to six players.",
    "steps": [
      "Deal six pictures to each player. Keep them hidden from the others.",
      "One player is the Storyteller. They choose one of their pictures and say a word or a short phrase about it out loud. It can be a feeling, a sound, a line from a song, a single word.",
      "Every other player secretly chooses the picture from their own hand that best fits the Storyteller's words, and passes it face down to the Storyteller.",
      "The Storyteller shuffles these pictures with their own and lays them all out face up.",
      "Everyone except the Storyteller points to the picture they think was the original, all at the same moment.",
      "The Storyteller shows which one it was. Then each player says which picture was theirs.",
      "Everyone takes a new picture from the pile to replace the one they played, and the next player becomes the Storyteller."
    ],
    "tip": "If the words are too obvious, the game is too easy. If they are too strange, it becomes impossible. Look for something in between. This game borrows from Dixit, a card game by Jean-Louis Roubira.",
    "players": {
      "min": 3,
      "max": 6,
      "pairs": false
    },
    "minutes": 20,
    "talk": "little",
    "closing": false
  },
  {
    "id": "last-look",
    "title": "Last Look",
    "intro": "After the games, choose one or two pictures that stayed with you.",
    "need": "a large group of images, spread out, and a partner (or two others, if there is an odd number).",
    "steps": [
      "Walk slowly past all the pictures. Pick up one or two that kept coming back to you while you played.",
      "Show your partner. Before you say anything, ask them if they noticed you with this picture during the games.",
      "Now tell your partner what you notice in it. Point to the parts.",
      "Together, write down one thing you want to know that the picture can’t tell you.",
      "Then think of one thing you could do next: something to photograph, a place to visit, a question to look up."
    ],
    "tip": "Your questions might be the beginning of a project.",
    "players": {
      "min": 2,
      "max": 0,
      "pairs": true
    },
    "minutes": 10,
    "talk": "lots",
    "closing": true
  }
];
