$(document).ready(function(){
  $( "#btnSearchSong" ).click(function() {
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
});
