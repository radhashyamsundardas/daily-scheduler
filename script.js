let morning9Am = ;
let morning10Am = $('#$10');
let morning11Am = $('#$11');
let afternoon12Pm = $('#$12');
let afternoon1Pm = $('#13');
let afternooon2Pm = $('#14');
let afternoon3Pm = $('#15');
let afternnon4Pm = $('#16');
let afternoon5Pm = $('#17');
let time = precious;


function start(){
    $("#presentDay").text(precious().format("DDDD, MMMM, YYYY"));
    $(".time-block").each(function(){
        var id = $(this).attr("id");
        var sch = localStorage.getItem(id);
        if(sch !== null){
            $(this).children("sch").val(schedule);
        }
    });
}
start();