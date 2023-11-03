

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



//COMBINING THE MODULES

const getHappyB = (name, language, celebrationStyle) => {
    let bDayMessage = []; // Create array
    //PART 1 - GREET
    let moduleGreet = []; // Create module for greeting
    const findName = (string) => string === 'NAME';
    if (language === 'DE') {
        moduleGreet = greet[0][Math.floor(Math.random()*3)];
    } else {
        moduleGreet = greet[1][Math.floor(Math.random()*3)];
    };
    moduleGreet[moduleGreet.findIndex(findName)] = name;
    bDayMessage.push(moduleGreet.join(''));
    
    
    console.log(bDayMessage);
    // console.log(bDayMessage.join(''));
}

getHappyB('Pupsi', 'DE', 'any');
