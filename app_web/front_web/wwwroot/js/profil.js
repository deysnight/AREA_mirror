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
var user_config = null;
var full_url = "http://localhost:8080/internal/area/" + USER_ID;

$.ajax(
    {
        url: full_url,
        type: "get",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        success: function (response) {
            user_config = JSON.parse(response);
            console.log(user_config);
        }
    });

function get_card_type(i) {
    if (user_config.data[i].action_id === 1 || user_config.data[i].action_id === 2 || user_config.data[i].action_id === 3)
        return ("<div class=\"reaction_card yt\">")
    if (user_config.data[i].action_id === 4 || user_config.data[i].action_id === 5 || user_config.data[i].action_id === 6)
        return ("<div class=\"reaction_card fb\">")
    if (user_config.data[i].action_id === 7 || user_config.data[i].action_id === 8 || user_config.data[i].action_id === 9)
        return ("<div class=\"reaction_card twitch\">")
    if (user_config.data[i].action_id === 10)
        return ("<div class=\"reaction_card onedrive\">")
    if (user_config.data[i].action_id === 11)
        return ("<div class=\"reaction_card gdrive\">")
    if (user_config.data[i].action_id === 12)
        return ("<div class=\"reaction_card gsheet\">")
}

function get_card_title(i) {
    if (user_config.data[i].action_id === 1)
        return ("<p class=\"reaction_title\">Abonnement</p>");
    if (user_config.data[i].action_id === 2)
        return ("<p class=\"reaction_title\">Like Vidéo</p>");
    if (user_config.data[i].action_id === 3)
        return ("<p class=\"reaction_title\">Youtuber actif</p>");
    if (user_config.data[i].action_id === 4)
        return ("<p class=\"reaction_title\">Like page</p>");
    if (user_config.data[i].action_id === 5)
        return ("<p class=\"reaction_title\">Nouvelle page</p>");
    if (user_config.data[i].action_id === 6)
        return ("<p class=\"reaction_title\">Nouveau post</p>");   
    if (user_config.data[i].action_id === 7)
        return ("<p class=\"reaction_title\">Follow streamer</p>");
    if (user_config.data[i].action_id === 8)
        return("<p class=\"reaction_title\">Nouveau follow</p>");
    if (user_config.data[i].action_id === 9)
        return ("<p class=\"reaction_title\">streamer live</p>");
    if (user_config.data[i].action_id === 10)
        return ("<p class=\"reaction_title\">Partage fichier</p>");
    if (user_config.data[i].action_id === 11)
        return ("<p class=\"reaction_title\">Upload fichier</p>");
    if (user_config.data[i].action_id === 12)
        return ("<p class=\"reaction_title\">Upload fichier</p>");
}

function get_main_icon(i) {
    if (user_config.data[i].action_id === 1 || user_config.data[i].action_id === 2 || user_config.data[i].action_id === 3)
        return ("<i class=\"fa fa-youtube-play fa-3x\" aria-hidden=\"true\"></i>");
    if (user_config.data[i].action_id === 4 || user_config.data[i].action_id === 5 || user_config.data[i].action_id === 6)
        return ("<i class=\"fa fa-facebook-official fa-3x\" aria-hidden=\"true\"></i>")
    if (user_config.data[i].action_id === 7 || user_config.data[i].action_id === 8 || user_config.data[i].action_id === 9)
        return ("<i class=\"fa fa-twitch fa-3x\" aria-hidden=\"true\"></i>")
    if (user_config.data[i].action_id === 10)
        return ("<i class=\"fa fa-cloud fa-3x\" aria-hidden=\"true\"></i>")
    if (user_config.data[i].action_id === 11)
        return ("<i class=\"fab fa-google-drive fa-3x\" aria-hidden=\"true\"></i>")
    if (user_config.data[i].action_id === 12)
        return ("<i class=\"fas fa-file-alt fa-3x\" aria-hidden=\"true\"></i>")
}

function get_card_desc(i) {
    if (user_config.data[i].action_id === 1)
        return ("<p class=\"reaction_description\">Augmentation du nombre d'abonnés sur Youtube</p>");
    if (user_config.data[i].action_id === 2)
        return ("<p class=\"reaction_description\">Like ou Dislike d'une vidéo Youtube</p>");
    if (user_config.data[i].action_id === 3)
        return ("<p class=\"reaction_description\">Nouvelle vidéo de votre youtuber favoris</p>");
    if (user_config.data[i].action_id === 4)
        return ("<p class=\"reaction_description\">Gain de fan sur votre page Facebook</p>");
    if (user_config.data[i].action_id === 5)
        return ("<p class=\"reaction_description\">Création d'une nouvelle page Facebook</p>");
    if (user_config.data[i].action_id === 6)
        return ("<p class=\"reaction_description\">Nouveau post sur votre mur Facebook</p>");   
    if (user_config.data[i].action_id === 7)
        return ("<p class=\"reaction_description\">Nouvelle chaîne follow sur Twitch</p>");
    if (user_config.data[i].action_id === 8)
        return ("<p class=\"reaction_description\">Gain de follower sur Twitch</p>");
    if (user_config.data[i].action_id === 9)
        return ("<p class=\"reaction_description\">Passage live de votre streamer favoris</p>");
    if (user_config.data[i].action_id === 10)
        return ("<p class=\"reaction_description\">Soyez notifié par lorsque quelqu'un partage un fichier avec vous sur OneDrive</p>");
    if (user_config.data[i].action_id === 11)
        return ("<p class=\"reaction_description\">Soyez notifié lorsque quelqu'un upload un fichier sur votre Google Drive</p>");
    if (user_config.data[i].action_id === 12)
        return ("<p class=\"reaction_description\">Soyez notifié lorsque quelqu'un upload un fichier sur votre Drive Google Sheet</p>");
}

function get_card_compatible_icon(i) {
    if (user_config.data[i].reaction_id === 1)
        return ("<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>");
    if (user_config.data[i].reaction_id === 2)
        return ("<i class=\"fas fa-file-alt fa-2x\" aria-hidden=\"true\"></i>")
    if (user_config.data[i].reaction_id === 3)
        return ("<i class=\"fa fa-facebook-official fa-2x\" aria-hidden=\"true\"></i>");
}

if (user_config) {
    for (var i = 0; i < user_config.data.length; i++) {
        var card_type = get_card_type(i);
        var card_title = get_card_title(i);
        var main_icon = get_main_icon(i);
        var card_desc = get_card_desc(i);
        var compatible_icon = get_card_compatible_icon(i);

        var result = 
        card_type +
        "<div>" +
        "<div class=\"card_reaction_title\">" + 
        card_title +
        main_icon +
        "</div>"+
        "<div class=\"card_reaction_desc\">" +
        card_desc +
        "</div>" +
        "</div>" +
        "<div onclick=\"send_delete(" + user_config.data[i].id + ");\" class=\"delete_button\">" +
        "<p>Supprimer</p>" +
        "</div>" +
        "<hr class=\"card_separator\">" +
        "<div class=\"compatible\">" +
        compatible_icon +
        "</div>" +
        "</div>";

        $(".reaction").append(result);
    }
}