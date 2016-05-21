var genres_list = ["jazz", "rock", "Kpop", "80s", "90s", "dubstep", "calssical", "runningMan"];


var Genres_ID = {
"jazz": "#jazz",
"Kpop": "#Kpop",
"dubstep": "#dubstep",
"rock": "#rock",
"80s": "#80s",
"90s": "#80s",
"classical": "#classical",
"runningMan": "#runningMan"
};


function pick_headphone(x) {
  $(this).show();
}




$(document).ready(function(){
  $('.genres').click(
      function(){
        var albumId = $(this).attr('id');
        pick_headphone(albumId);
      }
    );
    
    
  $(".card").on("click", function(){
      customize();
  });
  
});

// head phone custimization
function customize() {
  $(".canvas").show("slow");
  $("#genreBox").css("display", "none");
}

