var username = getCookie("dot_user");

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  $('#header_list').append("<li><a class=\"header_text_menu pseudal\" href=\"/profil\">" + username + "</a></li>");
  $('#header_list').append('<li>' + "<a id=\"logout_button\" class=\"header_text_menu\" href=\"#\">Logout</a>" + '</li>');

$("#logout_button").click(function () {
  var ok = false;
  try {
      var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
     })
    }
  catch {
    $.ajax(
      {
          url: "internal/logout/",
          type: "get",
          async: false,
          success: function(response){
            location.reload();
          }
      })
      ok = true
  }
  if (ok == false) {
  $.ajax(
    {
        url: "internal/logout/",
        type: "get",
        async: false,
        success: function(response){
          location.reload();
        }
    })
  }
});

function onLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
}