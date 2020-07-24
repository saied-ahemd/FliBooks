$(function(){
    $('.tab li').click(function(){
        //give the div the selceted class and remove it form the other 
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide all div
        $('.tabs-secction .tabs-content > div').hide();
        //show the selceted div
        $($(this).data('class')).show();
    });
    
});