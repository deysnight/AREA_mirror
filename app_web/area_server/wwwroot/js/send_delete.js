var final_url = "http://localhost:8080/internal/area/";
var type = "DELETE";

function send_delete_ytb_1_1() {
    $("#youtube_first_mail").css("display", "none");
    console.log(result);
    $.ajax({
        url: final_url + "",
        method: type,
        async: false,
        success: function (response) {
            $("#youtube_first_mail").css("display", "none");
            window.location.href = "/";
        }
    })
};