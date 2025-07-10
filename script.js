//  let custName = prompt('Let\'s get to know each other!What\'s your name?','');
//         let menu = ['pasta', 'piragi','soup','cepelinai', 'cheese plate','rosolje'];
//         function greetUsers(name){
//             if(name === null|| name === ''){
//                 return 'You didn't give your name'
//             } else{
//                 return `Hello, ${name}! Welcome to our cafe.`
//             }
//         }
//         console.log(greetUsers(custName));
//         function getRandomItem(arr){
//            let index = Math.floor(arr.length*Math.random())
//             return arr.splice (index,1)[0];
//         }
//         function serveMenu(name, menu){
//             let copy = menu.slice();
//             let dish1 = getRandomItem(copy);
//             let dish2 = getRandomItem(copy);
//             let dish3 = getRandomItem(copy);
//             let message = `${name}! Would you like to try our ${dish1}?<br>` + `How about trying our ${dish2}?<br>` +
//             `Or maybe you\'d enjoy ${dish3}?`;
//             return message
//         }
//         let result = serveMenu(custName, menu);
//         document.getElementById('output').innerHTML = result;
//google window
let menu = ['pasta', 'piragi','soup','cepelinai', 'cheese plate','rosolje'];
function greetUsers(name){
    if(name === null|| name === ""){
        return 'You didn\'t give me your name'
    }else{
        return `Hello, ${name}! Welcome to our cafe`

    }
}
function getRundomItem(arr){
    let index = Math.floor(arr.length * Math.random());
    return arr.splice(index, 1)[0];
}
function serveMenu(name, menu){
    let copy = menu.slice()
    let dish1 = getRundomItem(copy);
    let dish2 = getRundomItem(copy);
    let dish3 = getRundomItem(copy);
    let message = `${name}! Would you like to try our ${dish1}?<br>` + `How about trying our ${dish2}?<br>` + `Or maybe you'd enjoy ${dish3}?`
    return message
}
function submitName(){
    let name = document.getElementById('nameInput').value;
    let greeting = greetUsers(name);
    if (greeting === 'You didn\'t give me your name'){
        document.getElementById('output').innerHTML = greeting;
        return;
    }
    let result = serveMenu(name, menu);
    document.getElementById('output').innerHTML = result;
    document.getElementById('popup').style.display='none';
}
document.getElementById('nameInput').addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        submitName();
    }
})

