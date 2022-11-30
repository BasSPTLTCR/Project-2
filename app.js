// window.transitionToPage = function(href) {
//     document.querySelector('body').style.opacity = 0
//     setTimeout(function() { 
//         window.location.href = href
//     }, 500)
// }

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1
// })

// Updates the age of Roberto automaticly
let now = new Date();
let birth = new Date('2005-08-23');
let difference = now - birth;
let age = new Date(difference).getFullYear() - 1970
let span = document.getElementById('age');
span.innerText = age;