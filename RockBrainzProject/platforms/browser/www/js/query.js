$(document).ready(function(){
  $( "#artists" ).click(function() {
    $("thead").empty();
    $("tbody").empty();
    $.ajax({
      method: "GET",
      url: "https://musicbrainz.org/ws/2/artist?query=" + $("#group").val(),
      dataType: "json",   // necessitem això pq ens retorni un objecte JSON
    }).done(function (msg) {
      $("thead").append("<tr><th scope='col'>Nombre</th><th scope='col'>Disambiguation</th></tr>");
      for(var item in msg.artists) {
        console.log(msg.artists[item]);
        console.log(msg.artists[item]["name"]);
        $("tbody").append("<tr><td>" + msg.artists[item]["name"] + "</td><td>" +msg.artists[item]["disambiguation"]+ "</tr>")
      };
    }).fail(function () {
      alert("ERROR");
    });
  });

  $( "#recordings" ).click(function() {
    $("thead").empty();
    $("tbody").empty();
    $.ajax({
      method: "GET",
      url: "https://musicbrainz.org/ws/2/recording?query=" + $("#group").val(),
      dataType: "json",   // necessitem això pq ens retorni un objecte JSON
    }).done(function (msg) {
      $("thead").append("<tr><th scope='col'>Title</th><th scope='col'>Disambiguation</th></tr>");
      for(var item in msg.recordings) {
        var artists = "";
        for(var i in msg.recordings[item]["artist-credit"]){
          var artist = msg.recordings[item]["artist-credit"][i];
          artists = artists + artist["artist"]["name"] + ", ";
        }
        $("tbody").append("<tr><td>" + msg.recordings[item]["title"] + "</td><td>" +artists+ "</tr>")
      };
    }).fail(function () {
      alert("ERROR");
    });
  });
});
