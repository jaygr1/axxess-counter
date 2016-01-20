// var interval = setInterval(Counter, 1000);

// function Counter(){
//   $('#limit').click(function(e){
//     e.preventDefault();
//       for (var i = 0; i <= parseInt($('input[type="text"]').val()); i++) {
//         console.log(i)
//         // setInterval(function(){
//           $('#timer').text(i), 1000;
//         }
//
//     })
//   }

function Counter(){
  $('#limit').click(function(e){
    e.preventDefault();
    var i = 0;
    var max = parseInt($('input[type="text"]').val());
      var callback = function(){
        i++;
        $('#timer').text(i);
        if (i >= max) {
          clearInterval(x);
        }
      }
      var x = setInterval(callback, 1000);

    }
  )}



// function Delay(){
//   setInterval(function(){
//     Counter()}),1000;
// }




new Counter()
