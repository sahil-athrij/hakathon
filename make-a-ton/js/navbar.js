

previd = "navhome";
prevpage = "#intro";
function makeactive(id,page) {
    var NAME = document.getElementById(id);
    NAME.className="active";
    var NAME = document.getElementById(previd);
    NAME.className=" ";
    previd = id;
    $(prevpage).css('z-index', '-2');
    $(prevpage).animate({
        opacity:0

    },500,function () {
        $(prevpage).css('z-index', '2');
        $(page).animate({
            opacity:1

        },500);
    });


    prevpage = page;



}