var final_url = "http://localhost:8080/internal/area";
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

var data_json =
{
    "id_action": null,
    "id_reaction": null,
    "user_id": USER_ID,
    "timer_area": null,
    "data": {
      "page_id_for_action": null,
      "video_id": null,
      "youtuber_name": null,
      "facebook_page_id": null,
      "streamer_live": null
    }
  }

function send_ytb_1_1() {
    data_json.id_action = 1;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_ytb_1-1").val(), 10);
    console.log(data_json);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_1_2() {
    data_json.id_action = 1;
    data_json.id_reaction = 2;
    data_json.timer_area = parseInt($("#timer_ytb_1-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        dataType : "json",
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_1_3() {
    if (document.getElementById("facebook_page_youtube_1-3").value === "")
        return;
    data_json.id_action = 1;
    data_json.id_reaction = 3;
    data_json.data.page_id_for_reaction = parseInt(document.getElementById("facebook_page_youtube_1-3").value, 10);
    data_json.timer_area = parseInt($("#timer_ytb_1-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_2_1() {
    if (document.getElementById("video_id_youtube_2-1").value === "")
        return;
    data_json.id_action = 2;
    data_json.id_reaction = 1;
    data_json.data.video_id = document.getElementById("video_id_youtube_2-1").value
    data_json.timer_area = parseInt($("#timer_ytb_2-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_2_2() {
    if (document.getElementById("video_id_youtube_2-2").value === "")
        return;
    data_json.id_action = 2;
    data_json.id_reaction = 2;
    data_json.data.video_id = document.getElementById("video_id_youtube_2-2").value
    data_json.timer_area = parseInt($("#timer_ytb_2-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_2_3() {
    if (document.getElementById("video_id_youtube_2-3").value === "")
        return;
    if (document.getElementById("facebook_page_youtube_2-3").value === "")
        return;
    data_json.id_action = 2;
    data_json.id_reaction = 3;
    data_json.data.video_id = document.getElementById("video_id_youtube_2-3").value
    data_json.data.page_id_for_reaction = parseInt(document.getElementById("facebook_page_youtube_2-3").value, 10);
    data_json.timer_area = parseInt($("#timer_ytb_2-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_3_1() {
    if (document.getElementById("youtuber_3-1").value === "")
        return;
    data_json.id_action = 3;
    data_json.id_reaction = 1;
    data_json.data.youtuber_name = document.getElementById("youtuber_3-1").value
    data_json.timer_area = parseInt($("#timer_ytb_3-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_ytb_3_3() {
    if (document.getElementById("youtuber_3-3").value === "")
        return;
    if (document.getElementById("facebook_page_youtube_3-3").value === "")
        return;
    data_json.id_action = 3;
    data_json.id_reaction = 3;
    data_json.data.youtuber_name = document.getElementById("youtuber_3-3").value
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_youtube_3-3").value, 10);
    data_json.timer_area = parseInt($("#timer_ytb_3-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_1_1() {
    if (document.getElementById("page_facebook_1-1").value === "")
        return;
    data_json.id_action = 4;
    data_json.id_reaction = 1;
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-1").value, 10);
    data_json.timer_area = parseInt($("#timer_fb_1-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_1_2() {
    if (document.getElementById("page_facebook_1-2").value === "")
        return;
    data_json.id_action = 4;
    data_json.id_reaction = 2;
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-2").value, 10);
    data_json.timer_area = parseInt($("#timer_fb_1-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        dataType : "json",
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_1_3() {
    if (document.getElementById("facebook_page_facebook_1-3").value === "")
        return;
    if (document.getElementById("page_facebook_1-3").value === "")
        return;
    data_json.id_action = 4;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_facebook_1-3").value, 10);
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-3").value, 10);
    data_json.timer_area = parseInt($("#timer_fb_1-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_2_1() {
    data_json.id_action = 5;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_fb_2-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_2_2() {
    data_json.id_action = 5;
    data_json.id_reaction = 2;
    data_json.timer_area = parseInt($("#timer_fb_2-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_2_3() {
    if (document.getElementById("facebook_page_facebook_2-3").value === "")
        return;
    data_json.id_action = 5;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_facebook_2-3").value, 10);
    data_json.timer_area = parseInt($("#timer_fb_2-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_3_1() {
    data_json.id_action = 6;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_fb_3-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_3_2() {
    data_json.id_action = 6;
    data_json.id_reaction = 2;
    data_json.timer_area = parseInt($("#timer_fb_3-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_fb_3_3() {
    if (document.getElementById("facebook_page_facebook_3-3").value === "")
        return;
    data_json.id_action = 6;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_facebook_3-3").value, 10);
    data_json.timer_area = parseInt($("#timer_fb_3-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_1_1() {
    data_json.id_action = 7;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_twitch_1-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_1_2() {
    data_json.id_action = 7;
    data_json.id_reaction = 2;
    data_json.timer_area = parseInt($("#timer_twitch_1-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_1_3() {
    if (document.getElementById("facebook_page_twitch_1-3").value === "")
        return;
    data_json.id_action = 7;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_twitch_1-3").value, 10);
    data_json.timer_area = parseInt($("#timer_twitch_1-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_2_1() {
    data_json.id_action = 8;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_twitch_2-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_2_2() {
    data_json.id_action = 8;
    data_json.id_reaction = 2;
    data_json.timer_area = parseInt($("#timer_twitch_2-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_2_3() {
    if (document.getElementById("facebook_page_twitch_2-3").value === "")
        return;
    data_json.id_action = 8;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_twitch_2-3").value, 10);
    data_json.timer_area = parseInt($("#timer_twitch_2-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_3_1() {
    if (document.getElementById("streamer_twitch_3-1").value === "")
        return;
    data_json.id_action = 9;
    data_json.id_reaction = 1;
    data_json.data.streamer_live = document.getElementById("streamer_twitch_3-1").value;
    data_json.timer_area = parseInt($("#timer_twitch_3-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_twitch_3_3() {
    if (document.getElementById("streamer_twitch_3-3").value === "")
        return;
    if (document.getElementById("facebook_page_twitch_3-3").value === "")
        return;
    data_json.id_action = 9;
    data_json.id_reaction = 3;
    data_json.data.streamer_live = document.getElementById("streamer_twitch_3-3").value;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_twitch_3-3").value, 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_onedrive_1_1() {
    data_json.id_action = 10;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_onedrive_1-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_onedrive_1_2() {
    data_json.id_action = 10;
    data_json.id_reaction = 2;
    data_json.timer_area = parseInt($("#timer_onedrive_1-2").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_onedrive_1_3() {
    if (document.getElementById("facebook_page_onedrive_1-3").value === "")
        return;
    data_json.id_action = 10;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_onedrive_1-3").value, 10);
    data_json.timer_area = parseInt($("#timer_onedrive_1-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_gdrive_1_1() {
    data_json.id_action = 11;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_gdrive_1-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_gdrive_1_3() {
    if (document.getElementById("facebook_page_gdrive_1-3").value === "")
        return;
    data_json.id_action = 11;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_gdrive_1-3").value, 10);
    data_json.timer_area = parseInt($("#timer_gdrive_1-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_gsheet_1_1() {
    data_json.id_action = 12;
    data_json.id_reaction = 1;
    data_json.timer_area = parseInt($("#timer_gsheet_1-1").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};

function send_gsheet_1_3() {
    if (document.getElementById("facebook_page_gsheet_1-3").value === "")
        return;
    data_json.id_action = 12;
    data_json.id_reaction = 3;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_gsheet_1-3").value, 10);
    data_json.timer_area = parseInt($("#timer_gsheet_1-3").val(), 10);
    $.ajax({
        url: final_url,
        method: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: false,
        data: data_json,
        success: function (response) {
            location.reload();
        }
    })
};