$(document).ready(function(){
//   $('#x').click(function() {
//     $('#can').hide('fast');
//     $('#x').hide('fast');
// });
    


  $(".card").on("click", function(){
      customize();
      
  });
  
  $(".card").flip({
      trigger: 'click'
    });
    
});


// head phone custimization
function customize() {
  $('#x').show('fast');
  $("#can").show("slow");
  $(".canvas").show("slow");
  $(".colors").show("slow");
  //$("#genreBox").css("display", "none");
}

