//define functions here
function getIt() {
    $('p').on('click', function() {
      alert("Hey!");
    })
}

// function frameIt() {
//   $('img').on('load', function() {
//     img.append(.tasty);
//   )}
// }

function pressIt() {
    $('#typing').on("keydown", function() {
       if (key.which == 71) {
         alert("G was pressed");
       }
    });
}






$(document).ready(function(){

getIt();
// frameIt();
pressIt();

});
