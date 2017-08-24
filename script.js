$(document).ready(function(){
  $('#set').click(function(){
    var $table = "<table></table>";
    $('.container').append($table);
    var side = prompt("Please eneter the length of pad.");
      for(i=0; i< side; i++){
        var $tr = "<tr></tr>"
        $('table').append($tr);
      };
      for(i=0; i< side; i++){
        var $td = "<td></td>";
        $('tr').append($td);
      };
  });

  $('#baw').click(function(){
    $('td').hover(
         function(){
           $(this).css("background-color","white");
         });

  });

  $('#random').click(function(){
    $('td').hover(
      function(){
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).css("background-color", hue);
      }
    )
  });

  $('#clear').click(function(){
    $('table').remove();
  });

});





































// $(document).ready(function(){
//
//   $('#reset').click(function(){
//     $('.cell').remove();
//     var side = prompt("What is the length of the pad?");
//     var $div = "<table></table>"
//     var count = side * side;
//     for(i=1; i<= count; i++){
//       var $div1 = $($div).addClass("cell");
//       $('.container').append($div1)
//     }
//     $('.cell').hover(
//       function(){
//         $(this).addClass("white");
//       });
//   });
//
//   // $('.cell').hover(
//   //   function(){
//   //     $(this).addClass("grey");
//   //   });
//
// });
