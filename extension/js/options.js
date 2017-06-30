$(document).ready(function(){
  initialise();
});

var timeout = 604800000;
function initialise(){
  //document.getElementById("linkOtherOptions").addEventListener("click", function(){showpage(1);}, false);
  document.getElementById("linkAbout").addEventListener("click", function(){showpage(2);}, false);
  showpage(2);

  $.getJSON( "../manifest.json")
    .done(function( data ) {
      console.log( "JSON Data: " + data.version );


      $( "<span/>", {
         "class": "my-new-list",
         html: data.version
       }).appendTo( "#title-about" );


    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
    });

}

function showpage(page) {
    for (var i = 1; i <= 2; i++) {
        if (i == page) document.getElementById("page" + i).style.display = "block";
        else document.getElementById("page" + i).style.display = "none";
    }
}
