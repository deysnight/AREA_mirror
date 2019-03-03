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

var USER_ID = parseInt(getCookie("user_id"), 10);
var final_url = "http://localhost:8080/internal/area/" + USER_ID + "/";

function send_delete(ID_CARD) {
    $.ajax({
        url: final_url + ID_CARD,
        method: "DELETE",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        success: function (response) {
            location.reload();
        }
    })
};  