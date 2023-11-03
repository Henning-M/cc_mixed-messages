

//CREATING THE CONTENT ARRAYS

/* Greet Array
Structure: greet = [[[DE1,name],[DE2,name],[DE3,name]],[[EN1,name],[EN2,name],[EN3,name]]]
greet[0] is the array with the German, greet[1] with the English greetings
*/

greet = [
    [   
        ['Hey ','NAME','!'],['Hellooo ','NAME','!'],['NAME',' alte Hütte!']
    ],
    [
        ['Hey ','NAME','!'],['NAME', ' my dear!'],['Dearest ','NAME','!']
    ]
];

/* Congrats Array
Structure: congrats = [[DE1,DE2,DE3],[EN1,EN2,EN3]]
congrats[0] is the array with the German, greet[1] with the English birthday congratulation messages
*/

congrats = [
    ['Herzlichen Glückwunsch zum Geburtstag!!!', 'Happy Birthday!!', 'Wünsch dir alles Gute zum Geburtstag!!!'],
    ['Happy birthdayyy!!!', 'All the best for you bdayyy!', 'Wishing you a fantastic birthday!']
];

/* Celebrations Array
Structure: celebrationStyle = [[[DEpa1,DEpa2,DEpa3],[DEch1,DEch2,DEch3]],[[ENpa1,ENpa2,ENpa3],[ENch1,ENch2,ENch3]]]
celebrationsStyle[0][1] is the array with German "Chill / Family" options
*/

celebrationStyle = [
    [ //GERMAN OPTIONS
        ['Lass dich heute ordentlich feiern!', 'Hoffe du lässt es ordentlich krachen!', 'Hoffe dich erwartet noch ne gute Bday-Party!'],
        ['Genieß deinen Ehrentag!', 'Hoffe du kannst es heute gemütlich angehen lassen!', 'Lass dich gebührend zelebrieren heute!']
    ],
    [ // ENGLISH OPTIONS
        ["Hope you're having hell of a party today!", "Time to celebrate!!", "I hope you're in the middle of some wild celebrations already!"],
        ['Hope you can enjoy this day with your loved ones!', 'Make sure you spend the day in style: relaxing to the max! ;-)', 'Hope you can enjoy a peaceful one!']
    ]
];


/* GoodBye Array
Structure: goodBye = [[DE1,DE2],[EN1,EN2]]
goodBye[0] is the array with the German, goodBye[1] with the English farewell messages
*/

goodBye = [
    ['Liebe Grüße aus Singapur!', 'cheerio', ''],
    ['Take care!', '', 'cheers!']
];




//COMBINING THE MODULES

const getHappyB = (name, language, celebStyle) => {
    let bDayMessage = []; // Create array
    
    //PART 1 - GREET using parameters name, language
    let moduleGreet = []; // Create module for greeting
    const findName = (string) => string === 'NAME';
    if (language === 'DE') {
        moduleGreet = greet[0][Math.floor(Math.random()*3)];
    } else {
        moduleGreet = greet[1][Math.floor(Math.random()*3)];
    };
    moduleGreet[moduleGreet.findIndex(findName)] = name;
    bDayMessage.push(moduleGreet.join(''));
    //END OF PART 1 - GREET

    //PART 2 - CONGRATS using parameter language
    let moduleCongrats = [];
    if (language === 'DE') {
        moduleCongrats = congrats[0][Math.floor(Math.random()*3)]
    } else {
        moduleCongrats = congrats[1][Math.floor(Math.random()*3)]
    };
    bDayMessage.push(moduleCongrats);
    //END OF PART 2 - CONGRATS
    
    //PART 3 - CELEBRATE using parameters language, celebStyle
    let moduleCelebStyle = [];
    if (language === 'DE') {
        if (celebStyle === 'party') {
            moduleCelebStyle = celebrationStyle[0][0][Math.floor(Math.random()*3)]
        } else {
            moduleCelebStyle = celebrationStyle[0][1][Math.floor(Math.random()*3)]
        }
    } else {
        if (celebStyle === 'party') {
            moduleCelebStyle = celebrationStyle[1][0][Math.floor(Math.random()*3)]
        } else {
            moduleCelebStyle = celebrationStyle[1][1][Math.floor(Math.random()*3)]
        }
    };
    bDayMessage.push(moduleCelebStyle);

    //END OF PART 3 - CELEBRATE
    let moduleGoodBye = [];
    if (language === 'DE') {
        moduleGoodBye = goodBye[0][Math.floor(Math.random()*3)]
    } else {
        moduleGoodBye = goodBye[1][Math.floor(Math.random()*3)]
    };
    bDayMessage.push(moduleGoodBye);

    // console.log(bDayMessage);
    console.log(bDayMessage.join(' '));
}

getHappyB('Pupsi', 'DE', 'party');
