// JavaScript Document

// NEWS

$(function(){
    $.ajax({
        type: 'GET',
        url: 'updates/index.html',
        cache: false,
        datatype: 'html',
    
        success: function(data) {

        var nwUR_1 = $(data).find('.news-item:nth-of-type(1) a').attr('href');
        var nwDY_1 = $(data).find('.news-item:nth-of-type(1) .days b').text();
        var nwDD_1 = $(data).find('.news-item:nth-of-type(1) .days p').text();
        var nwTL_1 = $(data).find('.news-item:nth-of-type(1) .news-title p').html();
        
        var nwUR_2 = $(data).find('.news-item:nth-of-type(2) a').attr('href');
        var nwDY_2 = $(data).find('.news-item:nth-of-type(2) .days b').text();
        var nwDD_2 = $(data).find('.news-item:nth-of-type(2) .days p').text();
        var nwTL_2 = $(data).find('.news-item:nth-of-type(2) .news-title p').html();
        
        var nwUR_3 = $(data).find('.news-item:nth-of-type(3) a').attr('href');
        var nwDY_3 = $(data).find('.news-item:nth-of-type(3) .days b').text();
        var nwDD_3 = $(data).find('.news-item:nth-of-type(3) .days p').text();
        var nwTL_3 = $(data).find('.news-item:nth-of-type(3) .news-title p').html();
        

        $('.news-item:nth-of-type(1)').append('<a href="updates/' + nwUR_1 + '"><section><div class="days"><b>' + nwDY_1 + '</b><p>' + nwDD_1 + '</p></div><div class="news-title"><p>' + nwTL_1 + '</p></div>');
        
        $('.news-item:nth-of-type(2)').append('<a href="updates/' + nwUR_2 + '"><section><div class="days"><b>' + nwDY_2 + '</b><p>' + nwDD_2 + '</p></div><div class="news-title"><p>' + nwTL_2 + '</p></div>');
        
        $('.news-item:nth-of-type(3)').append('<a href="updates/' + nwUR_3 + '"><section><div class="days"><b>' + nwDY_3 + '</b><p>' + nwDD_3 + '</p></div><div class="news-title"><p>' + nwTL_3 + '</p></div>');
        
        }
    });
});




