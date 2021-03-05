var inter_bg = setInterval(change_bg, 1000);
var inter_time = setInterval(change_time, 1000);

function change_bg() {
    var date = new Date();
    var hour = date.getHours();

    var opa = (hour) / 24;
    console.log('opacity : ' + opa);

    $("#div2").css({opacity: opa});
}

function change_time(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    console.log('time : '+hour+' : '+minutes);

    $("#hour").text(hour);
    $("#minute").text(minutes);
}
