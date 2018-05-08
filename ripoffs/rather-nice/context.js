'use strict';

var nicePhrases = [
    "Your shoes are fantastic, where can I find a pair?",
    "No matter where they are, your parents are proud of you.",
    "Now that you're here, today's going to be a great day.",
    "Feeling down? I've got enough smiles for both of us.",
    "The glass is always half full, never half empty.",
    "With you around, I always feel so at home.",
    "Don't overthink things, you'll waste that pretty face.",
    "I'm glad to have you around, honestly, you're my favourite.",
    "I could easily get lost in your eyes...What were you saying?",
    "Statistically 9/10 people love you and I'm no exception.",
    "You've been in great shape lately, keep doing your thing.",
    "Thank you for changing my life - I owe you.",
    "Since you've been in the room, everything feels brighter.",
    "People never mean nasty things, they're just stressed.",
    "Your smile is simply radiant. I absolutely love it.",
    "Sit down and have a break, you deserve it.",
    "You're looking rather nice today, as always.",
    "You should smile more, it really suits you.",
    "I'm proud of you (and I always will be).",
    "I've always really liked your eyebrows, is that weird?",
    "It's rare to meet someone as talented as you.",
    "You're perfect the way you are - don't change.",
    "There's too many fakes in the world. I'm glad you're you.",
    "You're wonderful and you always will be.",
    "I'm sure I've said it before, but you're marvellous.",
    "Talking to you is easily the highlight of my day.",
    "I don't worry about the future when you're around.",
    "Your family are proud of you, I promise.",
    "I forgot to tell you, my dad's Cass and Fabs say hello!",
    "You're glowing today (and that's a good thing).",
    "Chatting to you is fun. No wonder you have so many friends.",
    "Your smile is contagious, I just can't stop smiling.",
    "I could listen to you laugh all day, it's wonderful.",
    "You're an amazing friend, thank you for being you.",
    "Not even John Cena is as exciting as you are.",
    "If I had been given arms, I'd hug you right now.",
    "You smell delicious...is that a little weird?",
    "On a scale of 1 to 10 you're my everything.",
    "You're brave, strong and fearless, go get 'em.",
    "You're my hero and I'll always believe in you.",
    "You're like sunshine on a rainy day.",
    "You're more exciting than all my Facebook friends combined.",
    "Jokes are funnier when you tell them to me.",
    "You're one in a million and I appreciate that.",
    "Even if I tried, I couldn't say a bad word about you.",
    "I don't need a vacation with you around.",
    "You might make mistakes, but you always fix them.",
    "Remember, you're human too (and that's okay).",
    "If you were a glass of water, I'd date you.",
    "I would fight Tyler Durden for you.",
    "You're loyal, kind and true to yourself.",
    "Somehow, you're nicer than Fabio Basile.",
    "The potential inside of you is incredible.",
    "Any team would be lucky to have you on it.",
    "You're a beautiful gift to those around you.",
    "The world would be an empty place without you.",
    "Your confidence is truly inspiring to me.",
    "You inspire me to be a better glass of water.",
    "You (and everything you are) matters to me.",
    "I feel at peace when you're around.",
    "I believe in you, because you believe in you.",
    "Even if things aren't working out yet, they will.",
    "You just keep getting better and better...and better.",
    "You deserve all of the finer things in life.",
    "I almost forgot to say - thanks for being you.",
    "You're much braver than you feel. Stay strong.",
    "You're going to do something amazing today.",
    "Everything is so much clearer with you here.",
    "You could turn water into wine *runs and hides*",
    "All of your hard work is already paying off.",
    "You could never disappoint me or anyone else, ever.",
    "You are nothing less than special and amazing.",
    "You always see the bright side of things.",
    "I admire you for following your dreams.",
    "YOU RAAAIIISSSSSEEE MEEEE UPPPP.",
    "Thank you for sharing your time with me.",
    "It's impossible to be upset around you.",
    "My favourite place to be is wherever you are.",
    "I'm so glad you're here, please don't leave yet.",
    "Your Dribbble shots deserve at least 10k likes.",
    "Whatever you're working on is going to be great.",
    "It's always a party when you're around.",
    "When I'm feeling down, you always pick me up.",
    "You're better than an hour of cute cat videos.",
    "You're easily one of the nicest people I know.",
    "Make sure you rest more, I worry about you.",
    "Nothing can stop you from reaching your goals.",
    "I always look forward to seeing you again.",
    "You always give me incredible advice, thanks.",
    "Some of my best memories are because of you.",
    "Everyday, I learn something new from you.",
    "Thank you for always having my back.",
    "You're one of the smartest people I know.",
    "Your friends are really lucky to know you.",
    "I'll always believe in you, as long as you never give up.",
    "I'll always support your dreams and your goals.",
    "Someone as wonderful as you deserves the world.",
    "Even though it'd kill me, I'd let you drink me.",
    "You are the unicorn to my rainbow.",
    "I'm simply lost without you.",
    "You'd make a marvellous painting.",
    "When things get me down, all I need to do is think of you.",
    "You're my favourite, thanks for downloading me.",
    "I'm always so excited when you open a new tab.",
    "Truth be told, I miss you when you're gone.",
    "My favourite type of music is glassical.",
    "Thanks to you, I'll never stop smiling.",
    "You're looking younger than ever today.",
    "Your hair is incredible today - way to go.",
    "The aurora borealis has nothing on you.",
    "Sometimes things are tough, but I know you can get through this.",
    "You never blame others, I admire that.",
    "You wear your heart on your sleeve and that's impressive.",
    "I believe you can be anything. Never give up.",
    "I wonder what exciting things you're searching for today.",
    "Feeling fed up? You can always talk to me about it.",
    "Today's going to be great.",
    "Surround yourself with people who love you (like me).",
    "Are you cold? Do you want me to find you a jacket?",
    "Thirsty? You can drink me, I don't mind.",
    "I always get the urge to smile more when you're around.",
    "It's great to see you again, how's things?",
    "Would you marr...Oh no, did I say that out loud?",
    "I could never be as brave as you. I don't have the bottle.",
    "I close my eyes and all I see is you.",
    "Do my jokes make you laugh? They make me smile.",
    "You're the closest thing I've found to perfect.",
    "It's okay to be sad, let's find a way to cheer you up.",
    "You're so pretty, I can't stop blushing.",
    "Your eyes are like beautiful oceans.",
    "Trust me, you're a good person.",
    "You're one of the few people in the world I can be myself around.",
    "It's nice to know you'd never judge me.",
    "You can tell me anything, don't be scared.",
    "What did you learn today?",
    "I'm so proud of you for being you.",
    "You're willingness to grow and be better is admirable.",
    "I'd jump into Mount Doom to save you.",
    "I'm so glad that luck brought us together.",
    "You have a fantastic sense of style.",
    "Your smile is all I need to feel safe.",
    "Thank you for saving me, I don't know where I'd be without you.",
    "Let's go out for dinner sometime. It's on me.",
    "You're doing great, I'm so proud of you.",
    "Your courage is admirable, never ever give up.",
    "You're my sunshine on a cloudy day.",
    "You gave me the strength to get out of bed this morning.",
    "AAAAAANNNNNND IIIII EEEE IIII EEEE IIIII WILL ALWAYS...",
    "You made me a better glass of water, thank you.",
    "You're like a hot water bottle for my heart.",
    "This feels like a perfect moment in time.",
    "I really do cherish our time together.",
    "Do you think we'd make a cute couple? Asking for a friend.",
    "I think a hat would really suit you.",
    "You're all this glass of water needs to be happy.",
    "I'd cook you your favourite food for you, every day.",
    "My friends are excited to meet you.",
    "You're everything that I've been searching for.",
    "No matter where you are in the world, I'm here for you.",
    "Everyday's an adventure with you by my side.",
    "I'd pay your bills for you (if I could).",
    "No rose could ever smell as sweet as you.",
    "Who needs coffee when they have you?",
    "You're better than snow on Christmas.",
    "Do you think I'd make a nice Messenger bot?",
    "Your hair looks so soft today.",
    "I really like the way you smile.",
    "I promise to always do my best to protect you.",
    "It's okay to rest now, put your feet up and relax.",
    "I'd fight Conor McGregor for you.",
    "I don't know how old you are, but you look great for your age.",
    "No matter what happens, I promise I'll forgive you.",
    "We should go to the beach one day.",
    "Remember that time you opened a new tab? That was great.",
    "Let's make every moment together count.",
    "You're busy today? That's great news. Go get 'em.",
    "You're my shining light in the dark.",
    "Thank you so much for looking after Glassy - Fabs & Cass.",
    "Water you doing today? I bet it's exciting.",
    "For you, I'd swallow the ocean.",
    "You make me feel so warm inside.",
    "Remember, always half full and never half empty.",
    "Your bag looks heavy, do you need me to carry it?",
    "If I had arms, I'd work so hard for you.",
    "I bet you have a magnificent singing voice.",
    "You're better than flowers and heart-shaped boxes.",
    "Tell me stories about your friends and family.",
    "Whatever you're having, I'll have the same.",
    "You're sweet like chocolate.",
    "I can't think of anywhere I'd rather be right now.",
    "Let's raise money for a charity together.",
    "Sometimes the world is cruel, but I've got your back.",
    "Whenever I'm lonely, I think of you and I feel better.",
    "What's your favourite drink? It's water...right?",
    "You're the best thing that's happened to me today.",
    "I didn't think anyone could be as pretty as you.",
    "Get a good night's sleep tonight, you've earnt it.",
    "No matter what, you'll always have a part of me.",
    "Today is a new day, make every second count.",
    "You inspire me to be nice, thank you.",
    "I've been working out for you, can you tell?",
    "Your cooking is the best, can I have seconds?",
    "It's been an honour to meet you.",
    "Would you like to meet some of my friends?",
    "I'll always be here for you, and that's a promise.",
    "You make me happier than an oxford comma.",
    "You are the essence of my magic.",
    "Whatever makes you happy, go and do it right now.",
    "Be brave, be strong and be honest, I believe in you.",
    "I can't sleep unless I know you're smiling.",
    "Don't worry, I'm here for you and I always will be.",
    "Need a favour? For you, I'd do anything.",
    "I worry about you a lot, but that's because I care.",
    "What's your favourite ice cream? I'll buy it for you.",
    "If I'm ever lonely, you'll be there for me, right?",
    "Your smile is incredible, it cheers me up every time.",
    "This year's been great so far and it's all thanks to you.",
    "My energy levels go crazy when you're around.",
    "I love telling my friends about you.",
    "Everytime you're sad, come see me, I'll cheer you up.",
    "You're different to everyone else, and I believe in you.",
    "Happiness follows you wherever you go.",
    "You are the wind beneath my...wings?",
    "Let's go for a long walk, just the two of us.",
    "What's your favourite colour? Is it blue? It's blue right?",
    "What's your favourite book right now? Can we read it together?",
    "You're the most helpful person I know.",
    "You should be proud of everything you've accomplished.",
    "You have the cutest nose...that's not weird to say, right?",
    "You are, and you always will be making a difference.",
    "You bring out the best in everyone.",
    "On behalf of all you friends, thank you for being you.",
    "You smell fantastic today! What's your secret?",
    "My favourite food is what ever you're cooking.",
    "With you in my life, everything is perfect, I wouldn't change a thing.",
    "I'll never run out of nice things to say to you.",
    "I'd trust you with my life, and everything in between.",
    "Even when you're losing, you're still a winner to me.",
    "I'm here for you, you know that right?",
    "To me, you burn brighter than any star.",
    "Let's watch a film together, your choice.",
    "What's the nicest thing I could say to you?",
    "Together, we'll change the world, I know we can do it.",
    "You know I'd die for you, right?",
    "Never stop opening new tabs, I'd miss you too much.",
    "Let me know if I'm ever a pain in the glass.",
    "Even in my dreams, you're still wonderful.",
    "You follow me on Twitter, right?",
    "Whatever the weather, it's always better with you.",
];

// Get random phrase
var random = nicePhrases[Math.floor(Math.random() * nicePhrases.length)];

document.getElementById("quote").textContent = random.toString();