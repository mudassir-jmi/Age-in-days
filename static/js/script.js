//Your Age in Days
function ageInDays() {

    var birthYear = prompt('what year were you born... Good friend');
    var ageInDays = (2021 - birthYear) *365;
    var h1 = document.createElement('h1');
    var texAnswer = document.createTextNode('You are ' + ageInDays + ' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(texAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}