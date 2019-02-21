var final_url = "/internal/area";

var data_json =
{
    "id_action": null,
    "id_reaction": null,
    "data": {
      "page_id_for_action": null,
      "video_id": null,
      "youtuber_name": null,
      "facebook_page_id": null,
      "streamer_live": null
    }
  }

function send_ytb_1_1() {
    data_json.id_action = "ytb01";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_1_2() {
    data_json.id_action = "ytb01";
    data_json.id_reaction = "sheet";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_1_3() {
    if (document.getElementById("facebook_page_youtube_1-3").value === "")
        return;
    data_json.id_action = "ytb01";
    data_json.id_reaction = "facebook";
    data_json.data.page_id_for_reaction = parseInt(document.getElementById("facebook_page_youtube_1-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_2_1() {
    if (document.getElementById("video_id_youtube_2-1").value === "")
        return;
    data_json.id_action = "ytb02";
    data_json.id_reaction = "mail";
    data_json.data.video_id = document.getElementById("video_id_youtube_2-1").value
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_2_2() {
    if (document.getElementById("video_id_youtube_2-2").value === "")
        return;
    data_json.id_action = "ytb02";
    data_json.id_reaction = "sheet";
    data_json.data.video_id = document.getElementById("video_id_youtube_2-2").value
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_2_3() {
    if (document.getElementById("video_id_youtube_2-3").value === "")
        return;
    if (document.getElementById("facebook_page_youtube_2-3").value === "")
        return;
    data_json.id_action = "ytb02";
    data_json.id_reaction = "facebook";
    data_json.data.video_id = document.getElementById("video_id_youtube_2-3").value
    data_json.data.page_id_for_reaction = parseInt(document.getElementById("facebook_page_youtube_2-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_3_1() {
    if (document.getElementById("youtuber_3-1").value === "")
        return;
    data_json.id_action = "ytb03";
    data_json.id_reaction = "mail";
    data_json.data.youtuber_name = document.getElementById("youtuber_3-1").value
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_ytb_3_3() {
    if (document.getElementById("youtuber_3-3").value === "")
        return;
    if (document.getElementById("facebook_page_youtube_3-3").value === "")
        return;
    data_json.id_action = "ytb03";
    data_json.id_reaction = "facebook";
    data_json.data.youtuber_name = document.getElementById("youtuber_3-3").value
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_youtube_3-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_1_1() {
    if (document.getElementById("page_facebook_1-1").value === "")
        return;
    data_json.id_action = "fb01";
    data_json.id_reaction = "mail";
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-1").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_1_2() {
    if (document.getElementById("page_facebook_1-2").value === "")
        return;
    data_json.id_action = "fb01";
    data_json.id_reaction = "sheet";
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-2").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_1_3() {
    if (document.getElementById("facebook_page_facebook_1-3").value === "")
        return;
    if (document.getElementById("page_facebook_1-3").value === "")
        return;
    data_json.id_action = "fb01";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_facebook_1-3").value, 10);
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_1_2() {
    if (document.getElementById("page_facebook_1-2").value === "")
        return;
    data_json.id_action = "fb01";
    data_json.id_reaction = "sheet";
    data_json.data.page_id_for_action = parseInt(document.getElementById("page_facebook_1-2").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_2_1() {
    data_json.id_action = "fb02";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_2_2() {
    data_json.id_action = "fb02";
    data_json.id_reaction = "sheet";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_fb_2_3() {
    if (document.getElementById("facebook_page_facebook_2-3").value === "")
        return;
    data_json.id_action = "fb02";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_facebook_2-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_1_1() {
    data_json.id_action = "twitch01";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_1_2() {
    data_json.id_action = "twitch01";
    data_json.id_reaction = "sheet";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_1_3() {
    if (document.getElementById("facebook_page_twitch_1-3").value === "")
        return;
    data_json.id_action = "twitch01";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_twitch_1-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_2_1() {
    data_json.id_action = "twitch02";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_2_2() {
    data_json.id_action = "twitch02";
    data_json.id_reaction = "sheet";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_2_3() {
    if (document.getElementById("facebook_page_twitch_2-3").value === "")
        return;
    data_json.id_action = "twitch02";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_twitch_2-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_3_1() {
    if (document.getElementById("streamer_twitch_3-1").value === "")
        return;
    data_json.id_action = "twitch03";
    data_json.id_reaction = "mail";
    data_json.data.streamer_live = document.getElementById("streamer_twitch_3-1").value;
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_twitch_3_3() {
    if (document.getElementById("streamer_twitch_3-3").value === "")
        return;
    if (document.getElementById("facebook_page_twitch_3-3").value === "")
        return;
    data_json.id_action = "twitch03";
    data_json.id_reaction = "facebook";
    data_json.data.streamer_live = document.getElementById("streamer_twitch_3-3").value;
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_twitch_3-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_onedrive_1_1() {
    data_json.id_action = "onedrive01";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_onedrive_1_2() {
    data_json.id_action = "onedrive01";
    data_json.id_reaction = "sheet";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_onedrive_1_3() {
    if (document.getElementById("facebook_page_onedrive_1-3").value === "")
        return;
    data_json.id_action = "onedrive01";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_onedrive_1-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_gdrive_1_1() {
    data_json.id_action = "gdrive01";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_gdrive_1_3() {
    if (document.getElementById("facebook_page_gdrive_1-3").value === "")
        return;
    data_json.id_action = "gdrive01";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_gdrive_1-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_gsheet_1_1() {
    data_json.id_action = "gsheet01";
    data_json.id_reaction = "mail";
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};

function send_gsheet_1_3() {
    if (document.getElementById("facebook_page_gsheet_1-3").value === "")
        return;
    data_json.id_action = "gsheet01";
    data_json.id_reaction = "facebook";
    data_json.data.facebook_page_id = parseInt(document.getElementById("facebook_page_gsheet_1-3").value, 10);
    var result = JSON.stringify(data_json);
    console.log(result);
    $.ajax({
        url: final_url,
        method: "POST",
        async: false,
        data: result,
        contentType: 'application/json; charset=utf-8',
        dataType : "json",
        success: function (response) {
            window.location.href = "/";
        }
    })
};