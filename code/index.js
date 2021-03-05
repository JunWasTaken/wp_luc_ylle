var inter = setInterval(change_bg, 1000);

function change_bg(){
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    var opa = (hour)/(24);
    console.log(hour+' : '+opa);
    $("#div2").css({opacity : opa});
}
