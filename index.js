function greeting(){

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

function consoleGreeting(){

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

    function purchaseGreeting(){

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