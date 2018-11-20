
time = Date.now();
top1 = $(window).scrollTop()
$(document).ready(function(){
            $("#Introcaption").slideDown(500);



});

index = 1

dic = {1: "makeactive('navhome', '#intro');",
    2:"makeactive('navprize', '#prizes');",
    3:"makeactive('navpartner', '#partners');",
    4:"makeactive('navcont', '#contactUs');"}

$(window).scroll(function(){
    if ((time+1000-Date.now())<0) {

        if(top1 - $(window).scrollTop() < 0){
            top1 = $(window).scrollTop();
            if(index < 4)
            index += 1;
            eval(dic[index]);
            console.log("increment")
        }
        else if(top1 - $(window).scrollTop() > 0){
            top1 = $(window).scrollTop();
            if(index > 0)
            index -= 1;
            eval(dic[index]);
            console.log("decrement")
        }
        time = Date.now()
    }
});