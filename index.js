// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// function saturdayFun(activity){
//     return activity ? `This Saturday, I want to ${activity}!`: "This Saturday, I want to roller-skate!"
// }



function mondayWork(activity = 'go to the office') {
    return(`This Monday, I will ${activity}.`)
}
mondayWork("work from home")

// const mondayWork = function (monActivity){
//     return monActivity ? `This Monday, I will ${monActivity}.` : "This Monday, I will go to the office."
// }

function wrapAdjective(wrap = '*'){
    return function(wrap2 = "a hard worker"){
        let emphatic = `You are ${wrap}${wrap2}${wrap}!`
        return emphatic
    }
}
wrapAdjective()()