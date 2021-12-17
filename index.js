// function saturdayFun(activity = 'roller-skate') {
//    console.log(`This Saturday, I want to ${activity}!`);
// }

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(boring = "go to the office") {
    return `This Monday, I will ${boring}.`
}

function wrapAdjective(flair = "*") {
    return function innerFunction(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}







// function wrapAdjective(param = "*") {
//     const part1 = "You are"
//     return function innerFunction(param2="special") {
// return `${part1} ${param}${param2}${param}!`
//     };
// }


//need someone to expalin to me why it can't all be in one string. what are the limitations of the functions that require us to dynamically take all these arguemnts 

//or teach me how to read this