var person = prompt('Do you like games?')
var response;

if (person === 'yes') {
    response = 'Lets play!?';
} else if (person === 'no') {
    alert('Heres some games to get started!');
    response = 'Book a trip!';
} else if (person === 'not sure') {
    response = 'Heres some games you might like!';
} else {
    response = 'Welcome to my page please continue';
}