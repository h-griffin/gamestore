var greeting = function(){

    var person = prompt('Do you like games?')
    var response;

    if (person === 'yes') {
        response = 'Lets play!';
    } else if (person === 'no') {
        alert('Heres some games to get started!');
        response = 'Lets get started!';
    } else if (person === 'not sure') {
        response = 'Heres some games you might like!';
    } else {
        response = 'Welcome Gamers!';
    }

    var userResponse = response;

    return userResponse;
};

/* document.write('<h3>') + response + ('</h3>'); */

var consoleGreeting = function consoleGreeting(){

    var person = prompt('Have you purchased a game console?')
    var response;
    
    if (person === 'yes') {
        response = 'Heres the newest editions!';
    } else if (person === 'no') {
        alert('Heres some starter consoles!');
        response = 'Lets get started!';
    } else if (person === 'not sure') {
        response = 'Heres a console you might like!';
    } else {
        response = 'Heres our game consoles!';
    }
    
    var userResponse = response;
    
    return userResponse;
    };

var purchaseGreeting = function purchaseGreeting(){

    var person = prompt('Have you purchased here before?')
    var response;
     
    if (person === 'yes') {
        response = 'Welcome back!';
    } else if (person === 'no') {
        alert('Welcome!');
        response = 'Welcome!';
    } else if (person === 'not sure') {
        response = 'Welcome to our site!';
    } else {
        response = 'Welcome Gamers!';
     }
        
     var userResponse = response;
        
     return userResponse;

     };

function takeOrder(){
    var order = prompt('What would you like to order?')
    var item;
    
    if (order === 'games') {
        item = '<img src="https://gamehub.om/wp-content/uploads/2019/11/4a6db08fbba54e3cabb7ab94abbfe1d9_Large.jpg" >';
    }else if (order === 'console') {
        item = '<img src="https://media.wired.com/photos/5926f81af3e2356fd800b0ac/master/w_1098,c_limit/xbox-one-microsoft.jpg: >';
    }else if (order === 'toys') {
        item = '<img src="https://s1.thcdn.com/productimg/1600/1600/12054207-1574653303040860.jpg" >';
    }else {
        item = '<strong>No items ordered</strong>';
    }
    var myItem = item
    // document.write(myItem);
    return myItem;
};

//at home attempt loop

// function howMany(){
//     var person = prompt('how many games do you want?')
//     var response;

//     var i; 
//     for (i= 0; i < (response); i++){
//         document.write(i);
//         }

//     var userResponse = response;
//     document.write('write');
//     return userResponse;
// }


//in class walk through loop
var games = function(){

    var item= takeOrder();
    var order= prompt ("how many games do you want?");
    var total = "";
    // var item= takeOrder();

    console.log(typeof(order));
    console.log(isNaN(order));

    // var num = Number(order);

    while (order === '0' || isNaN(order)){
        order = prompt("Please enter a number greater than 0.");
    }
    var num = Number(order);

    for(var i = 0; i < order; i++){
        total = total + item
    }

    return total;
}
// in html
// call and invoke in head
//<script> document.write (coffee()) </script>

