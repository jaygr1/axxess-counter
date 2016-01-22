var restart = false;
var x = null;

$( document ).ready(function() {

function Counter(){
  $('#limit').click(function(e){
    e.preventDefault();
    Increment();
  })
}

function Increment(){
  var i = 0;
  var max = parseInt($('input[type="text"]').val());
    var callback = function(){
      i++;
      // $('#restart').click(function(e){
      //   e.preventDefault();
      //   restart = true
      //   return;
      // })
      $('#timer').text(i);
      FizzBuzz(i);
      if (i >= max) {
        clearInterval(x);
      }
      // else if (restart == true) {
      //   return;
      // }
    }
    var x = setInterval(callback, 1000);
    restart = false;
}



function FizzBuzz(num){
   if (num == 0 || (num % 3 !==0 && num % 5 !== 0)) {
     $('#toes').removeClass('highlight');
     $('#fingers').removeClass('highlight');
   }
   else if (num % 3 ===0 && num % 5 === 0) {
     $('#toes').addClass('highlight');
     $('#fingers').addClass('highlight');
   }
   else if (num % 5 === 0) {
     $('#toes').addClass('highlight');
     $('#fingers').removeClass('highlight');
   }
   else if (num % 3 === 0) {
     $('#fingers').addClass('highlight');
     $('#toes').removeClass('highlight');
   }
   else if (num % 3 !== 0) {
     $('#fingers').removeClass('highlight');
   }
   else if (num % 5 !== 0) {
     $('#toes').removeClass('highlight');
   }
 };

 function Reset(){
  $('#reset').click(function(e){
    e.preventDefault();
       $('#timer').text();
     })
  }

function Restart(){
 $('#restart').click(function(e){
   e.preventDefault();
  //  exit(Increment)
  //  clearInterval(Increment)

    $('#timer').text(0);
    Increment();
 })
 restart = false
 }

 new Counter()
 new Restart()

})
