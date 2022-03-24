function whatTimeIsNow() {
    var nowDate = new Date();
    var nowTime = document.getElementById("nowTime");
    var nowHour = nowDate.getHours();
    if (nowHour < 10) {
        nowHour = "0" + nowHour;
    }
    var nowMitute = nowDate.getMinutes();
    if (nowMitute < 10) {
        nowMitute = "0" + nowMitute;
    }
    nowTime.innerHTML =  nowHour + ":" + nowMitute;
    setTimeout(whatTimeIsNow, 1000);
}