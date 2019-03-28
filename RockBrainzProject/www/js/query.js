$(document).ready(function(){
  $( "#btnSearchSong" ).click(function() {
    console.log($("#group").text());
    $.ajax({
      method: "GET",
      url: "https://musicbrainz.org/ws/2/artist?query=" + $("#group").val(),
      dataType: "json",   // necessitem això pq ens retorni un objecte JSON
    }).done(function (msg) {
      for(var item in msg.artists) {
        console.log(msg.artists[item]);
        console.log(msg.artists[item]["name"]);
        $("tbody").append("<tr><td>" + msg.artists[item]["name"] + "</td></tr>")
      };
    }).fail(function () {
      alert("ERROR");
    });
  });
});
