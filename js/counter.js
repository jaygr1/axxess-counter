$( document ).ready(function() {
function Counter(){
  $('#limit').click(function(e){
    e.preventDefault();
    var max = parseInt($('#max').val());
       var i = parseInt($('#timer').text());
       if (i < max) {
         Increment();
       }
  })
}




function Increment(){
  var max = parseInt($('#max').val());
    var callback = function(){
      var i = parseInt($('#timer').text());
      i++;
      $('#timer').text(i);
      FizzBuzz(i);
      if (i >= max) {
        clearInterval(x);
      }
    }
    var x = setInterval(callback, 1000);
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
       $('#timer').text(0);
     })
  }
function Restart(){
 $('#restart').click(function(e){
   e.preventDefault();
    $('#timer').text(0);
    // Increment();
  })
 }
 new Counter()
 new Restart()
})
