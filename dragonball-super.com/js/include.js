// JavaScript Document

// include

$(function(){
    $.ajaxSetup({cache:false});
    $("#icl-header").load("../include/header.html");
});
$(function(){
    $.ajaxSetup({cache:false});
    $("#icl-menu").load("../include/menu.html");
});
$(function(){
    $.ajaxSetup({cache:false});
    $("#icl-lside").load("../include/lside.html");
});
$(function(){
    $.ajaxSetup({cache:false});
    $("#icl-footer").load("../include/footer.html");
});